class Greeter {
  greeting: string

  constructor (greeting: string) {
    this.greeting = greeting;
  }

  greet () {
    return "Hello, " + this.greeting;
  }
}

const greeter = new Greeter('world')
console.log(greeter.greet())
