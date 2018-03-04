import { isNullOrUndefined } from 'util'
import { None as INone, Option as IOption, Some as ISome } from './option.i'

export class _Some<T> implements IOption<T> {
}

export function Some<T extends {}> (value: T): ISome<T> {
  return new (_Some as any)(value)
}

export function Option<T> (value?: T | null): IOption<T> {
  return None
}

const returnNone = () => None

export const None: INone = {
  get: () => undefined,
  isDefined: () => false,
  map: returnNone,
  filter: returnNone,
  orElse: (alt: Function) => alt()
}
