import { List, Mapper, Reducer } from './collections/common'
import { head, tail } from '../ws00/collection'

export function map<T, K> (collection: List<T>, iteratee: Mapper<T, K>): List<K> {
  return []
}

export function filter<T> (collection: List<T>, iteratee: Mapper<T, boolean>): List<T> {
  return []
}

export function reduce<T> (collection: List<T>, reducer: Reducer<T, T>): T
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial: K): K
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial?: K): K {
  return initial || collection[0] as any as K
}
