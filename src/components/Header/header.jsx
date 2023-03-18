import React from 'react'
import dncLogo from '../../assets/logo-dnc.png'
import './index.scss'

const header = () => {
  return (
    <div className="header">
      <img className="header__img" src={dncLogo} alt="dnc logo" />
    </div>
  )
}

export default header