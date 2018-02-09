///<reference types="jest" />
import { map, flow } from '@ws01/collections/fp'

describe('map', () => {
  it('maps all values', () => {
    const collection = [1, 1, 2, 3, 5, 8]
    const pow = (n: number) => n*n
    expect(map(pow)(collection)).toEqual([1, 1, 4, 9, 25, 64])
  })

  it('flows!', () => {
    const collection = [1, 1, 2, 3]
    const pow = (n: number) => n*n

    expect(flow(map(pow), map(pow))(collection)).toEqual([1, 1, 16, 81])
  })

  it('flies', () => {
    const collection = [1, 1, 2, 3]
    const pow = (n: number) => n*n

    expect(flow(map(pow), map(pow), map(pow))(collection)).toEqual([1, 1, 256, 6561])
  })
})