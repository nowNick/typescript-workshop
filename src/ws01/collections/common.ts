export type Mapping<T, K> = (collection: List<T>) => List<K>
export type Reducing<T, K> = (collection: List<T>) => K
export type List<T> = T[]
export type Mapper<T, K> = (t: T, idx: number) => K
export type Reducer<T, K> = (acc: K, t: T, idx: number) => K

export function identity<V> (value: V) {
  return value
}
