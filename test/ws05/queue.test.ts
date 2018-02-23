///<reference types="jest" />
import { Queue } from '@ws05/queue'

const context = describe

describe('Queue', () => {
  context('when queue is not empty', () => {
    describe('pop', () => {
      it('returns first element', () => {
        const q = new Queue<number>()
        q.push(1)
        q.push(2)
        const subject = () => q.pop()
        expect(subject()).toEqual(1)
        expect(subject()).toEqual(2)
        expect(subject()).toEqual(undefined)
      })
    })
  })

  context('when queue is empty', () => {
    describe('pop', () => {
      it('returns nothing', () => {
        const q = new Queue()
        const subject = q.pop()

        expect(subject).toEqual(undefined)
      })
    })
  })
})
