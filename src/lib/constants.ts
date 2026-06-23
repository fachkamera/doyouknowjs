// Number of statically prerendered pages, each with the questions in a different
// random order. Picking one at random in src/proxy.ts approximates per-request
// randomness without server-side rendering. Arbitrary — raise it for more variety.
export const PRERENDERED_VARIANTS = 16
