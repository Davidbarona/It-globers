import React, { useState } from "react";
import {email,name,celular,} from "../Validations/regex.";
import { LightBox } from "./LightBox";
import '../Styles/Form.scss'

export const Form = () => {

  const [form,setForm] = useState({
      email:"",
      name:"",
      celular:"",
      edad:""
  })

  // Error
  const [errors, setErrors] = useState({
    email: false,
    name: false,
    mobile: false,
    age: false,
  });

  const [notify, setNotify] = useState(false)

 
  //Validate
  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value});
    setErrors({...errors,[e.target.name]: false});

    if(e.target.name==="name" ){
        !name.test(e.target.value) &&  setErrors({...errors,[e.target.name] :true});
    }
     if (e.target.name==="email"){
        !email.test(e.target.value) &&  setErrors({...errors,[e.target.name] :true});
    }
    
    if(e.target.name==="celular"){
        !celular.test(e.target.value) &&  setErrors({...errors,[e.target.name] :true});
    }
     if (e.target.name==="edad" && (e.target.value <= 17 || e.target.value > 100)) {
        setErrors({...errors,[e.target.name] :true}); 
    }
  };

  const cleanForm =  () =>{
    setForm( {
        email:"",
        name:"",
        celular:"",
        edad:""
    }) 
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!Object.values(errors).some(e=> e === true )) {
      console.log({
        name: form.name,
        email: form.email,
        celular: form.celular,
        edad: form.edad,
      });

      cleanForm()
      setNotify(true)

         setTimeout(() => {
        setNotify(false);
      },5000);
  

    } else {
      console.log("formulario mal dligenciado");
    }
  };

  return (
    <div className="container_form">
      <form onSubmit={handleSubmit}>
        <h1>Formulario</h1>
          <br />
          <input
            type="text"
            name="name"
            placeholder="Ingresa tu Nombre completo"
            required
            value={form.name}
            onChange={handleChange}
            className="inputForm"
          />
          <br />
          <span className="alert_error">
            {errors.name && (
              <p>
                Escriba su nombre completo sin espacios ni caracteres especiales{" "}
              </p>
            )}
          </span>
          <br />
          <input
            type="email"
            placeholder="Ingresa tu Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="inputForm"
          />
          <br />
          <span className="alert_error">{errors.email && <p>Escriba un Email valido</p>}</span>
          <br />
          <input
            type="number"
            name="celular"
            placeholder="Ingresa tu numero celular"
            required
            value={form.celular}
            onChange={handleChange}
            className="inputForm"
          />
          <br />
          <span className="alert_error">{errors.celular&& <p>su celular debe de tener 10 numeros</p>}</span>
          <br />
          <input
            type="number"
            name="edad"
            placeholder="Ingresa tu edad"
            required
            value={form.edad}
            onChange={handleChange}
            className="inputForm"
          />
          <br />
          <span className="alert_error">
            {errors.edad && (
              <p>su rango de edad debe de estar entre los 18 a 100 años</p>
            )}
          </span>

        <br />
        <button
        type="submit">Enviar</button>
         {
        notify &&  <LightBox 
        mensajes ={"los datos fueron pasados con éxito"}
        />
      }
      </form>
     
    
    </div>
  );
};
