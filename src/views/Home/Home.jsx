import React from 'react'
import { Link } from "react-router-dom";
import Footer from '../../components/Footer/footer'
import Cards from '../../components/Cards/cards'

const Home = ({data}) => {
  console.log(data)

  return (
    <div>
      {data.map( (product) => 
      (<Cards key={data.id} data={product}/>
      ))}
    <Footer />
    </div>
  )
}

export default Home