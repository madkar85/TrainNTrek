const { ConvertKmPerHourToMeterPerSecond } = require("./CalculateConversions");
const { ConvertMeterPerSecondToKmPerHour } = require("./CalculateConversions");
const { ConvertKmToMiles } = require("./CalculateConversions");
const { ConvertMilesToKm } = require("./CalculateConversions");
const { ConvertKiloToPound } = require("./CalculateConversions");
const { ConvertPoundToKilo } = require("./CalculateConversions");

describe("Converting from km/h to m/s", () => {
  test.each([
    [250, 69.4444445],
    [0, 0],
    [-7, 0],
  ])("km/h to m/s", (a, expected) => {
    expect(ConvertKmPerHourToMeterPerSecond(a)).toBeCloseTo(expected);
  });
});

describe("Converting from m/s to km/h", () => {
  test.each([
    [250, 900],
    [0, 0],
    [-7, 0],
  ])("m/s to km/h", (a, expected) => {
    expect(ConvertMeterPerSecondToKmPerHour(a)).toBe(expected);
  });
});

describe("Converting from km to mile", () => {
  test.each([
    [250, 155.342798],
    [0, 0],
    [-7, 0],
  ])("km to miles", (a, expected) => {
    expect(ConvertKmToMiles(a)).toBeCloseTo(expected);
  });
});

describe("Converting from mile to km", () => {
  test.each([
    [250, 402.336],
    [0, 0],
    [-7, 0],
  ])("miles to km", (a, expected) => {
    expect(ConvertMilesToKm(a)).toBe(expected);
  });
});

describe("Converting from kilo to pound", () => {
  test.each([
    [250, 551.155655],
    [0, 0],
    [-7, 0],
  ])("kilo to pound", (a, expected) => {
    expect(ConvertKiloToPound(a)).toBeCloseTo(expected);
  });
});

describe("Converting from pound to kilo", () => {
  test.each([
    [250, 113.3980925],
    [0, 0],
    [-7, 0],
  ])("pound to kilo", (a, expected) => {
    expect(ConvertPoundToKilo(a)).toBe(expected);
  });
});
