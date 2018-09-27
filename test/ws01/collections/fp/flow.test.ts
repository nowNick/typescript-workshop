///<reference types="jest" />
import { flow, map, reduce } from '@ws01/collections/fp'

const context = describe
const pow = (n: number) => n * n
const sum = (a: number, b: number, idx: number) => a + b
const join = (a: number[], b: number[], idx: number) => ([] as number[]).concat(a).concat(b)

describe('flow', () => {
  it('maps all values', () => {
    const collection = [1, 1, 2, 3, 5, 8]
    expect(map(pow)(collection)).toEqual([1, 1, 4, 9, 25, 64])
  })

  it('flows!', () => {
    const collection = [1, 1, 2, 3]
    expect(flow(map(pow), map(pow))(collection)).toEqual([1, 1, 16, 81])
  })

  it('flies', () => {
    const collection = [1, 1, 2, 3]

    expect(flow(map(pow), map(pow), map(pow))(collection)).toEqual([1, 1, 256, 6561])
  })

  it('maps reduces', () => {
    const collection = [1, 1, 2, 3]
    expect(flow(map(pow), reduce(sum))(collection)).toEqual(15)
  })

  it('maps reduces maps', () => {
    const collection: number[][] = [[1, 2], [1, 2], [2, 5], [3, 3]]
    expect(flow(map(map(pow)), reduce(join, []))(collection)).toEqual([1, 4, 1, 4, 4, 25, 9, 9])
  })

  it('maps reduces maps', () => {
    const collection: number[][] = [[1, 2], [1, 2], [2, 5], [3, 3]]
    expect(flow(
      map(map(pow)),
      reduce(join, []),
      map(t => t % 2 === 0)
    )(collection)).toEqual([
      false, true, false, true, true, false, false ,false
    ])
  })
})
