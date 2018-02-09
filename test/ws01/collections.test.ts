///<reference types="jest" />
import { filter, map, reduce } from '../../src/ws01/collections'

const context = describe

const isEven = (n: number) => n % 2 === 0
const sum = (a: number, b: number, idx: number) => a + b

describe('map', () => {
  describe('when mapping numbers', () => {
    it('maps all values', () => {
      const collection = [1, 1, 2, 3, 5, 8]
      const pow = (n: number) => n * n
      expect(map(collection, pow)).toEqual([1, 1, 4, 9, 25, 64])
    })

    it('carry on types', () => {
      const collection = [1, 1, 2, 3, 5, 8]
      const even = map(collection, isEven)
      const strs = map(even, n => n.toString())
      const lens = map(strs, s => s.length)
      expect(lens).toEqual([5, 5, 4, 5, 5, 4])
    })
  })
})

describe('filter', () => {
  context('when the collection is not empty', () => {
    context('when filtering numbers', () => {
      it('filters even numbers', () => {
        const collection = [1, 1, 2, 3, 5, 8]
        expect(filter(collection, isEven)).toEqual([2, 8])
      })
    })
  })
  context('when the collection is empty', () => {
    it('does nothing', () => {
      expect(filter([], isEven)).toEqual([])
    })
  })
})

describe('reduce', () => {
  context('when initial value is not provided', () => {
    context('when collection is empty', () => {
      it('fails', () => {
        expect(() => reduce([], sum)).toThrowError(TypeError)
      })
    })

    context('when collection is not empty', () => {
      it('uses first element as initial value', () => {
        const collection = [1, 1, 2, 3, 5, 8]
        expect(reduce(collection, sum)).toEqual(20)
      })
    })
  })

  context('when initial value is provided', () => {
    context('when collection is empty', () => {
      it('returns initial value', () => {
        const initialValue = -1
        expect(reduce([], sum, initialValue)).toEqual(initialValue)
      })
    })

    context('when collection is not empty', () => {
      it('uses first element as initial value', () => {
        const collection = [1, 1, 2, 3, 5, 8]
        expect(reduce(collection, sum, -1)).toEqual(19)
      })
    })
  })
})
