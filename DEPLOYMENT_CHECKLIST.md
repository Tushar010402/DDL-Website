# WWW Domain Redirect - Deployment Checklist

## Overview
This deployment implements a permanent redirect from `drdangslab.com` to `www.drdangslab.com` for better SEO and to prevent duplicate content issues.

## Changes Made

### 1. Redirect Configuration Files
- ✅ `.htaccess` - Apache server-level 301 redirect
- ✅ `middleware.js` - Next.js application-level redirect

### 2. URL Updates
- ✅ Updated 86 hardcoded URLs from `https://drdangslab.com` to `https://www.drdangslab.com`
- ✅ Updated metadata in all page.js files
- ✅ Updated component links (AlzheimersTest, SwineFlue)

### 3. SEO Configuration
- ✅ Created `public/robots.txt` with www sitemap reference
- ✅ Verified `sitemap.js` uses www URLs (via NEXT_PUBLIC_BASE_URL)
- ✅ Created `.env.example` with correct base URL

### 4. Build Verification
- ✅ Next.js build completed successfully
- ✅ All 108 pages generated without errors

---

## Deployment Steps

### Step 1: Backup Current Production
```bash
# SSH into your server
ssh user@your-server

# Create backup
cd /var/www
tar -czf drdangslab-backup-$(date +%Y%m%d).tar.gz drdangslab.com/
```

### Step 2: Deploy Files to Production Server
Upload these files to your production server:
```
.htaccess
middleware.js
public/robots.txt
.env.example
next.config.mjs
src/ (all updated files)
```

### Step 3: Set Environment Variable
```bash
# Create or update .env.production file
echo "NEXT_PUBLIC_BASE_URL=https://www.drdangslab.com" > .env.production
```

### Step 4: Build on Production
```bash
cd /var/www/drdangslab.com
npm install
npm run build
```

### Step 5: Restart Application
```bash
# If using PM2
pm2 restart drdangslab

# If using systemd
sudo systemctl restart drdangslab

# If using direct node
# (kill existing process and restart)
```

### Step 6: Verify Apache Configuration
Ensure Apache has mod_rewrite enabled:
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

---

## Post-Deployment Testing

### Test 1: Verify Redirect
```bash
# Test non-www redirect
curl -I https://drdangslab.com/

# Expected output should include:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.drdangslab.com/
```

### Test 2: Verify Pages Load
```bash
# Test homepage
curl -I https://www.drdangslab.com/

# Expected output:
# HTTP/1.1 200 OK
```

### Test 3: Browser Testing
1. Open browser in incognito mode
2. Visit `https://drdangslab.com/`
3. Verify it redirects to `https://www.drdangslab.com/`
4. Check browser address bar shows www version

### Test 4: Verify Sitemap
```bash
# Check sitemap URLs
curl https://www.drdangslab.com/sitemap.xml

# All URLs should start with https://www.drdangslab.com
```

### Test 5: Verify Robots.txt
```bash
curl https://www.drdangslab.com/robots.txt

# Should show www sitemap URL
```

---

## SEO Updates (Within 24-48 hours)

### Google Search Console
1. **Add new property:**
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Click "Add Property"
   - Add `https://www.drdangslab.com`
   - Verify ownership (HTML tag or Google Analytics)

2. **Set preferred domain:**
   - In old property settings, note any messages about preferred domain
   - The 301 redirect will automatically signal to Google that www is preferred

3. **Submit sitemap:**
   - In the new www property
   - Go to Sitemaps section
   - Submit: `https://www.drdangslab.com/sitemap.xml`

4. **Request re-indexing:**
   - Use URL Inspection tool
   - Test important pages
   - Request indexing for key URLs

### Google Analytics (if applicable)
1. Update property settings to reflect www domain
2. Verify tracking is working on www version

### Other SEO Tools
- Update Bing Webmaster Tools
- Update any paid advertising campaigns (Google Ads, etc.)
- Update social media links to use www version
- Update any third-party directories or listings

---

## Monitoring

### Week 1: Daily Checks
- ✓ Monitor server logs for redirect errors
- ✓ Check Google Search Console for crawl errors
- ✓ Verify analytics traffic is tracking correctly
- ✓ Monitor page load speeds

### Week 2-4: Weekly Checks
- ✓ Review Google Search Console performance
- ✓ Check for any 404 errors
- ✓ Monitor search rankings
- ✓ Verify backlinks are resolving correctly

---

## Rollback Plan (If Needed)

If issues occur:

1. **Remove .htaccess redirect:**
```bash
# Comment out redirect in .htaccess
# RewriteEngine On
# RewriteCond %{HTTP_HOST} ^drdangslab\.com$ [NC]
# RewriteRule ^(.*)$ https://www.drdangslab.com/$1 [R=301,L]
```

2. **Remove middleware.js:**
```bash
mv middleware.js middleware.js.backup
```

3. **Restart application:**
```bash
pm2 restart drdangslab
# or
sudo systemctl restart drdangslab
```

4. **Restore from backup if needed:**
```bash
cd /var/www
tar -xzf drdangslab-backup-YYYYMMDD.tar.gz
```

---

## Troubleshooting

### Issue: Redirect not working
**Solution:** Check Apache mod_rewrite is enabled
```bash
sudo a2enmod rewrite
sudo systemctl restart apache2
```

### Issue: Redirect loop
**Solution:** Check both .htaccess and middleware.js aren't conflicting
- Ensure .htaccess only redirects non-www to www
- Ensure middleware.js has correct logic

### Issue: Some pages not redirecting
**Solution:** Clear browser cache and test in incognito mode

### Issue: Search rankings dropped
**Expected:** Minor fluctuation in first 1-2 weeks is normal
**Action:** Monitor for 2-4 weeks, rankings should stabilize

---

## Support Contacts

- **Hosting Provider:** [Your hosting support]
- **DNS Provider:** [Your DNS support]
- **Developer:** Claude Code

---

## Completion Checklist

Before marking deployment complete:

- [ ] All files deployed to production
- [ ] Environment variable set
- [ ] Application built and restarted
- [ ] Redirect tested and working
- [ ] Sitemap verified
- [ ] Robots.txt verified
- [ ] Google Search Console updated
- [ ] Monitoring in place
- [ ] Team notified of changes
- [ ] Documentation updated

**Deployment Date:** _______________
**Deployed By:** _______________
**Verified By:** _______________

---

## Expected Results

✅ All traffic to `drdangslab.com` redirects to `www.drdangslab.com`
✅ SEO consolidates to single domain
✅ No duplicate content issues
✅ Improved search engine crawling
✅ Consistent branding across all pages
