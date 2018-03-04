export interface Queue<T> {
  push(val: T): void
}

export interface Queue<T> {
  pop(): T | undefined
}

export class Queue<T> implements Queue<T> {
}
