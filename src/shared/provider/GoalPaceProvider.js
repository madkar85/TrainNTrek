import React, { useState, createContext } from "react"

//Provider for pace goal

export const GoalPaceContext = createContext()

export const GoalPaceProvider = (props) => {
    const [pace, setPace] = useState()

    return (
        <GoalPaceContext.Provider value={[pace, setPace]}>
            {props.children}
        </GoalPaceContext.Provider>
    )
}