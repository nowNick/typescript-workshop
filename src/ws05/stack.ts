export interface Stack<T> {
  push(val: T): void
  pop(): T | undefined
}

export class Stack<T> implements Stack<T> {
  _store: T[] = [];

  push(val: T) {
    this._store.push(val);
  }
  pop(): T | undefined {
    return this._store.pop();
  }
}
