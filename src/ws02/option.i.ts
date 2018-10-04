export interface Option<T> {
  get(): T | undefined

  isDefined(): this is Some<T>

  map<V>(fn: (a: T) => V | null | undefined): Option<V>
  filter(fn: (a: T) => boolean): Option<T>
  orElse(alternative: () => T): Option<T>
  // getOrElse(alternative: T): T

  isOption: () => true
}

export interface Some<T> extends Option<T> {
  get(): T

  isDefined(): true

}

export interface None extends Option<never> {
  isDefined(): false

  get(): undefined
}
