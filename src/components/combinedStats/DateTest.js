
// Testing if one date is after of before another

function DateTest(activityDateYearAndMonth, oneMonthBackYearAndMonth) {
  if (activityDateYearAndMonth > oneMonthBackYearAndMonth) return true
  else return false
}
module.exports = DateTest
