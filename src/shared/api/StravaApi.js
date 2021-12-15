import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { StatsContext } from '../provider/StatsProvider'
import spinner from '../img/spinner3.gif'

// Strava API, both saving into global state and returning info when needed.

function StravaApi (props) {
  const [response, setResponse] = useState()
  const [userStats, setUserStats] = useContext(StatsContext)
  const [recentActicity, setRecentActicity] = useState([])

  // Replace these values with keys

  const clientId = process.env.REACT_APP_STRAVA_CLIENTID_KEY
  const clientSecret = process.env.REACT_APP_STRAVA_CLIENTSECRET_KEY
  const refreshToken = process.env.REACT_APP_STRAVA_REFRESHTOKEN_KEY

  useEffect(() => {
    async function fetchData () {
      try {
        console.log(clientId)
        const stravaRefreshResponse = await axios.all([
          axios.post(
            `https://www.strava.com/oauth/token?client_id=${clientId}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`

          )
        ])
        const stravaActivitiesResponse = await axios.get(
          `https://www.strava.com/api/v3/athlete/activities?access_token=${stravaRefreshResponse[0].data.access_token}`
        )

        setResponse(stravaActivitiesResponse.data)
        setUserStats(stravaActivitiesResponse.data)
        setRecentActicity(stravaActivitiesResponse.data[0])
        console.log(stravaActivitiesResponse.data)
      } catch (error) {
        alert('error when fetching data: ' + error)
      }
    }
    fetchData()
  }, [])

  function spinnerWhileLoadning () {
    if (response && props.textInfo) {
      return (
        <div>
          <h2>Type: {recentActicity.name}</h2>
          <h2>Distance: {Math.round(recentActicity.distance) / 1000} km</h2>
          <h2>
            Pace: {Math.round(recentActicity.average_speed * 100) / 100} m/s
          </h2>
          <h2>
            Avarage heartrate: {recentActicity.average_heartrate} beats/min
          </h2>
        </div>
      )
    } else if ((userStats || response) && !props.textInfo) return null
    else {
      return <img className='spinner' src={spinner} alt='Spinner' />
    }
  }

  return <div>{spinnerWhileLoadning()}</div>
}

export default StravaApi
