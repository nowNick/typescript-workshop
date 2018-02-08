import { filter as ifilter } from '../../collections'
import { List, ListIterator, Mapper } from '../common'

export function filter<T> (iteratee: ListIterator<T, boolean>): Mapper<T, T> {
  return (collection: List<T>) => ifilter(collection, iteratee)
}

export default filter