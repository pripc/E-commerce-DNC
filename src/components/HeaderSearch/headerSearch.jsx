import React from 'react'
import dncLogo from '../../assets/logo-dnc.png'
import carLogo from '../../assets/car.png'
import searchLogo from '../../assets/search.png'
import './index.scss'

const headerSearch = () => {
  return (
    <header className="header-menu">
         
    
    <div className="search">

      <div>
      <img src={dncLogo} alt="logo" className="header-menu__logo" />

    </div>
      <div className="search__input-container">
        <img
          src={searchLogo}
          alt="search logo"
          className="search__search-logo"
        />
        <input type="text" placeholder="O que você está procurando?" />
      </div>

         <img className='search__car-logo' src={carLogo} alt="carLogo" />
    
    
    </div>
    
    <div className='links'> 
       <ul>
      
      <li><span>Novidades</span></li>
      <li>Jogos</li>
      <li>Video Games</li>
      <li>Mesas Gamer</li>
      <li>Promoções</li>
      <li>Atendimento</li>
    </ul> 

    </div>
    
    
  </header>
  )
}

export default headerSearch