(function () {
  const Greeter = (function () {
    interface GreeterConstructor {
      new(greeting: string): Greeter
    }

    interface Greeter {
      greeting: string
      greet: () => string
    }

    const Greeter = function (this: Greeter, greeting: string) {
      this.greeting = greeting;
    }

    Greeter.prototype.greet = function () {
      return "Hello, " + this.greeting;
    }

    return Greeter as any as GreeterConstructor
  }())

  const greeter = new Greeter('world')
  console.log(greeter.greet())
}())
