import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory, useLocation } from "react-router-dom"
import "./SearchView.css"
import Footer from "../../components/footer/Footer"
import RoutingPath from "../../routes/RoutingPath"
import search from "./SearchFunction"

// The start of the SearchView where all the needed components are initiated. Aswell as the dummydata for the different users.
const SearchView = () => {
  const [searchedUser, setSearchedUser] = useState()
  const history = useHistory()
  const [username, setUsername] = useState()
  const [user, setUser] = useState()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const location = useLocation()
  localStorage.setItem("Elias", "He is online, and taking a walk!")
  localStorage.setItem("Markoolio", "Hen is offline, tried a new biking path 1 hour ago!")
  localStorage.setItem("Linus", "He is online, took a long walk 5 minutes ago!")

  // This is what the page returns in the form of the view, how it's shown on the page.
  return (
    <>
    <div className="searchView">
      <section className="searchContainer">
      <h1>{searchedUser}</h1>
        <h2>Check a specific users activity!</h2>
        <div className="inputArea">
          <div>
            <input
              placeholder="Type in username"
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
          <button className="search-btn" onClick={() => setSearchedUser(search(user))}>
            Search
          </button>
        </div>
      </section>
    </div>
    </>
  )
}

export default SearchView