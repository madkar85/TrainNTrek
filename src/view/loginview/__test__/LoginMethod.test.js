const Register = require("../LoginMethod")
const cases = [["Kalle", "Kalle123", "Kalle"]];

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
