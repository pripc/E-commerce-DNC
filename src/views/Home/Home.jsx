import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderSearch from "../../components/HeaderSearch/headerSearch";
import Footer from '../../components/Footer/footer'
import Cards from '../../components/Cards/cards'

const Home = ({data}) => {
   console.log(data)

  return (
    <div className='home'>
      <HeaderSearch/>
      <section >
        <img className='home_img' src='../src/assets/cover.png' alt='Website Cover'/>
      </section>
      <section className='home_cards'>
      {data.map( (product) => 
      (<Cards key={data.id} data={product}/>
      ))}
      </section>

    <Footer />
    </div>
  )
}

export default Home