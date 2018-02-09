import { identity, List, Mapping, Reducing } from '../common'

// :mózg: https://github.com/Microsoft/TypeScript/issues/5453
export function flow<A, B> (a: Mapping<A, B>): (collection: List<A>) => List<B>
export function flow<A, B, C> (a: Mapping<A, B>, b: Mapping<B, C>): (collection: List<A>) => List<C>
export function flow<A, B, C, D> (a: Mapping<A, B>, b: Mapping<B, C>, c: Mapping<C, D>): (collection: List<A>) => List<D>
export function flow<A, B, C, D, E> (a: Mapping<A, B>, b: Mapping<B, C>, c: Mapping<C, D>, d: Mapping<D, E>): (collection: List<A>) => List<E>
export function flow<A, B, C, D, E> (a: Mapping<A, B>, b?: Mapping<B, C>, c?: Mapping<C, D>, d?: Mapping<D, E>): (collection: List<A>) => List<B | C | D | E> {
  // return collection => [a, b, c, d].reduce((acc, e) => {
  //   return ((e || identity) as any)(acc)
  // }, collection)
  return (collection: List<A>) => {
    const t0 = a(collection)
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
  <A, B> (a: Mapping<A, B>): (collection: List<A>) => List<B>

  <A, B, C> (a: Mapping<A, B>, b: Mapping<B, C>): (collection: List<A>) => List<C>

  <A, B, C> (a: Mapping<A, B>, b: Reducing<B, C>): (collection: List<A>) => C

  <A, B, C, D> (a: Mapping<A, B>, b: Mapping<B, C>, c: Mapping<C, D>): (collection: List<A>) => List<D>

  <A, B, C, D, E> (a: Mapping<A, B>, b: Mapping<B, C>, c: Mapping<C, D>, d: Mapping<D, E>): (collection: List<A>) => List<E>
}

export const flow2: flow2 = function (...mappers: Mapping<any, any>[]) {
  return (collection: any) => mappers.reduce((acc, e) => {
    return ((e || identity) as any)(acc)
  }, collection)
}

export default flow
