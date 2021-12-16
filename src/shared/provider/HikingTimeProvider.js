import React, { useState, createContext } from 'react'

// Provider for time goal

export const HikingTimeContext = createContext()

export const HikingTimeProvider = (props) => {
  const [hikingTime, setHikingTime] = useState()

  return (
    <HikingTimeContext.Provider value={[hikingTime, setHikingTime]}>
      {props.children}
    </HikingTimeContext.Provider>
  )
}
