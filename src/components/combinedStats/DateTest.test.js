const DateTest = require('./DateTest.js')

const cases = [
  ['202108', '202107', true],
  ['202104', '202105', false]
]

describe('See if function calculate correctly', () => {
  test.each(cases)(
    "given date is larger than and 'oneMonthBackDate' return true, else return false",
    (date, oneMonthBackDate, expectedResult) => {
      const result = DateTest(date, oneMonthBackDate)
      expect(result).toEqual(expectedResult)
    }
  )
})
