var {sayHelloTo} = require('./index')

jest.mock('./lib', () => {
  return {
    randomPerson: () => {
      return 'alice'
    }
  }
})

test('sayHelloTo', () => {
  expect(sayHelloTo()).toEqual('hello alice')
})
