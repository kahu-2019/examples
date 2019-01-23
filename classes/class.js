class Dog {
  constructor(color='white', age=4) {
    this.color = color
    this.age = age
  }
  speak() {
    console.log(this)
  }
}

var dog = new Dog('purple')
dog.speak()

class Puppy extends Dog {
  constructor(params) {
    let {color, age, height} = params
    super(color, age)
    this.height = height
  }
  speak() {
    console.log("meow, I'm confused")
  }
}

var pup = new Puppy({
  age: 2,
  color: 'brown',
  height: 234,
})
console.log(pup)
pup.speak()
