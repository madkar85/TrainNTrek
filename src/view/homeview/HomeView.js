import React from "react"
import "./HomeView.css"
import GetStarted from "../../components/getStarted/GetStarted"
import Footer from "../../components/footer/Footer"
import StravaApi from "../../shared/api/StravaApi"


// Main and home view

const HomeView = () => {
  return (
    <>
      <StravaApi textInfo={false} />
      <div className="homeView">
        <section className="textField">
          <h3>
            Welcome to TrekNTrain <br />
            Click button bellow to get most recent activity <br />
            Or press menu in the top right corner to see more statistics
          </h3>
          <GetStarted />
        </section>
        <Footer />
      </div>
    </>
  )
}

export default HomeView
