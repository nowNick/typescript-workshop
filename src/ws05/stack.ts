export interface Stack<T> {
  push(val: T): void
  pop(): T | undefined
}

export class Stack<T> implements Stack<T> {
  elements: Array<T>

  constructor() {
    this.elements = []
  }

  push(item: T) {
    this.elements.push(item)
  }

  pop() {
    return this.elements.pop()
  }
}
