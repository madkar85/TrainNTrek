import React, { useState, createContext } from 'react'

// Provider for sport type

export const SportTypeContext = createContext()

export const SportTypeProvider = (props) => {
    const [sport, setSport] = useState()

    return (
        <SportTypeContext.Provider value={[sport, setSport]}>
            {props.children}
        </SportTypeContext.Provider>
    )
}