import React, { useState, createContext } from 'react'

// Provider for pace goal

export const RunningPaceContext = createContext()

export const RunningPaceProvider = (props) => {
  const [runningPace, setRunningPace] = useState()

  return (
    <RunningPaceContext.Provider value={[runningPace, setRunningPace]}>
      {props.children}
    </RunningPaceContext.Provider>
  )
}
