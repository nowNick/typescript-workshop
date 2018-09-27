import { List, Reducer } from './common'

function reduce<T> (collection: List<T>, reducer: Reducer<T, T>): T
function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial: K): K
function reduce<T, K> (collection: List<T>, reducer: Reducer<T, K>, initial?: K): K {
  function rreduce (collection: List<T>, previous: K, index: number): K {
    if (collection.length === 0) {
      return previous
    } else {
      const [head, ...tail] = collection
      const next = reducer(previous, head, index)
      return rreduce(tail, next, index + 1)
    }
  }

  if (initial === undefined) {
    if (collection.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value')
    } else {
      const [head, ...tail] = collection
      return rreduce(tail, head as any as K, 1)
    }
  } else {
    return rreduce(collection, initial, 0)
  }
}

export default reduce
