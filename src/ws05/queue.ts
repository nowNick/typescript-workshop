export interface Queue<T> {
  push(val: T): void
}

export interface Queue<T> {
  pop(): T | undefined
}

export class Queue<T> implements Queue<T> {
  _store: T[] = []

  push (val: T) {
    this._store.push(val)
  }

  pop (): T | undefined {
    return this._store.shift()
  }
}