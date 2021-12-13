import React, { useContext } from "react"
import { StatsContext } from "../../shared/provider/StatsProvider"
import "./CombinedStats.css"
import DateTest from "./DateTest"

// Combined stats from past month showed on the statistics page

const CombinedStats = () => {
  const [userStats, setUserStats] = useContext(StatsContext)
  let runDistance = 0
  let rideDistance = 0
  let activeTime = 0
  let currentTime = new Date()
  let oneMonthBack = new Date()

  // Logging against the past 4 months due to inactivity
  oneMonthBack.setMonth(currentTime.getMonth() - 4)
  let oneMonthBackJson = oneMonthBack.toJSON()
  let oneMonthBackYearAndMonth =
    oneMonthBackJson.substring(0, 4) +
    oneMonthBackJson.substring(5, 7) +
    oneMonthBackJson.substring(8, 10)
  let activityDate
  let activityDateYearAndMonth

  userStats.forEach(function (activity) {
    activityDate = activity.start_date
    activityDateYearAndMonth =
      activityDate.substring(0, 4) +
      activityDate.substring(5, 7) +
      activityDate.substring(8, 10)
    activityDate.toString()

    if (
      activity.type === "Run" &&
      DateTest(activityDateYearAndMonth, oneMonthBackYearAndMonth)
    ) {
      runDistance = runDistance + activity.distance
    }
    if (
      activity.type === "Ride" &&
      DateTest(activityDateYearAndMonth, oneMonthBackYearAndMonth)
    ) {
      rideDistance = rideDistance + activity.distance
    }
    if (DateTest(activityDateYearAndMonth, oneMonthBackYearAndMonth)) {
      activeTime = activeTime + activity.moving_time
    }
  })

  DateTest(activityDateYearAndMonth, oneMonthBackYearAndMonth);

  return (
    <div className="statsContainer">
      <h1>This is your statistics for one month back</h1>
      <h2> Distance ran this month: {Math.round(runDistance / 1000)} km</h2>
      <h2>
        Distance bicycled this month: {Math.round(rideDistance / 1000)} km
      </h2>
      <h2>
        Active logged hours this month: {Math.round(activeTime / 3600)} h
      </h2>
    </div>
  )
}

export default CombinedStats
