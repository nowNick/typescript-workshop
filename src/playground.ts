import { map, flow, filter, reduce } from '@ws01/collections/fp'
import { flow2 } from '@ws01/collections/fp/flow'

console.log(map((n: number) => n * n)([2]))

console.log(flow2(
  map((a: number) => a.toString()),
  map(a => parseInt(a, 10)),
  map(a => a.toString()),
  map(a => a.length)
)([2, 3]))

console.log(flow2(
  map((a: number) => a.toString()),
  filter(s => s.length >= 2),
  map(s => parseInt(s, 10))
)([22, 3, 432]))

const pow = (n: number) => n * n
const sum = (a: number, b: number, idx: number) => a + b
const join = (a: number[], b: number[], idx: number) => ([] as number[]).concat(a).concat(b)

const collection: number[][] = [[1, 2], [1, 2], [2, 5], [3, 3]]

console.log(flow2(
  map(map(pow)),
  reduce(join, []),
  map((t: number) => t % 2 === 0),
  map(t => 2)
)(collection))
