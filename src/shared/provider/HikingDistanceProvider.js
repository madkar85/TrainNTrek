import React, { useState, createContext } from 'react'

// Provider for distance goal

export const HikingDistanceContext = createContext()

export const HikingDistanceProvider = (props) => {
  const [hikingDistance, setHikingDistance] = useState()

  return (
    <HikingDistanceContext.Provider value={[hikingDistance, setHikingDistance]}>
      {props.children}
    </HikingDistanceContext.Provider>
  )
}
