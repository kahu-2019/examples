var fs = require('fs')

function readFile() {
  let res = fs.readFileSync('large.file')
  //after function is finished
  console.log(res.length)
}

function readFileAsync() {
  let processFile = (err, res) => {
    if(err) return
    console.log(res.length)
  }

  fs.readFile('large.file', processFile)
}

//not all callbacks are async
console.log('test')
var arr = [1,2,3,4]
  arr.map(console.log)
console.log('next')

//readFileAsync()
//readFileAsync()
//readFileAsync()
//readFileAsync()

console.log('file done')

fs.readFile('./index.js', 'utf8', (err, data) => {
  //console.log(data)
  //fs.writeFile('./index.js', 'ho ho ho')
})

fs.writeFile('merry-christmas.txt', 'ho ho ho', (err, res) => {
  console.log(err)
  console.log(res)
})
