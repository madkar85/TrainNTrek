import React, { useState, createContext } from 'react'

// Provider for distance goal

export const CyclingDistanceContext = createContext()

export const CyclingDistanceProvider = (props) => {
  const [cyclingDistance, setCyclingDistance] = useState()

  return (
    <CyclingDistanceContext.Provider value={[cyclingDistance, setCyclingDistance]}>
      {props.children}
    </CyclingDistanceContext.Provider>
  )
}
