import React, { useState, createContext } from 'react'

// Provider for distance goal

export const GoalDistanceContext = createContext()

export const GoalDistanceProvider = (props) => {
  const [distance, setDistance] = useState()

  return (
    <GoalDistanceContext.Provider value={[distance, setDistance]}>
      {props.children}
    </GoalDistanceContext.Provider>
  )
}
