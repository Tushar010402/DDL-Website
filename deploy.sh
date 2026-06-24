#!/usr/bin/env bash
#
# Zero-downtime deploy for the drdangslab Next.js site.
#
# Why this exists: a previous deploy ran `next build` directly over the live
# `.next` directory. That cleans `.next` in place, so for the whole multi-minute
# build the running server served broken assets (HTTP 400). This script never
# touches the live build until a complete, verified new build is ready.
#
# Strategy:
#   1. Build into a temp dir (.next.build) via NEXT_DIST_DIR  -> live site stays 100% up.
#   2. Verify the build actually produced BUILD_ID + static/.
#   3. Atomically swap: .next -> .next.previous, .next.build -> .next.
#   4. Rolling reload of the 2 cluster instances (gapless).
#   5. Health-check; if it fails, roll back to .next.previous instantly.
#
# Usage:  ./deploy.sh
set -euo pipefail

APP_DIR="/var/www/my-next-project"
NAME="drdangslab"
HEALTH="http://127.0.0.1:3002/"
LIVE=".next"
TMP=".next.build"
PREV=".next.previous"

cd "$APP_DIR"
log() { echo "[deploy $(date '+%Y-%m-%d %H:%M:%S')] $*"; }

log "Building into $TMP (live site keeps serving from $LIVE)..."
rm -rf "$TMP"
NEXT_DIST_DIR="$TMP" npm run build

if [ ! -f "$TMP/BUILD_ID" ] || [ ! -d "$TMP/static" ]; then
  log "BUILD INCOMPLETE (missing BUILD_ID or static/). Aborting. Live site untouched."
  rm -rf "$TMP"
  exit 1
fi
log "Build OK (BUILD_ID + static present)."

log "Swapping new build into place..."
rm -rf "$PREV"
[ -d "$LIVE" ] && mv "$LIVE" "$PREV"
mv "$TMP" "$LIVE"

log "Rolling reload of cluster instances (gapless)..."
pm2 reload "$NAME" --update-env >/dev/null

ok=0
for i in $(seq 1 20); do
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$HEALTH" 2>/dev/null || true)
  if [ "$code" = "200" ]; then ok=1; break; fi
  sleep 1
done

if [ "$ok" != "1" ]; then
  log "HEALTH CHECK FAILED (last HTTP=$code). Rolling back to previous build..."
  rm -rf "$LIVE"
  mv "$PREV" "$LIVE"
  pm2 reload "$NAME" --update-env >/dev/null
  log "Rolled back to previous build. Investigate before retrying."
  exit 1
fi

log "Deploy successful and healthy. Previous build kept at $PREV for instant rollback."
