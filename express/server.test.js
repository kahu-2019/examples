var supertest = require('supertest')
var cheerio = require('cheerio')

var server = require('./server')

test('GET /hello/:name', (done) => {
  supertest(server)
    .get('/hello/kahu')
    .end((err, res) => {
      var $ = cheerio.load(res.text)
      var actual = $('h1').text()
      expect(actual).toBe('hello kahu')
      done()
    })
})
