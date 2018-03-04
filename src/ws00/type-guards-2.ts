/// Example from https://www.typescriptlang.org/docs/handbook/advanced-types.html

/// typeof won't be used for type guard
function isNumber (x: any): boolean {
  return typeof x === 'number';
}

/// the boolean carry information about argument type
function isString (x: any): x is string {
  return typeof x === 'string';
}

export function padLeft (value: string, padding: string | number) {
  // inline typeof works
  if (typeof padding === 'number') {
    return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}

console.log(padLeft('ola!', 10))
