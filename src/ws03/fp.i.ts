export interface Curry {
  <A, B, X>(fn: (a: A, b: B) => X): (a: A) => (b: B) => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X): (a: A) => (b: B) => (c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X): (a: A) => (b: B) => (c: C) => (d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => X
}

export interface Partial0 {
  <A, B, X>(fn: (a: A, b: B) => X): (a: A) => (b: B) => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X): (a: A) => (b: B, c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C) => X): (a: A) => (b: B, c: C, d: D) => X
}
