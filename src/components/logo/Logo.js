import React from 'react'
import './Logo.css'
import Logo from '../../shared/img/logo.JPG'
import { useHistory } from 'react-router-dom'

// Logo of site showed in the navbar

const Logotype = () => {
  const history = useHistory()

  const GoToMain = () => {
    history.push('/')
  }

  return (
    <div>
      <img className='logotype' src={Logo} alt='Logotype' onClick={() => GoToMain()} />
    </div>
  )
}

export default Logotype
