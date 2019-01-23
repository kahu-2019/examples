var {randomPerson} = require('./lib')

function sayHelloTo() {
  var person = randomPerson()
  return "hello " + person
}

module.exports = {
  sayHelloTo
}
