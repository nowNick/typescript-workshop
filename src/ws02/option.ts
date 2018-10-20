import { None as INone, Option as IOption, Some as ISome } from './option.i'

export class _Some<T> implements ISome<T> {
  value: T
  constructor(value: T) {
    if(value instanceof _Some) {
      this.value = value.get()
    }
    else {
      this.value = value
    }
  }

  get() { return this.value }
  isDefined() : this is ISome<T> { return true } // I don't get it...
  map<V>(fn: (a: T) => V | null | undefined) { return Option<V>(fn(this.value)) }
  orElse(alternative: () => T) { return this } // or this one
}

export function Some<T extends {}> (value: T): ISome<T> {
  return new (_Some as any)(value)
}

export function Option<T> (value?: T | null): IOption<T> {
  if(value === undefined || value === null) {
    return None
  } else {
    return Some(value)
  }
}

const returnNone = () => None

export const None: INone = {
  get: () => undefined,
  isDefined: () => false,
  map: returnNone,
  filter: returnNone,
  orElse: <T>(alt: () => T) => Option(alt()),
  isOption: () => true
}
