import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import spinner from '../img/spinner3.gif'

// Strava API, returning info needed for weather function in navbar

function WeatherApi () {
  const [response, setResponse] = useState()
  const [weatherType, setWeatherType] = useState([])

  // Replace this value with key

  const weatherKey = process.env.REACT_APP_WEATHER_KEY

  useEffect(() => {
    async function fetchData () {
      try {
        const openWeatherResponse = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Gothenburg&appid=${weatherKey}`
        )
        setResponse(openWeatherResponse.data)
        setWeatherType({
          type: openWeatherResponse.data.weather[0].description,
          icon: openWeatherResponse.data.weather[0].icon
        })
        console.log(openWeatherResponse.data)
      } catch (error) {
        alert('error when fetching data: ' + error)
      }
    }
    fetchData()
  }, [])

  function spinnerWhileLoadning () {
    if (response) {
      return (
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
            alt='väder'
          />
          <h2>{weatherType.type}</h2>
        </div>
      )
    } else {
      return <img className='spinner' src={spinner} alt='Spinner' />
    }
  }

  return <div>{spinnerWhileLoadning()}</div>
}

export default WeatherApi
