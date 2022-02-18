const Register = require("../LoginMethod")
const cases = [["Kalle", "Kalle123", "Kalle"], ["Madde", "abc123", "Madde"], [null,"abc123", null] ];


// Test for testing register method.
/*
describe('testing register method', () => {
  test.each(cases)(
    'Test if given username is stored in localstorage.',
    (username, password, expectedResult) => {
      Register(username, password)
      const actual = localStorage.getItem('username')
      expect(actual).toEqual(expectedResult)
    }
  )
})
*/


describe('test for register method', () => {
    test.each(cases)('Test if name tryin to register is stored', (username, password, expectedResult) => {
        Register(username, password)
        const actual = localStorage.getItem('username')
        expect(actual).toEqual(expectedResult)
    }
   )
})