import { React, useContext } from 'react'
import { SportTypeContext } from '../../shared/provider/SportTypeProvider'
import './GoalMenu.css'

// Menu for choosing activity

const GoalResult = () => {
  const [sport, setSport] = useContext(SportTypeContext)

  function SetNewSport(sportType) {
    setSport(sportType)
  }

  function ActivityType() {
    if (sport === 'Running') return 'Running'
    else if (sport === 'Cycling') return 'Cycling'
    else if (sport === 'Hiking') return 'Hiking'
    else return 'Activities'
  }

  return (

    <div className='dropdownMenu'>
      <p>{(ActivityType())}</p>
      <div className='dropdown-content'>
        <ul className='list'>
          <li><button className='listbtn' onClick={() => SetNewSport('Running')}> Running </button></li>
          <li><button className='listbtn' onClick={() => SetNewSport('Cycling')}> Cyckling </button></li>
          <li><button className='listbtn' onClick={() => SetNewSport('Hiking')}> Hiking </button></li>
        </ul>
      </div>
    </div>
  )
}

export default GoalResult
