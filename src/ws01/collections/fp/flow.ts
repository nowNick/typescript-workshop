import { identity } from '../common'

type Transform<A, B> =  (a: A) => B

// :mózg: https://github.com/Microsoft/TypeScript/issues/5453
export function flow<A, R> (a: Transform<A, R>): (a: A) => R
export function flow<A, B, R> (a: Transform<A, B>, b: Transform<B, R>): (a: A) => R
export function flow<A, B, C, R> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, R>): (a: A) => R
export function flow<A, B, C, D, R> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, R>): (a: A) => R
export function flow<A, B, C, D, E, R> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>, e: Transform<E, R>): (a: A) => R
export function flow<A, B, C, D, E, F> (
  a: Transform<A, B>, b?: Transform<B, C>, c?: Transform<C, D>, d?: Transform<D, E>, e?: Transform<E, F>
): Transform<A, B | C | D | E | F> {
  // return collection => [a, b, c, d].reduce((acc, e) => {
  //   return ((e || identity) as any)(acc)
  // }, collection)
  return (first: A) => {
    const t0 = a(first)
    return t0
  }
}

interface flow2 {
  <A, B> (a: Transform<A, B>): Transform<A, B>

  <A, B, C> (a: Transform<A, B>, b: Transform<B, C>): Transform<A, C>

  <A, B, C, D> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>): Transform<A, D>

  <A, B, C, D, E> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>): Transform<A, E>

  <A, B, C, D, E, F> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>, e: Transform<E, F>): Transform<A, F>

  <A, B, C, D, E, F, G> (a: Transform<A, B>, b: Transform<B, C>, c: Transform<C, D>, d: Transform<D, E>, e: Transform<E, F>, f: Transform<E, G>): Transform<A, G>
}

export const flow2: flow2 = function (...mappers: Transform<any, any>[]) {
  return (collection: any) => mappers.reduce((acc, e) => {
    return ((e || identity) as any)(acc)
  }, collection)
}

export default flow
