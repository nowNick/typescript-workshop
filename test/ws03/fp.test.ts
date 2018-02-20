
function sum(a: number, b: number, c: number) {
  return a + b + c
}

function sumargs(...args: number[]) {
  return args.reduce((a, b) => a + b)
}

function concat3(a: string, b: string, c: string) {
  return a + b + c
}

const concat4 = (a: string, b: string, c: string, d: string) => {
  return a + b + c + d
}

describe('nothing', () => {
  it('works', () => {
    expect(true).toEqual(true)
  })
})