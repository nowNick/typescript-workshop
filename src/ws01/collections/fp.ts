export { default as map } from './fp/map'
export { default as filter } from './fp/filter'
export { default as flow } from './fp/flow'

// console.log(map((n: number) => n * n)([2]))
//
// console.log(flow(
//   map((a: number) => a.toString()),
//   map(a => parseInt(a, 10)),
//   map(a => a.toString()),
//   map(a => a.length)
// )([2, 3]))
//
// console.log(flow(
//   map((a: number) => a.toString()),
//   filter(s => s.length >= 2),
//   map(s => parseInt(s, 10))
// )([22, 3, 432]))
//
