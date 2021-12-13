const DateTest = require('../DateTest.js');

// test("See if function calculate correctly", () => {
//     expect(DateTest("202108", "202005")).toBe(true);
// });

//Test file for DateTest method

const cases = [["202108", "202107", true], ["202104", "202105", false]];

describe("See if function calculate correctly", () => {
    test.each(cases)(
        "given date is larger than and 'oneMonthBackDate' return true, else return false",
        (date, oneMonthBackDate, expectedResult) => {
            const result = DateTest(date, oneMonthBackDate);
            expect(result).toEqual(expectedResult);
        }
    );
});
