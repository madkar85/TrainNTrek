import React from 'react'
import './RecentActivity.css'
import StravaApi from '../../shared/api/StravaApi'

// Shows the most recent activity showed when button on main page is pressed.

function RecentActivity (props) {
  function toggleStats () {
    return props.show ? 'recentActivity' : 'recentActivityHide'
  }

  if (props.show) {
    return (
      <div className={toggleStats()}>
        <div className='info'>
          <StravaApi textInfo />
        </div>
      </div>
    )
  } else {
    return (
      <div className={toggleStats()}>
        <div className='info' />
      </div>
    )
  }
}

export default RecentActivity
