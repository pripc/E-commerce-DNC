import React from 'react'
import { Link } from "react-router-dom";
import "./index.scss";
import Header from "../../components/Header/header";

const Home = () => {
  return (
    <div>Home
    <button> <Link to={'../product'}>Ver mais</Link></button>
    </div>
  )
}

export default Home