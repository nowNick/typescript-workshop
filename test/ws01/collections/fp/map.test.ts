///<reference types="jest" />
import { map } from '@ws01/collections/fp'
import { identity } from '@ws01/collections/common'

const context = describe

const isEven = (n: number) => n % 2 === 0
const sum = (a: number, b: number, idx: number) => a + b

describe('map', () => {
  describe('when array is not empty', () => {
    context('when array has non empty values', () => {
      it('maps all values', () => {
        const collection = [1, 1, 2, 3, 5, 8]
        const pow = (n: number) => n * n
        expect(map(pow)(collection)).toEqual([1, 1, 4, 9, 25, 64])
      })

      it('carries on types', () => {
        const collection = [1, 1, 2, 3, 5, 8]
        const even = map(isEven)(collection)
        const strs = map(n => n.toString())(even)
        const lens = map((s: string) => s.length)(strs)
        expect(lens).toEqual([5, 5, 4, 5, 5, 4])
      })
    })

    context('when array has undefined values', () => {
      it('maps all values', () => {
        const collection = [true, false, undefined, null]
        const truthy = map(Boolean)(collection)
        expect(truthy).toEqual([true, false, false, false])
      })
    })

    context('when array empty but has size', () => {
      it('maps all values', () => {
        const collection = Array(3)
        const truthy = map(Boolean)(collection)
        expect(truthy).toEqual([false, false, false])
      })
    })

    context('when array is sparse', () => {
      it('maps all values', () => {
        const collection = Array(4)
        collection[2] = 2
        const truthy = map(Boolean)(collection)
        expect(truthy).toEqual([false, false, true, false])
      })

      it('evaluates empty space as undefined', () => {
        const collection = Array(4)
        collection[2] = 2
        const same = map(identity)(collection)
        expect(same).toEqual([undefined, undefined, 2, undefined])
      })
    })
  })

  context('when array is empty', () => {
    it('returns empty array', () => {
      expect(map(() => {})([])).toEqual([])
    })
  })
})


