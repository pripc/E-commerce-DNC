import React from 'react'
import {  Link  } from 'react-router-dom'
import './index.scss'

const cards = ({data}) => {
    return (
        <div className='cards'>
            <img className='cards__img' src={data.img} alt={data.descrição}/>
            <h3 className='cards__title'>{data.nome}</h3>
            <button className='cards__button'> <Link to={'../product'}>Ver mais</Link></button>
        </div>
    )
}

export default cards