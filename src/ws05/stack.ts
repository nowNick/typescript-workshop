export interface Stack<T> {
  push(val: T): void
  pop(): T | undefined
}

export class Stack<T> implements Stack<T> {
}
