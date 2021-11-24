import React, { useContext } from "react"
import "./Navbar.css"
import Weather from "../weather/Weather"
import { UserContext } from "../../shared/provider/UserProvider"
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu"
import Logo from "../logo/Logo"

// Navbar showed in all views

function Navbar() {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  const displayUserIfAuth = () => {
    return authenticatedUser ? (
      <div className="hamburgerPlacement">
        <HamburgerMenu />
      </div>
    ) : (
      <></>
    )
  }

  return (
    <nav className="navbar">
      <div className="weatherPlacement">
        <Weather />
      </div>
      <div className="logoPlacement">
        <Logo />
      </div>
      {displayUserIfAuth()}
    </nav>
  )
}

export default Navbar
