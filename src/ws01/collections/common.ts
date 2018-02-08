export type Mapper<T, K> = (collection: List<T>) => List<K>
export type List<T> = T[]
export type ListIterator<T, K> = (t: T, idx?: number) => K

export function identity<V> (value: V) {
  return value
}
