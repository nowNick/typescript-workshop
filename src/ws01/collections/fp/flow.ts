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
  return (v: A) => a(v)
}

// interface flow2 {
//   ???
// }
//
// export const flow2: flow2 = function (...mappers: Transform<any, any>[]) {
//   return (collection: any) => mappers.reduce((acc, e) => {
//     return ((e || identity) as any)(acc)
//   }, collection)
// }

export default flow
