import React from 'react'
import { Form } from '../Components/Form'
import { Menu } from '../Components/Menu'
import { useParams } from "react-router-dom";




export const Booking = () => {

    const { params } = useParams();

    return (
        <>
         <Menu/>
         <h1>Hola, gracias por elergir {params} por favor diligencia el siguiente formulario</h1>
         <Form/>  

        </>
    )
}
