const { PrintBMIInfo } = require("./PrintInfo");
const { PrintBMIStatus } = require("./PrintInfo");
const { CalculateBMI } = require("./CalculateBMI");

describe("Integration test for the BMICalculator", () => {
    test.each([
        [55, 165, 20.2,"Healthy weight","Keep up the good work! For tips on maintaining a healthy weight, check out the diet and fitness sections."],
        [90, 170, 31.1,"Obese","The best way to lose weight if you're obese is through a combination of diet and exercise, and in some cases, medicines."],
    ])('Testing all the methods together', (mockUserWeight,mockUserHeight,expectedBMIValue,expectedBMIStatus,expectedStatusInfo) => {
  
      let actualBMIValue = Number(CalculateBMI(mockUserWeight,mockUserHeight));
      let actualBMIStatus= PrintBMIStatus(actualBMIValue);
      let actualStatusInfo= PrintBMIInfo(actualBMIStatus);
      
      expect(actualBMIValue).toBeCloseTo(expectedBMIValue)
      expect(actualBMIStatus).toBe(expectedBMIStatus)
      expect(actualStatusInfo).toBe(expectedStatusInfo)
     
  });
  })