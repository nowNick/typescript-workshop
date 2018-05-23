import { List, Mapper, Reducer } from './collections/common'
import { head, tail } from '../ws00/collection'

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
  function rreduce(collection: List<T>, previous: K, index: number): K {
    if(collection.length === 0) {
      return previous
    } else {
      const [head, ...tail] = collection
      const next = reducer(previous, head, index)
      return rreduce(tail, next, index + 1)
    }
  }

  if(initial === undefined) {
    if(collection.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value')
    } else {
      const [head, ...tail] = collection
      return rreduce(tail, head as any as K, 1)
    }
  } else {
    return rreduce(collection, initial, 0)
  }
}
