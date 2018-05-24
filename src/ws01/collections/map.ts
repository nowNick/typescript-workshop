import { List, Mapper } from './common'
import { head, tail } from '@ws00/collection'

function map<T, K> (collection: List<T>, iteratee: Mapper<T, K>): List<K> {
  function rmap (collection: List<T>, iteratee: Mapper<T, K>, index: number = 0): List<K> {
    if (collection.length === 0) {
      return []
    } else {
      const h = head(collection) as T
      return [iteratee(h, index)].concat(rmap(tail(collection), iteratee, index + 1))
    }
  }

  return rmap(collection, iteratee)
}

export default map
