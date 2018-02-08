import { List, ListIterator } from './collections/common'

export function map<T, K> (collection: List<T>, iteratee: ListIterator<T, K>): List<K> {
  const result: K[] = []
  for (let i = 0; i < collection.length; ++i) {
    const e = collection[i]
    result[i] = iteratee(e, i)
  }
  return result
}

export function filter<T> (collection: List<T>, iteratee: ListIterator<T, boolean>): List<T> {
  const result: T[] = []
  for (let i = 0; i < collection.length; ++i) {
    const e = collection[i]
    if (iteratee(e, i)) {
      result.push(e)
    }
  }
  return result
}
