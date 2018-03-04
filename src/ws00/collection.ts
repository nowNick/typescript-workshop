export function timesA (n: number, iteratee: Function) {
}

export function timesB<T> (n: number, iteratee: (i: number) => T): T[] {
  return []
}


function head<T> (t: T[]): T | undefined {
  const [head, ...tail] = t
  return head
}

export function tail<T> (t: T[]): T[] {
  const [head, ...tail] = t
  return tail
}

export function zip<A, B> (a: A[], b: B[]): [A, B][] {
  function zipr<A, B> (a: A[], b: B[]): [A, B][] | undefined {
    return undefined
  }

  return zipr(a, b) || []
}
