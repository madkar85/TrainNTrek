import React, { useState, useContext } from 'react'
import { RunningDistanceContext } from '../../shared/provider/RunningDistanceProvider'
import { CyclingDistanceContext } from '../../shared/provider/CyclingDistanceProvider'
import { HikingDistanceContext } from '../../shared/provider/HikingDistanceProvider'
import { RunningPaceContext } from '../../shared/provider/RunningPaceProvider'
import { CyclingPaceContext } from '../../shared/provider/CyclingPaceProvider'
import { HikingPaceContext } from '../../shared/provider/HikingPaceProvider'
import { RunningTimeContext } from '../../shared/provider/RunningTimeProvider'
import { CyclingTimeContext } from '../../shared/provider/CyclingTimeProvider'
import { HikingTimeContext } from '../../shared/provider/HikingTimeProvider'
import { SportTypeContext } from '../../shared/provider/SportTypeProvider'
import './GoalForm.css'

// The form where user can fill in activity goals

function GoalForm() {
  const [distanceState, setDistanceState] = useState()
  const [paceState, setPaceState] = useState()
  const [timeState, setTimeState] = useState()
  const [runningDistance, setRunningDistance] = useContext(RunningDistanceContext)
  const [cyclingDistance, setCyclingDistance] = useContext(CyclingDistanceContext)
  const [hikingDistance, setHikingDistance] = useContext(HikingDistanceContext)
  const [runningPace, setRunningPace] = useContext(RunningPaceContext)
  const [cyclingPace, setCyclingPace] = useContext(CyclingPaceContext)
  const [hikingPace, setHikingPace] = useContext(HikingPaceContext)
  const [runningTime, setRunningTime] = useContext(RunningTimeContext)
  const [cyclingTime, setCyclingTime] = useContext(CyclingTimeContext)
  const [hikingTime, setHikingTime] = useContext(HikingTimeContext)
  const [sport, setSport] = useContext(SportTypeContext)

  const handleDistanceSubmit = (event) => {

    if (sport === "Running") {
      setRunningDistance(distanceState)
      setDistanceState('')
      event.preventDefault()
    }

    if (sport === "Cycling") {
      setCyclingDistance(distanceState)
      setDistanceState('')
      event.preventDefault()
    }

    if (sport === "Hiking") {
      setHikingDistance(distanceState)
      setDistanceState('')
      event.preventDefault()
    }

    else if (sport == null) {
      alert("Please choose activity type first")
      event.preventDefault()
    }
  }

  const handlePaceSubmit = (event) => {

    if (sport === "Running") {
      setRunningPace(paceState)
      setPaceState('')
      event.preventDefault()
    }
    if (sport === "Cycling") {
      setCyclingPace(paceState)
      setPaceState('')
      event.preventDefault()
    }
    if (sport === "Hiking") {
      setHikingPace(paceState)
      setPaceState('')
      event.preventDefault()
    }
    else if (sport == null) {
      alert("Please choose activity type first")
      event.preventDefault()
    }
  }

  const handleTimeSubmit = (event) => {
    if (sport === "Running") {
      setRunningTime(timeState)
      setTimeState('')
      event.preventDefault()
    }
    if (sport === "Cycling") {
      setCyclingTime(timeState)
      setTimeState('')
      event.preventDefault()
    }
    if (sport === "Hiking") {
      setHikingTime(timeState)
      setTimeState('')
      event.preventDefault()
    }
    else if (sport == null) {
      alert("Please choose activity type first")
      event.preventDefault()
    }
  }

  return (
    <div className='formWrapper'>
      <div className='distanceText'>
        <p>Distance Goal:</p>
      </div>
      <div className='distanceField'>
        <form onSubmit={handleDistanceSubmit}>
          <input
            type='text'
            value={distanceState}
            onChange={(e) => setDistanceState(e.target.value)}
          />
          <input className='submit-btn' type='submit' value='Submit' />
        </form>
      </div>
      <div className='paceText'>
        <p>Pace:</p>
      </div>
      <div className='paceField'>
        <form onSubmit={handlePaceSubmit}>
          <input
            type='text'
            value={paceState}
            onChange={(e) => setPaceState(e.target.value)}
          />
          <input className='submit-btn' type='submit' value='Submit' />
        </form>
      </div>
      <div className='timeText'>
        <p>Activity time:</p>
      </div>
      <div className='timeField'>
        <form onSubmit={handleTimeSubmit}>
          <input
            type='text'
            value={timeState}
            onChange={(e) => setTimeState(e.target.value)}
          />
          <input className='submit-btn' type='submit' value='Submit' />
        </form>
      </div>
    </div>
  )
}

export default GoalForm
