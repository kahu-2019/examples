var person = {
  name: 'joshua',
  age: 39,
  address: {
    number: 275,
    street: 'Cuba st',
    city: 'Wellington',
    postcode: '6011'
  },
  pets: ['kayla', 'angel'],
  family: [{
    name: 'david',
    relationship: 'father'
  }],
  printAddress: function() {
    var {number, street} = this.address
    console.log(number, street)
    console.log('printing the address')
    console.log(`${number} - ${street}`)
  }
}

//console.log(person.name, person.age)

//console.log(person.address.number + ' ' + person.address.street)

//console.log(person.address)
//console.log(person.pets[0])
//console.log(person.family[0].name)

person.printAddress()
