export interface Queue<T> {
  push(val: T): void
}

export interface Queue<T> {
  pop(): T | undefined
}

export class Queue<T> implements Queue<T> {
  elements: Array<T>

  constructor() {
    this.elements = []
  }

  pop() {
    return this.elements.shift()
  }

  push(item: T) {
    this.elements.push(item)
  }
}
