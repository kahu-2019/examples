function Dog(color='white') {
  this.color = color
  return this
}

Dog.prototype = {
  bark: function() {
    console.log('woof woof I am', this.color)
  }
}

var dog = new Dog()
var betterDog = new Dog('purple')

dog.color = 'red'

console.log(dog)
console.log(betterDog)

dog.bark()
