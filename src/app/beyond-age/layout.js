// Segment layout for the Beyond Age partner booking page.
// This page lives inside the root layout (site navbar + footer remain visible)
// and renders the booking form as a standalone content page.
// No extra wrappers needed — children are passed straight through.

export default function BeyondAgeLayout({ children }) {
  return <>{children}</>;
}
