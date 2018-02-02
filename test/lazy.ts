import { isFunction } from 'lodash'

const lazyValues: { [index: string]: any } = {}
const cachedValues: { [index: string]: any } = {}

export function subject (fn?: () => any) {
  if (fn) {
    return def('subject', fn)
  } else {
    return get('subject')
  }
}

export function def (name: string, value: any) {
  const fn = isFunction(value) ? value : () => value

  let previousLazyValue: any
  let previousCachedValue: any

  beforeEach(() => {
    previousLazyValue = lazyValues[name]
    previousCachedValue = cachedValues[name]
    lazyValues[name] = fn
  })

  afterEach(() => {
    lazyValues[name] = previousLazyValue
    cachedValues[name] = previousCachedValue
  })
}

export function get (name) {
  const lazyValue = lazyValues[name]

  if (!lazyValue) {
    throw new Error(`Missing def for '${name}'`)
  }
  if (!cachedValues[name]) {
    cachedValues[name] = lazyValue()
  }

  return cachedValues[name]
}

export default function () {
  global.def = def
  global.get = get
  global.subject = subject
}
