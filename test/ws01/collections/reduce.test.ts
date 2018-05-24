///<reference types="jest" />
import { reduce } from '@ws01/collections'

const context = describe

const isEven = (n: number) => n % 2 === 0
const sum = (a: number, b: number, idx: number) => a + b

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
