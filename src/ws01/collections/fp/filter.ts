import { filter as ifilter } from '../../collections'
import { List, Mapper, Mapping } from '../common'

export function filter<T> (iteratee: Mapper<T, boolean>): Mapping<T, T> {
  return (collection: List<T>) => ifilter(collection, iteratee)
}

export default filter
