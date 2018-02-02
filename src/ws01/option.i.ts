export interface Option<T> {
  get(): T | undefined

  isDefined(): this is Some<T>

  map<V>(fn: (a: T) => V | null | undefined): Option<V>
  filter(fn: (a: T) => boolean): Option<T>
  orElse(alternative: () => Option<T>): Option<T>
  // getOrElse(alternative: T): T

}

export interface Some<T> extends Option<T> {
  get(): T

  isDefined(): true

}

export interface None extends Option<never> {
  isDefined(): false

  get(): undefined

  map(): None
  filter(fn: any): None
  orElse(fn: any): None
  // getOrElse<V>(alternative: V): V
}
