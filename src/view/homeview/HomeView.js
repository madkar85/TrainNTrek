import React from 'react'
import './HomeView.css'
import GetStarted from '../../components/getStarted/GetStarted'
import Footer from '../../components/footer/Footer'
import StravaApi from '../../shared/api/StravaApi'
import ListOfUsers from '../../components/listOfUsers/ListOfUsers'
import SearchView from '../searchview/SearchView'

// Main and home view

const HomeView = () => {
  return (
    <>
      <StravaApi textInfo={false} />
      <h2 id='h2Home'>Welcome to TrekNTrain</h2>
      <div className='homeView'>
        <section className='textField'>
          <h3>
            Click button below to get most recent activity.
          </h3>
          <GetStarted />
        </section>
        <div className='users'>
          <SearchView />
          <ListOfUsers />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default HomeView
