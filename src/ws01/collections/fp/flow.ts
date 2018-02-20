import { identity } from '../common'

type Transform<A, B> =  (a: A) => B

// :mózg: https://github.com/Microsoft/TypeScript/issues/5453
export function flow<A, B> (a: Transform<A, B>): (a: A) => B
export function flow<A, B, C> (a: Transform<A, B>, b: Transform<B, C>): (a: A) => C
export function flow<A, B, C, D> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>): (a: A) => D
export function flow<A, B, C, D, E> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>): (a: A) => E
export function flow<A, B, C, D, E> (
  a: Transform<A, B>, b?: Transform<B, C>, c?: Transform<C, D>, d?: Transform<D, E>
): Transform<A, B | C | D | E> {
  // return collection => [a, b, c, d].reduce((acc, e) => {
  //   return ((e || identity) as any)(acc)
  // }, collection)
  return (first: A) => {
    const t0 = a(first)
    if (b === undefined)
      return t0
    const t1 = b(t0)
    if (c === undefined) {
      return t1
    }
    return c ? c(t1) : t1
  }
}

interface flow2 {
  <A, B> (a: Transform<A, B>): Transform<A, B>

  <A, B, C> (a: Transform<A, B>, b: Transform<B, C>): Transform<A, C>

  <A, B, C, D> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>): Transform<A, D>

  <A, B, C, D, E> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>): Transform<A, E>
}

export const flow2: flow2 = function (...mappers: Transform<any, any>[]) {
  return (collection: any) => mappers.reduce((acc, e) => {
    return ((e || identity) as any)(acc)
  }, collection)
}

export default flow
