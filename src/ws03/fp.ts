import { Curry, Partial0 } from '@ws03/fp.i'

function _curry(fn: Function) {
}

function _partial(fn: Function, ...a: any[]) {
}

export const curry = _curry as any as Curry
export const partial = _partial as any as Partial0
