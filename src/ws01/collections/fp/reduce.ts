import ireduce from '../reduce'
import { List, Reducer, Reducing } from '../common'

function reduce<T> (reducer: Reducer<T, T>): Reducing<T, T>
function reduce<T, K> (reducer: Reducer<T, K>, initial: K): Reducing<T, K>
function reduce<T, K> (reducer: Reducer<T, K | T>, initial?: K) {
  if (initial === undefined) {
    return (collection: List<T>) => ireduce(collection, reducer as Reducer<T,T>)
  } else {
    return (collection: List<T>) => ireduce(collection, reducer, initial)
  }
}

export default reduce
