import { isNullOrUndefined } from 'util'

export interface Option<T> {
  get(): T | undefined
  isDefined(): this is Some<T>

  map<V>(fn: (a: T) => V | null | undefined): Option<V>
}

export interface Some<T> extends Option<T> {
  get(): T
  isDefined(): true
}

export interface None extends Option<any> {
  isDefined(): false
  get(): undefined

  map(): None
}

export class _Some<T> implements Option<T> {
  value: T

  constructor(value: T) {
    this.value = value
  }

  get() {
    return this.value
  }

  isDefined() {
    return true
  }

  map<V>(fn: (t: T) => V | null | undefined) {
    return Option(fn(this.value))
  }
}

export function Option<T>(value?: T | null): Option<T> {
  if(isNullOrUndefined(value)) {
    return None
  } else {
    return Some(value)
  }
}

export function Some<T extends {}>(value: T): Some<T> {
  return new (_Some as any)(value)
}

export const None = {
  get: () => undefined,
  isDefined: () => false,
  map: () => None
}

