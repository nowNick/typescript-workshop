import { map as imap } from '../../collections'
import { List, ListIterator, Mapper } from '../common'

export function map<T, K> (iteratee: ListIterator<T, K>): Mapper<T, K> {
  return (collection: List<T>) => imap(collection, iteratee)
}

export default map