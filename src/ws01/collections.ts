import { List, Mapper, Reducer } from './collections/common'
import { head, tail } from '@ws00/collection'

export function map<T, K> (collection: List<T>, iteratee: Mapper<T, K>): List<K> {
  function rmap (collection: List<T>, iteratee: Mapper<T, K>, index: number = 0): List<K> {
    if (collection.length === 0) {
      return []
    } else {
      const h = head(collection) as T
      return [iteratee(h, index)].concat(rmap(tail(collection), iteratee, index + 1))
    }
  }

  return rmap(collection, iteratee)
}

export function filter<T> (collection: List<T>, iteratee: Mapper<T, boolean>): List<T> {
  function rfilter<T> (collection: List<T>, iteratee: Mapper<T, boolean>, index: number = 0): List<T> {
    if (collection.length === 0) {
      return []
    } else {
      const h = head(collection) as T
      if (iteratee(h, index)) {
        return [h].concat(rfilter(tail(collection), iteratee))
      } else {
        return rfilter(tail(collection), iteratee)
      }
    }
  }

  return rfilter(collection, iteratee)
}

export function reduce<T> (collection: List<T>, reducer: Reducer<T, T>): T
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial: K): K
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial?: K): K {
  if (initial === undefined && collection.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  let result = initial || collection[0] as any as K
  for (let i = initial ? 0 : 1; i < collection.length; ++i) {
    const e = collection[i]
    result = reducer(result, e, i)
  }
  return result
}
