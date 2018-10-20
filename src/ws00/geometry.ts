export type Point = [number, number, number]
export type Vector = [number, number, number]

export function distance (a: Point, b: Point) {
  return (((b[0] - a[0]) ** 2) + ((b[1] - a[1]) ** 2) + ((b[2] - a[2]) ** 2)) ** 0.5
}


export function vector (a: Point, b: Point): Vector {
  return [b[0] - a[0], b[1] - a[1], b[2] - a[2]]
}

export function add (...vs: Vector[]): Vector {
  return vs.reduce((v: Vector, acc: Vector) => [v[0] + acc[0], v[1] + acc[1], v[2] + acc[2]], [0,0,0])
}
