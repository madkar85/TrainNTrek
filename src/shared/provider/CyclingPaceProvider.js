import React, { useState, createContext } from 'react'

// Provider for pace goal

export const CyclingPaceContext = createContext()

export const CyclingPaceProvider = (props) => {
  const [cyclingPace, setCyclingPace] = useState()

  return (
    <CyclingPaceContext.Provider value={[cyclingPace, setCyclingPace]}>
      {props.children}
    </CyclingPaceContext.Provider>
  )
}
