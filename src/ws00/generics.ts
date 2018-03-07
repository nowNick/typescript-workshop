function identity0 (v: any): any {
  return v
}

const num = identity0(2)






































function identity1 (v: number | string): number | string {
  return v
}


const numOrStr = identity1(2)





































function identity2<T>(v: T): T {
  return v
}

// identity2<number>('str')
identity2<string>('str')
const preservedType = identity2('str')

