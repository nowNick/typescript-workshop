(() => {
  class Chordate {
    name: string

    constructor (name: string) { this.name = name }

    sleep () { console.log(`${this.name} sleeps`) }
  }

  class Fish extends Chordate {
    swim () { console.log(`${this.name} swims`) }
  }

  class Bird extends Chordate {
    fly () { console.log(`${this.name} flies`) }
  }

  type Pet = Bird | Fish

  function buyRandomPet (name: string): Pet {
    return Math.random() < 0.5 ? new Bird(name) : new Fish(name)
  }

  const pet = buyRandomPet('casper')

  function isBird (pet: Pet): pet is Bird {
    return pet instanceof Bird
  }

  pet.sleep()
  if (isBird(pet)) {
    pet.fly()
  } else if (pet instanceof Fish) {
    pet.swim()
  }
})()
