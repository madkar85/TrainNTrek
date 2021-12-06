//TODO: There is a limit for how many numbers can be put into the input field, use a if case or something to fix this, also tell the user the value is too great

const ConvertKmPerHourToMeterPerSecond = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 0.277777778;
};

const ConvertMeterPerSecondToKmPerHour = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 3.6;
};

const ConvertKmToMiles = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 0.621371192;
};

const ConvertMilesToKm = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 1.609344;
};

const ConvertKiloToPound = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 2.20462262;
};

const ConvertPoundToKilo = (userInput) => {
  if(userInput < 0) return 0
  return userInput * 1 * 0.45359237;
};

module.exports = {
  ConvertKmPerHourToMeterPerSecond,
  ConvertMeterPerSecondToKmPerHour,
  ConvertKmToMiles,
  ConvertMilesToKm,
  ConvertKiloToPound,
  ConvertPoundToKilo,
};
