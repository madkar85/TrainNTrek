import React, { useState, useContext } from "react"
import { UserContext } from "../../shared/provider/UserProvider"
import { useHistory, useLocation } from "react-router-dom"
import "./SearchView.css"
import Footer from "../../components/footer/Footer"
import RoutingPath from "../../routes/RoutingPath"


const SearchView = () => {
  const [searchedUser, setSearchedUser] = useState()
  const history = useHistory()
  const [username, setUsername] = useState()
  const [user, setUser] = useState()
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  const location = useLocation()
  localStorage.setItem("Elias", "He is online, and taking a walk!")
  localStorage.setItem("Madde", "She is offline, but took a new biking path 1 hour ago!")
  localStorage.setItem("Linus", "He is online, took a long walk 5 minutes ago!")

  const search = () => {
    setSearchedUser(localStorage.getItem(user))
  }

  return (
    <div className="searchView">
        
      <section className="searchContainer">
      <h1>{searchedUser}</h1>
        <h2>Check a specific users activity. Type in the users name to check!</h2>
        <div className="inputArea">
          <div>
            <input
              placeholder="Username"
              onChange={(event) => setUser(event.target.value)}
            />
          </div>
          <br />
          <button className="search-btn" onClick={() => search()}>
            Search
          </button>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default SearchView