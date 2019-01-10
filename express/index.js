var express = require('express')

var app = express()

app.use(express.static('./static'))
app.use(express.json())
app.use(express.urlencoded())

app.get('/hello/:name', (req, res) => {
  console.log(req.params)
  res.send(`<html><h1>hello ${req.params.name}</h1></html>`)
})

app.get('/query', (req, res) => {
  res.send(req.query)
})

app.get('/render', (req, res) => {
  res.sendFile(__dirname + '/render.html')
})

app.post('/processForm', (req, res) => {
  console.log(req.body)
  res.send('processing')
})

const port = 3000

app.listen(port, () => {
  console.log('listening on port http://localhost:' + port)
})

