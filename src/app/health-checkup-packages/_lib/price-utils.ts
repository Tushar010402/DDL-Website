/**
 * Parse an Indian-formatted price string (e.g. "3,500") to a number.
 * Strips commas before parsing so "3,500" correctly becomes 3500, not 3.
 */
export function parseIndianPrice(price: string | undefined): number {
  if (!price) return 0;
  return parseFloat(price.replace(/,/g, "")) || 0;
}

/** Format a number as Indian price string with commas */
export function formatPrice(amount: number): string {
  return amount.toLocaleString("en-IN");
}
