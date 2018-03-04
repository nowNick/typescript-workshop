export type Point = [number, number, number]
export type Vector = [number, number, number]

export function distance (a: Point, b: Point) {
  const [xa, ya, za] = a
  const [xb, yb, zb] = b
  return Math.sqrt((xa - xb) ** 2 + (ya - yb) ** 2 + (za - zb) ** 2)
}


export function vector (a: Point, b: Point): Vector {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
}

export function add (...vs: Vector[]): Vector {
  return vs.reduce(([x0, y0, z0], v) => {
    const [x1, y1, z1] = v

    return [x0 + x1, y0 + y1, z0 + z1]
  }, [0, 0, 0])
}
