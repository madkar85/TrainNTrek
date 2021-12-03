import React, { useState, createContext } from "react"

//Provider for time goal

export const GoalTimeContext = createContext()

export const GoalTimeProvider = (props) => {
    const [time, setTime] = useState()

    return (
        <GoalTimeContext.Provider value={[time, setTime]}>
            {props.children}
        </GoalTimeContext.Provider>
    )
}