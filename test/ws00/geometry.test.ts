///<reference types="jest" />
import { add, distance, Point, Vector, vector } from '@ws00/geometry'

const context = describe

describe('vector', () => {
  describe('when points are the same', () => {
    it('builds vector from points', () => {
      const a: [number, number, number] = [0, 0, 0]
      const b: Point = [0, 0, 0]
      expect(vector(a, b)).toEqual([0, 0, 0])
    })
  })

  describe('when points are not the same', () => {

    it('builds vector from points', () => {
      const a: [number, number, number] = [0, 0, 0]
      const b: Point = [3, 3, 3]
      // expect(vector(a, b)).toEqual([-3, -3, -3])
      expect(vector(a, b)).toEqual([3, 3, 3]) // Shouldn't this be the correct solution?
    })
  })
})

describe('distance', () => {
  describe('when points are the same', () => {
    it('distance is 0', () => {
      const a: [number, number, number] = [0, 0, 0]
      const b: Point = [0, 0, 0]

      // expect(distance(a, b)).toEqual(0)
      expect(distance(a, b)).toEqual(0)
    })
  })

  describe('when points are not the same', () => {
    it('distance is not 0', () => {
      const a: [number, number, number] = [0, 0, 0]
      const b = [3, 3, 3]
      const c: Point = [3, 3, 3]

      // expect(distance(a, b)).toEqual(0)
      expect(distance(a, c)).toEqual(5.196152422706632)
    })
  })
})

describe('add', () => {
  context('when multiple vectors passed', () => {
    it('adds all vectors', () => {
      const a: [number, number, number] = [0, 0, 0]
      // const b: Point = [3, 3, 3]
      const b: Point = [-3, -3, -3]  // Shouldn't this be correct?
      const v0 = vector(a, b)
      const v1: [number, number, number] = [1, 2, 3]
      const v2: Vector = [2, 3, 4]

      expect(add(v0, v1, v2)).toEqual([0, 2, 4])
    })
  })

  context('when no vectors passed', () => {
    it('returns vector 0', () => {
      expect(add()).toEqual([0, 0, 0])
    })
  })
})
