export function timesA (n: number, iteratee: Function) {
  return n === 0 ? [] : [iteratee(n)].concat(timesA(n - 1, iteratee))
}

export function timesB<T> (n: number, iteratee: (i: number) => T): T[] {
  return timesA(n, iteratee)
}


export function head<T> (t: T[]): T | undefined {
  const [head, ...tail] = t
  return head
}

export function tail<T> (t: T[]): T[] {
  const [head, ...tail] = t
  return tail
}

export function zip<A, B> (a: A[], b: B[]): [A, B][] {
  const headA = head(a)
  const headB = head(b)
  if(headA === undefined || headB === undefined) {
    return []
  } else {
    const t : [A,B][] = zip(tail(a), tail(b))
    const h : [A,B] = [headA, headB]
    if(t === []) {
      return [h]
    } else {
      // return [[headA, headB]].concat(t)  why this doesn't work?
      return [h].concat(t)
    }
  }
}
