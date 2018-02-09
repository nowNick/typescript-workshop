///<reference types="jest" />
import { map } from '@ws01/collections'

describe('map', () => {
  describe('when mapping numbers', () => {
    it('maps all values', () => {
      const collection = [1, 1, 2, 3, 5, 8]
      const pow = (n: number) => n*n
      expect(map(collection, pow)).toEqual([1, 1, 4, 9, 25, 64])
    })

    it('carry on types', () => {
      const collection = [1, 1, 2, 3, 5, 8]
      const isEven = (n: number) => n%2 === 0
      const even = map(collection, isEven)
      const strs = map(even, n => n.toString())
      const lens = map(strs, s => s.length)
      expect(lens).toEqual([5, 5, 4, 5, 5, 4])
    })
  })
})
