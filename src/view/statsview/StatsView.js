import React, { useContext } from "react"
import "./StatsView.css"
import CombinedStats from "../../components/combinedStats/CombinedStats"
import Footer from "../../components/footer/Footer"
import ActivityCard from "../../components/activityCard/ActivityCard"
import { StatsContext } from "../../shared/provider/StatsProvider"
import { useHistory } from "react-router-dom"
import RoutingPath from "../../routes/RoutingPath"
import ListOfUsers from "../../components/listOfUsers/ListOfUsers"
import UnitConverter from "../../components/unitConverter/UnitConverter"

// Statistics View

const StatsView = () => {
  const [userStats, setUserStats] = useContext(StatsContext)
  const history = useHistory()

  const DisplayPage = () => {
    if (!userStats.length) {
      return history.push(RoutingPath.homeView)
    } else
      return (
        <>
          <div className="cardGrid">
            <ActivityCard />
          </div>
          <section className="statSection">
          <div className="users">
          <ListOfUsers />
          </div>
          <div className="stats">
          <CombinedStats />
          </div>
          </section>
          <UnitConverter />
          <Footer />
        </>
      )
  }

  return <section className="statsView">{DisplayPage()}</section>
}

export default StatsView
