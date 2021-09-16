import React from 'react'
import { Menu } from '../Components/Menu'
import '../Styles/Home.scss'

export const Home = () => {
    return (
        <div className="containerHome">
        <Menu/>
       <div className="welcome">
       <h1 className="welcomeTittle">Hola y  bienvenido a tu reserva de vuelos favorita,
           por favor escoge en el menú tu preferida </h1>
       </div>
        </div>
    )
}
