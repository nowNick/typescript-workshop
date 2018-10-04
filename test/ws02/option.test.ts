///<reference types="jest" />
import { None, Option, Some } from '@ws02/option'
import { def, get, subject } from '../lazy'

const context = describe

describe('Option', () => {
  describe('construct', () => {

    function itBehavesLikeNone<T> (value: T) {
      it('stores nothing', () => {
        const subject = () => Option(value)

        expect(subject().get()).toEqual(undefined)
      })

      it('is None', () => {
        const subject = () => Option(value)

        expect(subject()).toEqual(None)
      })
    }

    context('when type is a number', () => {
      context('when value is null', () => {
        itBehavesLikeNone(null)
      })
    })

    context('when type is string', () => {
      context('when value is null', () => {
        itBehavesLikeNone(null)
      })

      context('when value is undefined', () => {
        itBehavesLikeNone(undefined)
      })

      context('when value is an empty string', () => {
        it('it is Something', () => {
          const value = ''

          const subject = () => Option(value)

          expect(subject().get()).toEqual(value)
        })
      })

      context('when value is not empty', () => {
        it('it is Something', () => {
          const value = 'something'

          const subject = () => Option(value)

          expect(subject().get()).toEqual(value)
        })
      })
    })
  })

  describe('map', () => {
    const square = (i: number) => i * i

    context('when None', () => {
      def('option', () => None)

      it('maps to None', () => {
        const value: number | undefined = undefined
        const option = Option<number>(value)

        const subject = () => option.map(square)

        expect(subject()).toEqual(None)
      })
    })

    context('when Some', () => {
      it('applies function to value', () => {
        const value = 2
        const option = Some(value)
        const expected = square(value)

        const subject = () => option.map(square)

        expect(subject().get()).toEqual(expected)
      })
    })
  })

  describe('orElse', () => {
    context('when option is None', () => {
      it('fall backs', () => {
        const orElse = () => 'asd'
        const option = Option<string>(undefined)

        const subject = () => option.orElse(orElse)

        expect(subject().get()).toEqual(orElse())
      })
    })

    context('when option is Some', () => {
      it('fall backs', () => {
        const value = 'qwe'
        const orElse = () => 'asd'
        const option = Option<string>(value)

        const subject = () => option.orElse(orElse)

        expect(subject().get()).toEqual(value)
      })
    })
  })

  context.skip('wrapping', () => {
    it('wraps constructor', () => {
      const value = 'asd'
      const subject = Some(Some(value))

      expect(subject.get()).toEqual(value)
    })

    it('wraps map', () => {
      const value = 'asd'
      const subject = Some(value).map(() => Some(value))

      expect(subject.get()).toEqual(value)
    })
  })
})
