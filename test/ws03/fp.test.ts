import { curry, partial } from '@ws03/fp'

const context = describe

const increment = (a: number) => a + 1
const sum = (a: number, b: number) => a + b
const randomNumberGenerator = () => 4
const concat = (a: string, b: string, c: string) => [a, b, c].join(',')

describe('fp', () => {
  describe('curry', () => {
    context('when transforming void function', () => {
      it.skip('does nothing', () => {
        const subject = curry(randomNumberGenerator)
        expect(subject()).toEqual(randomNumberGenerator())
      })
    })

    context('when transforming a function with one argument', () => {
      it('accepts one argument', () => {
        const subject = curry(increment)
        expect(subject(1)).toEqual(increment(1))
      })
    })

    context('when transforming a function with two arguments', () => {
      it('accepts single argument twice', () => {
        const subject = curry(sum)
        expect(subject(1)(2)).toEqual(sum(1, 2))
      })
    })
  })

  describe('partial', () => {
    context('when transforming void function', () => {
      it('does nothing', () => {
        const subject = partial(randomNumberGenerator)
        expect(subject()).toEqual(randomNumberGenerator())
      })
    })

    context('when transforming a function with one argument', () => {
      context('when providing no arguments', () => {
        it('accepts one arguments', () => {
          const subject = partial(increment)
          expect(subject(1)).toEqual(increment(1))
        })
      })

      context('when providing one argument', () => {
        it('accepts no arguments', () => {
          const subject = partial(increment, 1)
          expect(subject()).toEqual(increment(1))
        })
      })
    })

    context('when transforming a function with two arguments', () => {
      context('when providing no arguments', () => {
        it('accepts two arguments', () => {
          const subject = partial(sum)
          expect(subject(1, 2)).toEqual(sum(1, 2))
        })
      })

      context('when providing one arguments', () => {
        it('accepts one argument', () => {
          const subject = partial(sum, 1)
          expect(subject(2)).toEqual(sum(1, 2))
        })
      })

      context('when providing one arguments', () => {
        it('accepts single argument twice', () => {
          const subject = partial(sum, 1, 2)
          expect(subject()).toEqual(sum(1, 2))
        })
      })
    })
  })
})
