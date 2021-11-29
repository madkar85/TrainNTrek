import React, { useContext, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import HomeView from "../view/homeview/HomeView"
import LoginView from "../view/loginview/LoginView"
import StatsView from "../view/statsview/StatsView"
import GoalView from "../view/goalview/GoalView"
import RoutingPath from "./RoutingPath"
import { UserContext } from "../shared/provider/UserProvider"

// Routes and authorisation mechanism

const Routes = () => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

  const blockRouteIfAuth = (viewNavigation) => {
    return authenticatedUser ? HomeView : viewNavigation
  }

  const blockRouteIfNotAuth = (viewNavigation) => {
    return !authenticatedUser ? LoginView : viewNavigation
  }

  const checkAuthenticatedUserInBrowser = () => {
    setAuthenticatedUser(localStorage.getItem("username"))
  }

  useEffect(() => {
    checkAuthenticatedUserInBrowser()
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            exact
            path={RoutingPath.loginView}
            component={blockRouteIfAuth(LoginView)}
          />
          <Route
            exact
            path={RoutingPath.statsView}
            component={blockRouteIfNotAuth(StatsView)}
          />
          <Route
            path={RoutingPath.homeView}
            component={blockRouteIfNotAuth(HomeView)}
          />
          <Route
            path={RoutingPath.goalView}
            component={blockRouteIfNotAuth(GoalView)}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default Routes
