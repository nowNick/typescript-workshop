import { Curry, Partial0 } from '@ws03/fp.i'

function _curry<T,R>(fn: (...args: T[]) => R) {
  function curry(length: number, ...args: any[]) {
    if(length === 0) {
      if(args.length === 0) {
        return () => fn()
      }
      else {
        return fn(...args)
      }
    } else {
      return (arg: any): any => {
        return curry(length - 1, ...[...args, arg])
      }
    }
  }

  return curry(fn.length)
}

function _partial(fn: Function, ...a: any[]) {
  return (...args: any[]) => fn(...args, ...a)
}

export const curry = _curry as any as Curry
export const partial = _partial as any as Partial0
