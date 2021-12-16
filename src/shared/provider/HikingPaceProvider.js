import React, { useState, createContext } from 'react'

// Provider for pace goal

export const HikingPaceContext = createContext()

export const HikingPaceProvider = (props) => {
  const [hikingPace, setHikingPace] = useState()

  return (
    <HikingPaceContext.Provider value={[hikingPace, setHikingPace]}>
      {props.children}
    </HikingPaceContext.Provider>
  )
}
