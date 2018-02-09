import { map as imap } from '../../collections'
import { List, Mapper, Mapping } from '../common'

export function map<T, K> (iteratee: Mapper<T, K>): Mapping<T, K> {
  return (collection: List<T>) => imap(collection, iteratee)
}

export default map
