import React, { useState, createContext } from 'react'

// Provider for distance goal

export const RunningDistanceContext = createContext()

export const RunningDistanceProvider = (props) => {
  const [runningDistance, setRunningDistance] = useState()

  return (
    <RunningDistanceContext.Provider value={[runningDistance, setRunningDistance]}>
      {props.children}
    </RunningDistanceContext.Provider>
  )
}
