import React, { useState, createContext } from "react"

//Provider for statistics

export const StatsContext = createContext()

export const StatsProvider = (props) => {
  const [userStats, setUserStats] = useState([])

  return (
    <StatsContext.Provider value={[userStats, setUserStats]}>
      {props.children}
    </StatsContext.Provider>
  )
}
