import { Mapper, Reducer } from '@ws01/collections/common'
import { flow2 } from './ws01/collections/fp/flow'
import { reduce as reduce2 } from './ws01/collections'

function* fibonacciNumbers (): IterableIterator<number> {
  let [i, j] = [0, 1]

  while (true) {
    yield i

    const t = i + j
    j = i
    i = t
  }
}

const f = fibonacciNumbers()

export function value<T> (iterator: Iterable<T> | Iterator<T>): ArrayLike<T> {
  return Array.from((iterator as Iterable<T>))
}

export function take<T> (n?: number): (iterator: Iterator<T> | Iterable<T>) => IterableIterator<T> {
  return function* (collection: any) {
    const iterator = collection[Symbol.iterator]() as Iterator<T>

    let e = iterator.next()
    let index = 0
    while (!e.done && (n === undefined || index++ < n)) {
      yield e.value
      e = iterator.next()
    }
  }
}

export function map<T, K> (iteratee: Mapper<T, K>): (collection: Iterator<T> | Iterable<T>) => IterableIterator<K> {
  return function* (collection: any) {
    const iterator = collection[Symbol.iterator]() as Iterator<T>

    let e = iterator.next()
    let index = 1
    while (!e.done) {
      yield iteratee(e.value, index++)
      e = iterator.next()
    }
  }
}

export function reduce<T> (reducer: Reducer<T, T>): (collection: Iterator<T> | Iterable<T>) => T
export function reduce<T, K> (reducer: Reducer<T, K>, initial: K): (collection: Iterator<T> | Iterable<T>) => K
export function reduce<T, K> (reducer: Reducer<T, K | T>, initial?: K) {
  return function (collection: any) {
    const iterator = collection[Symbol.iterator]() as Iterator<T>

    const v = value(iterator)
    console.log(v)

    return reduce2(v as any, reducer as any)
  }
}

const sum = (a: number, b: number) => {
  return a + b
}
const result = flow2(
  map((x: number) => x + 1),
  map((x: number): number => x * x),
  take(5),
  reduce(sum)
)(fibonacciNumbers())

console.log('sum', result)

//   console.log('b', x)
//   return x * x
// })(b)
// const d = take(c)
// console.log('d', d)
