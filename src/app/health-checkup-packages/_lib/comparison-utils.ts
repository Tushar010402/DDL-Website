/** Ensure tests are in array format (handles object-based tests like menopause/bloating) */
export function ensureTestsArray(tests: unknown): string[] {
  if (Array.isArray(tests)) return tests;
  if (typeof tests === "object" && tests !== null) {
    return Object.keys(tests as Record<string, boolean>).filter(
      (key) => (tests as Record<string, boolean>)[key] === true
    );
  }
  return [];
}

/** Validate that a tier entry has all required fields */
export function validateTierData(tier: {
  key?: string;
  name?: string;
  price?: string;
  tests?: unknown;
} | null): boolean {
  if (!tier) return false;
  if (!tier.key || !tier.name || !tier.price) return false;
  if (!tier.tests) return false;
  return true;
}
