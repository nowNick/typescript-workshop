import { isNullOrUndefined } from 'util'
import { None as INone, Option as IOption, Some as ISome } from './option.i'

export class _Some<T> implements IOption<T> {
  value: T

  constructor (value: T) {
    this.value = value
  }

  get () {
    return this.value
  }

  isDefined () {
    return true
  }

  map<V> (fn: (t: T) => V | null | undefined) {
    return Option(fn(this.value))
  }

  filter (fn: (t: T) => boolean) {
    return fn(this.value) ? this : None
  }

  orElse (alternative: () => IOption<T>) {
    return this
  }
}

export function Some<T extends {}> (value: T): ISome<T> {
  return new (_Some as any)(value)
}

export function Option<T> (value?: T | null): IOption<T> {
  if (isNullOrUndefined(value)) {
    return None
  } else {
    return Some(value)
  }
}

const returnNone = () => None

function makeNone() {
  const self: any = {}

  self.get = () => undefined
  self.isDefined = () => false
  self.map = returnNone
  self.orElse = (alt: Function) => alt()

  return self as INone
}

export const None: INone = {
  get: () => undefined,
  isDefined: () => false,
  map: returnNone,
  filter: returnNone,
  orElse: returnNone
}
