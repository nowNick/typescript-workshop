///<reference types="jest" />
import { timesA, timesB, zip } from '@ws00/collection'

const context = describe

const isEven = (n: number) => n % 2 === 0
const sum = (a: number, b: number, idx: number) => a + b

describe('timesA', () => {
  context('looses type', () => {
    context('when passing 0', () => {
      it('returns empty array', () => {
        const subject = timesA(0, (i: number) => ({a: 'a'}))
        expect(subject).toEqual([])
      })

      it('does not execute', () => {
        const stub = jest.fn()
        const subject = timesA(0, (i: number) => stub())
        expect(stub).not.toHaveBeenCalled()
      })
    })

    context('when passing non zero value', () => {
      it('returns results', () => {
        type foobar = 'bs'
        /// incorrect type in anonymous function
        const subject = timesA(2, (i: number) => {
          // console.log(typeof i, i)
          return {a: 'a'}
        })
        expect(subject).toEqual([{a: 'a'}, {a: 'a'}])
        // subject[0]. ... no syntax prediction
        expect(subject[0].a).toEqual('a')
      })

      it('executes', () => {
        const stub = jest.fn()
        const subject = timesA(2, (i: number) => stub())
        expect(stub).toHaveBeenCalledTimes(2)
      })
    })

  })
})

describe('timesB', () => {
  context('retains the type', () => {
    context('when passing 0', () => {
      it('returns empty array', () => {
        const subject = timesB(0, (i: number) => ({a: 'a'}))
        expect(subject).toEqual([])
      })

      it('does not execute', () => {
        const stub = jest.fn()
        const subject = timesB(0, (i: number) => stub())
        expect(stub).not.toHaveBeenCalled()
      })
    })

    context('when passing non zero value', () => {
      it('returns results', () => {
        const subject = timesB(2, (i: number) => ({a: 'a'}))
        const subject1: { a: string }[] = subject
        expect(subject).toEqual([{a: 'a'}, {a: 'a'}])
        expect(subject[0].a).toEqual('a')
      })

      it('executes', () => {
        const stub = jest.fn()
        const subject = timesB(2, (i: number) => stub())
        expect(stub).toHaveBeenCalledTimes(2)
      })
    })
  })
})

describe('zip', () => {
  context('when first array is empty', () => {
    context('when second array is empty', () => {
      it('returns empty array', () => {
        const a: number[] = []
        const b: any[] = []
        expect(zip(a, b)).toEqual([])
      })
    })

    context('when second array is not empty', () => {
      it('returns empty array', () => {
        const a: number[] = []
        const b: any[] = [{k: 'v'}]
        expect(zip(a, b)).toEqual([])
      })
    })
  })

  context('when first array is not empty', () => {
    context('when second array is empty', () => {
      it('returns empty array', () => {
        const a: number[] = [2]
        const b: any[] = []
        expect(zip(a, b)).toEqual([])
      })
    })

    context('when second array is not empty', () => {
      context('when length of arrays matches', () => {
        it('returns array', () => {
          const a: number[] = [2, 3]
          const b: string[] = ['a', 'b']
          expect(zip(a, b)).toEqual([[2, 'a'], [3, 'b']])
        })
      })

      context('when length of first array is greater than of the second one', () => {
        it('return pairs of length of shorter array', () => {
          const a: number[] = [2, 3, 4]
          const b: string[] = ['a', 'b']
          expect(zip(a, b)).toEqual([[2, 'a'], [3, 'b']])
        })
      })

      context('when length of second array is greater than of the first one', () => {
        it('return pairs of length of shorter array', () => {
          const a: number[] = [2, 3]
          const b: string[] = ['a', 'b', 'c']
          expect(zip(a, b)).toEqual([[2, 'a'], [3, 'b']])
        })
      })
    })
  })
})
