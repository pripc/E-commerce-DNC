import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss";
import HeaderSearch from "../../components/HeaderSearch/headerSearch";
import Footer from '../../components/Footer/footer'
import Cards from '../../components/Cards/cards'

const Home = ({data}) => {
  console.log(data)

  return (
    <div>
      <HeaderSearch/>
    
      {data.map( (product) => 
      (<Cards key={data.id} data={product}/>
      ))}
    <Footer />
    </div>
  )
}

export default Home