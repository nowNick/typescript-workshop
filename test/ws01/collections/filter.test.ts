///<reference types="jest" />
import { filter } from '@ws01/collections'

const context = describe

const isEven = (n: number) => n % 2 === 0
const sum = (a: number, b: number, idx: number) => a + b

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

  context('when collection is sparse', () => {
    it('skips empty space', () => {
      const collection = Array(4)
      collection[2] = 2
      const truthy = filter(collection, Boolean)
      expect(truthy).toEqual([2])
    })

    it('evaluates empty space as undefined', () => {
      const collection = Array(4)
      const falsey = filter(collection, e => !e)
      expect(falsey).toEqual([undefined, undefined, undefined, undefined])
    })
  })
})

