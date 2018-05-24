export interface Curry {
  // <X>(fn: () => X): () => X // is it ok with curry math?
  <A, X>(fn: (a: A) => X): (a: A) => X
  <A, B, X>(fn: (a: A, b: B) => X): (a: A) => (b: B) => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X): (a: A) => (b: B) => (c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X): (a: A) => (b: B) => (c: C) => (d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X): (a: A) => (b: B) => (c: C) => (d: D) => (e: E) => X
}

export interface Partial0 {
  <X>(fn: () => X): () => X
  <A, X>(fn: (a: A) => X): (a: A) => X
  <A, B, X>(fn: (a: A, b: B) => X): (a: A, b: B) => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X): (a: A, b: B, c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X): (a: A, b: B, c: C, d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X): (a: A, b: B, c: C, d: D, e: E) => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X): (a: A, b: B, c: C, d: D, e: E, f: F) => X

  <A, X>(fn: (a: A) => X, a: A): () => X
  <A, B, X>(fn: (a: A, b: B) => X, a: A): (b: B) => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X, a: A): (b: B, c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X, a: A): (b: B, c: C, d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X, a: A): (b: B, c: C, d: D, e: E) => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X, a: A): (b: B, c: C, d: D, e: E, f: F) => X

  <A, B, X>(fn: (a: A, b: B) => X, a: A, b: B): () => X
  <A, B, C, X>(fn: (a: A, b: B, c: C) => X, a: A, b: B): (c: C) => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X, a: A, b: B): (c: C, d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X, a: A, b: B): (c: C, d: D, e: E) => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X, a: A, b: B): (c: C, d: D, e: E, f: F) => X

  <A, B, C, X>(fn: (a: A, b: B, c: C) => X, a: A, b: B, c: C): () => X
  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X, a: A, b: B, c: C): (d: D) => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X, a: A, b: B, c: C): (d: D, e: E) => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X, a: A, b: B, c: C): (d: D, e: E, f: F) => X

  <A, B, C, D, X>(fn: (a: A, b: B, c: C, d: D) => X, a: A, b: B, c: C, d: D): () => X
  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X, a: A, b: B, c: C, d: D): (e: E) => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X, a: A, b: B, c: C, d: D): (e: E, f: F) => X

  <A, B, C, D, E, X>(fn: (a: A, b: B, c: C, d: D, e: E) => X, a: A, b: B, c: C, d: D, e: E): () => X
  <A, B, C, D, E, F, X>(fn: (a: A, b: B, c: C, d: D, e: E, f: F) => X, a: A, b: B, c: C, d: D, e: E): (f: F) => X
}
