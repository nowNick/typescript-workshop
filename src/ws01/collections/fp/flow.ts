import { map as imap } from '../../collections'
import { filter as ifilter } from '../../collections'
import { identity, List, ListIterator, Mapper } from '../common'

// :mózg: https://github.com/Microsoft/TypeScript/issues/5453
export function flow<A, B> (a: Mapper<A, B>): (collection: List<A>) => List<B>
export function flow<A, B, C> (a: Mapper<A, B>, b: Mapper<B, C>): (collection: List<A>) => List<C>
export function flow<A, B, C, D> (a: Mapper<A, B>, b: Mapper<B, C>, c: Mapper<C, D>): (collection: List<A>) => List<D>
export function flow<A, B, C, D, E> (a: Mapper<A, B>, b: Mapper<B, C>, c: Mapper<C, D>, d: Mapper<D,  E>): (collection: List<A>) => List<E>
export function flow<A, B, C, D, E> (a: Mapper<A, B>, b?: Mapper<B, C>, c?: Mapper<C, D>, d?: Mapper<D, E>): (collection: List<A>) => List<B | C | D | E> {
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

export default flow
