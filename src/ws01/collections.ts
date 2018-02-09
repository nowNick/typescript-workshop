import { List, Mapper, Reducer } from './collections/common'

export function map<T, K> (collection: List<T>, iteratee: Mapper<T, K>): List<K> {
  const result: K[] = []
  for (let i = 0; i < collection.length; ++i) {
    const e = collection[i]
    result[i] = iteratee(e, i)
  }
  return result
}

export function filter<T> (collection: List<T>, iteratee: Mapper<T, boolean>): List<T> {
  const result: T[] = []
  for (let i = 0; i < collection.length; ++i) {
    const e = collection[i]
    if (iteratee(e, i)) {
      result.push(e)
    }
  }
  return result
}

export function reduce<T> (collection: List<T>, reducer: Reducer<T, T>): T
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial: K): K
export function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial?: K): K {
  if(initial === undefined && collection.length === 0) {
    throw new TypeError('Reduce of empty array with no initial value')
  }
  let result = initial || collection[0] as any as K
  for( let i = initial ? 0 : 1; i < collection.length; ++i) {
    const e = collection[i]
    result = reducer(result, e, i)
  }
  return result
}
