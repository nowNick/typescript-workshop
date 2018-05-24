import imap from '../map'
import { List, Mapper, Mapping } from '../common'

export function map<T, K> (iteratee: Mapper<T, K>): Mapping<T, K> {
  return (collection: List<T>) => []
}

export default map
