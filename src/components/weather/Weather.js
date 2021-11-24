import React from "react"
import "./Weather.css"
import WeatherApi from "../../shared/api/WeatherApi"

// Weather collected from API showed in the navbar

function Weather() {
  return (
    <div className="weatherContainer">
      <WeatherApi />
    </div>
  )
}

export default Weather
