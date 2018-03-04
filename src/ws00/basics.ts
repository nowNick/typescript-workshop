/// Type can be inferred
const e = 2.17

/// or specified explicitly
const pi: number = 3.14

const q = pi + e
const str = q.toString()

/// JS is weakly typed, so is TS ;-(
const inferredBecauseOfWeakTyping = str + pi

/// Union type allow to assign totally unrelated types
let union: number | string = 2
union = 'asd'
// union = null

/// TS figures out the type of an array
const arrayOfNumbers = [2, 3, 4]
const arrayOfNumbers1: number[] = arrayOfNumbers

/// It is able to figure out the type when multiple types are used
const arrayOfUnion = [2, 'str', {}]
const arrayOfUnion1: (number | string | {})[] = arrayOfUnion

/// If the number of elements in an array is known upfront
// then a tuple instead of an array can be used.
const tuple: [number, string, object] = [2, 'str', {}]
// tuple[1] = 3

/// null is a type
const nullValue: null = null
/// so is undefined
const undefinedValue: undefined = undefined

/// Strict modes nullifies (ba dum tss)
/// the possibility of getting unexpected null value!
const foo = (notNull: number) => notNull
// foo(nullValue) // won't fly
// foo(undefinedValue) // won't fly

// nullable values needs to be specified explicitly
let numberCanBeNull: number | null | undefined = 2
numberCanBeNull = nullValue
numberCanBeNull = undefinedValue
const bar = (canBeNull: number | null) => canBeNull
const bar1: (canBeNull: (number | null)) => (number | null) = bar

type Optional = (optional?: number) => any
const optionalParameter: Optional = (optional?: number) => null
const unionUndefinedParameter: Optional = (optional: number | undefined) => null

/// Excess Property Checks
interface Options {
  color?: string
  size?: number
}
const config  = (options: Options) => {}
// config({colour: 'blue', size: 2})

/// TS infers the return type of a function
const getRandomNumber = () => 4
const randomNumber = getRandomNumber()
const randomNumber1: number = randomNumber

/// TS infers the lack of return type as well
const forgotReturn = () => { 4 }
const forgotReturn1: () => void = forgotReturn

try {

/// What about functions which never return value?
  function alwaysFails (): never {
    throw new Error()
  }

  const assignmentWillNeverHappen1: number = alwaysFails()
} catch (e) {

}

function infiniteLoop (): never {
  while (true) {}
}

const assignmentWillNeverHappen2: number = infiniteLoop()
