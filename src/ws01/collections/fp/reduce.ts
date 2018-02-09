import { reduce as ireduce } from '../../collections'
import { List, Reducer, Reducing } from '../common'

export function reduce<T> (reducer: Reducer<T, T>): Reducing<T, T>
export function reduce<T, K> (reducer: Reducer<T, K>, initial: K): Reducing<T, K>
export function reduce<T, K> (reducer: Reducer<T, K | T>, initial?: K) {
  if(initial) {
    return (collection: List<T>) => ireduce(collection, reducer, initial)
  } else {
    return (collection: List<T>) => ireduce(collection, reducer as any as Reducer<T, T>)
  }
}

export default reduce
