import { def, get, subject } from '../lazy'
import { curry, partial } from '@ws03/fp'

const context = describe

const increment = (a: number) => a + 1
const sum = (a: number, b: number) => a + b
const randomNumberGenerator = () => 4
const concat = (a: string, b: string, c: string) => [a, b, c].join(',')

describe('fp', () => {
  describe('curry', () => {
    subject(() => curry(get('function')))

    context('when transforming void function', () => {
      def('function', () => randomNumberGenerator)

      it('does nothing', () => {
        expect(subject()).toEqual(get('function')())
      })
    })

    context('when transforming a function with one argument', () => {
      def('function', () => increment)

      it('accepts one argument', () => {
        expect(subject()(1)).toEqual(get('function')(1))
      })
    })

    context('when transforming a function with two arguments', () => {
      def('function', () => sum)

      it('accepts single argument twice', () => {
        expect(subject()(1)(2)).toEqual(get('function')(1, 2))
      })
    })
  })

  describe.skip('partial', () => {
    subject((...args: any[]) => partial(get('function'), ...args))

    context('when transforming void function', () => {
      def('function', () => randomNumberGenerator)

      it('does nothing', () => {
        expect(subject()).toEqual(get('function')())
      })
    })

    context('when transforming a function with one argument', () => {
      def('function', () => increment)

      it('accepts one argument', () => {
        expect(subject(1)).toEqual(get('function')(1))
      })
    })

    context('when transforming a function with two arguments', () => {
      def('function', () => sum)

      it('accepts single argument twice', () => {
        expect(subject(1)(2)).toEqual(get('function')(1, 2))
      })
    })
  })
})