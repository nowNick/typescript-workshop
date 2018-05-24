import { List, Mapper } from './common'
import { head, tail } from '@ws00/collection'

function filter<T> (collection: List<T>, iteratee: Mapper<T, boolean>): List<T> {
  function rfilter<T> (collection: List<T>, iteratee: Mapper<T, boolean>, index: number = 0): List<T> {
    if (collection.length === 0) {
      return []
    } else {
      const h = head(collection) as T
      if (iteratee(h, index)) {
        return [h].concat(rfilter(tail(collection), iteratee))
      } else {
        return rfilter(tail(collection), iteratee)
      }
    }
  }

  return rfilter(collection, iteratee)
}

export default filter
