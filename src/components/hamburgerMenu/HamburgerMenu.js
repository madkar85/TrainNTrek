import React, { useContext } from "react"
import "./HamburgerMenu.css"
import Hamburger from "../../shared/img/Hamburger.svg"
import { Link, useHistory } from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"
import { UserContext } from "../../shared/provider/UserProvider"

// Hamburger menu showed in the navbar

const HamburgerMenu = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("username")
    localStorage.removeItem("password")
    setAuthenticatedUser(false)
    history.push(RoutingPath.homeView, "You are now logged out!")
  }

  return (
    <div className="hamburgerWrapper">
      <img className="hamburgerMenu" src={Hamburger} alt="hamburgermenu" />
      <div className="dropDownAlts">
        <Link to={RoutingPath.homeView}>
          <li> Home </li>
        </Link>
        <br />
        <Link to={RoutingPath.statsView}>
          <li> Stats </li>
        </Link>
        <br />
        <Link to={RoutingPath.bmiView}>
          <li> BMI calculator </li>
        <Link to={RoutingPath.goalView}>
          <li> Goal </li>
        </Link>
        <br />
        <li onClick={() => logout()}>Logout</li>
      </div>
    </div>
  )
}

export default HamburgerMenu
