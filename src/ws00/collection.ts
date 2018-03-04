export function timesA (n: number, iteratee: Function) {
  // If the fill function doesn't exist then implement it...
  return Array(n)
    .fill(undefined)
    .map((o, i) => iteratee(i));
}

export function timesB<T> (n: number, iteratee: (i: number) => T): T[] {
  return Array(n)
    .fill(undefined)
    .map((o, i) => iteratee(i));
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
    const ha = head(a)
    const hb = head(b)
    if (ha === undefined || hb === undefined) return undefined
    const t = zipr(tail(a), tail(b))
    const h: [A, B] = [ha, hb]
    if (t) {
      return [h].concat(t)
    } else {
      return [h]
    }
  }

  return zipr(a, b) || []
}
