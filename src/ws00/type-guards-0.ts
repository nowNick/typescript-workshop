/// Example from https://www.typescriptlang.org/docs/handbook/advanced-types.html
(() => {
  interface Fish {
    sleep: Function
    swim: Function
  }

  interface Bird {
    sleep: Function
    fly: Function
  }

  const chordate: Fish | Bird = {a: () => {}} as any

  if (chordate.sleep) {
    chordate.sleep();
  }

  /// would work in JS, causes compilation error in TS
  // if (chordate.fly) {
  //   chordate.fly();
  // }

  if ((chordate as Bird).fly) {
    (chordate as Bird).fly();
  }

  function isA (o: any): o is Fish {
    return typeof (o as Fish) === 'function'
  }

  if (isA(chordate)) {
    chordate.swim()
  }

})()
