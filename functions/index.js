require('colors')

var libs = require('./library')

var speak = libs.speak
var call = libs.call

call(speak)
call(console.log)

call(function(str) { console.log(str.red) })
call(str => console.log(str.green))


var arr = ['a', 'b', 'c']
//arr.forEach(console.log)
arr.map((item) => console.log(item.magenta))


//var greet = speak
//speak('rohan')
//greet('sarah')
