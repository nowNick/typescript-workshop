import { Curry, Partial0 } from '@ws03/fp.i'

function _curry(fn: Function) {
  function curry(length: number, ...args: any[]): Function {
    if(length === 0) {
      return fn(...args)
    } else {
      return (last: any) => {
        return curry(length - 1, ...[...args, last])
      }
    }
  }

  return curry(fn.length)
}

function _partial(fn: Function, ...a: any[]) {
  return (...b: any[]) => fn(...b, ...a)
}

export const curry = _curry as any as Curry
export const partial = _partial as any as Partial0
