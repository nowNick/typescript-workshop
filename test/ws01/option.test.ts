///<reference path="../../node_modules/@types/jest/index.d.ts"/>
import { None, Option, Some } from '../../src/ws01/option'
import { def, get, subject } from '../lazy'

const context = describe

describe('Option', () => {
  describe('construct', () => {
    subject(() => Option(get('value')))

    function itBehavesLikeNone () {
      it('stores nothing', () => {
        expect(subject().get()).toEqual(undefined)
      })

      it('is None', () => {
        expect(subject()).toEqual(None)
      })
    }

    context('when type is a number', () => {
      context('when value is null', () => {
        def('value', () => null)

        itBehavesLikeNone()
      })
    })

    context('when type is string', () => {
      context('when value is null', () => {
        def('value', () => null)

        itBehavesLikeNone()
      })

      context('when value is undefined', () => {
        def('value', () => undefined)

        itBehavesLikeNone()
      })

      context('when value is an empty string', () => {
        def('value', () => '')

        it('it is Something', () => {
          expect(subject().get()).toEqual(get('value'))
        })
      })

      context('when value is not empty', () => {
        def('value', () => 'something')

        it('it is Something', () => {
          expect(subject().get()).toEqual(get('value'))
        })
      })
    })
  })

  describe('map', () => {
    subject(() => get('option').map(get('square')))

    def('square', () => (i: number) => i * i)

    context('when None', () => {
      def('option', () => None)

      it('maps to None', () => {
        expect(subject()).toEqual(None)
      })
    })

    context('when Some', () => {
      def('option', () => Some(get('value')))
      def('value', () => 2)
      def('expected', () => get('square')(get('value')))

      it('applies function to value', () => {
        expect(subject().get()).toEqual(get('expected'))
      })
    })
  })

  describe('orElse', () => {
    subject(() => get('option').orElse(() => get('else')))

    def('else', () => Some('asd'))

    context('when option is None', () => {
      def('option', () => None)

      it('fall backs', () => {
        expect(subject()).toEqual(get('else'))
      })
    })

    context('when option is Some', () => {
      def('option', () => Some('qwe'))

      it('fall backs', () => {
        expect(subject()).toEqual(get('option'))
      })
    })
  })
})
