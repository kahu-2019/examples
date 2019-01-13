var fs = require('fs')

function readMovieSync() {
  var buf = fs.readFileSync('./file.mov')
  console.log(buf.length)
}

function readMovieAsync() {
  fs.readFile('./file.mov', (err, buf) => {
    console.log(buf.length)
  })
}

//sync
//var res = syncFunc(args)
//after function
//
//
//async
//asyncFunc(args, callback)
//function callback(res) {
//  after function
//}


readMovieAsync()
readMovieAsync()
readMovieAsync()
readMovieAsync()

fs.readFile('./index.js', 'utf8', (err, data) => {
  console.log(data)
})

