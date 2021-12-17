import React, { useState, createContext } from 'react'

// Provider for time goal

export const RunningTimeContext = createContext()

export const RunningTimeProvider = (props) => {
  const [runningTime, setRunningTime] = useState()

  return (
    <RunningTimeContext.Provider value={[runningTime, setRunningTime]}>
      {props.children}
    </RunningTimeContext.Provider>
  )
}
