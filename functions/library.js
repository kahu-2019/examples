var speak = function (name, salutation='hello') {
  console.log(salutation + ' ' + name)
}

var call = function(otherFunction) {
  otherFunction('robbie')
}

module.exports = {
  speak,
  call
}
