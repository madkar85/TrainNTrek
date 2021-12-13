import React, { useState, createContext } from 'react'

// Provider for userinfo

export const UserContext = createContext()

export const UserProvider = (props) => {
  const [authenticatedUser, setAuthenticatedUser] = useState()

  return (
    <UserContext.Provider value={[authenticatedUser, setAuthenticatedUser]}>
      {props.children}
    </UserContext.Provider>
  )
}
