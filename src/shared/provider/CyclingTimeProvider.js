import React, { useState, createContext } from 'react'

// Provider for time goal

export const CyclingTimeContext = createContext()

export const CyclingTimeProvider = (props) => {
  const [cyclingTime, setCyclingTime] = useState()

  return (
    <CyclingTimeContext.Provider value={[cyclingTime, setCyclingTime]}>
      {props.children}
    </CyclingTimeContext.Provider>
  )
}
