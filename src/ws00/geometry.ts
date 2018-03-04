type Point = [number, number, number]
type Vector = [number, number, number]

function distance0 (a: Point, b: Point) {
  const [xa, ya, za] = a
  const [xb, yb, zb] = b
  return Math.sqrt((xa - xb) ** 2 + (ya - yb) ** 2 + (za - zb) ** 2)
}

const a: [number, number, number] = [0, 0, 0]
const b = [3, 3, 3]
const c: Point = [5, 5, 5]
const d: Vector = [2, 2, 2]

// console.log(distance0(a, b))
console.log(distance0(a, c))
console.log(distance0(a, d))
console.log(distance0(a, [2, 3, 4]))

function vector (a: Point, b: Point): Vector {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}

/// Because of structural typing Vector and Point are the same.
// const v0 = vector(a, b)
const v1 = vector(a, c)
const v2 = vector(a, d)

function add (...vs: Vector[]): Vector {
  return vs.reduce(([x0, y0, z0], v) => {
    const [x1, y1, z1] = v

    return [x0 + x1, y0 + y1, z0 + z1]
  }, [0, 0, 0])
}
