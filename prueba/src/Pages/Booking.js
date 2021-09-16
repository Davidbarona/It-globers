import React from 'react'
import { Form } from '../Components/Form'
import { Menu } from '../Components/Menu'
import { useParams } from "react-router-dom";
import '../Styles/Booking.scss'




export const Booking = () => {

    const { params } = useParams();

    return (
        <>
         <Menu/>
         <div className="containerMessage">
         <h1 class="bookingMessage">Hola, gracias por elergir {params} como su areolinea favorita ,por favor diligencia el siguiente formulario</h1>
         </div>
         <Form/>  

        </>
    )
}
