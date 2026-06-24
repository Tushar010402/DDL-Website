/** Profile IDs that don't have a single price (they have tiers or external links) */
export const PROFILES_WITHOUT_SINGLE_PRICE = new Set([
  7, 12, 13, 17, 18, 19, 23, 24, 31,
]);

/** Profile IDs that have a "View Details" modal instead of inline pricing */
export const DETAIL_MODAL_PROFILES = new Set([7, 12, 17, 19, 23, 24, 31]);

/** Profile IDs excluded from comparison (no meaningful test list) */
export const COMPARISON_EXCLUDED_PROFILES = new Set([13, 17, 18, 19]);

/** Maximum number of packages that can be compared simultaneously */
export const MAX_COMPARISON_COUNT = 3;
