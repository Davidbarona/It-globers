import React, { useState } from "react";
import {
  email,
  name,
  celular,
  edad
} from "../Validations/regex.";

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
     if (e.target.name==="edad") {
        !edad.test(e.target.value) &&  setErrors({...errors,[e.target.name] :true});
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
    } else {
      console.log("formulario mal dligenciado");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre Completo:
          <br />
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
          />
          <br />
          <span>
            {errors.name && (
              <p>
                Escriba su nombre completo sin espacios ni caracteres especiales{" "}
              </p>
            )}
          </span>
        </label>
        <label>
          Email:
          <br />
          <input
            type="email"
            placeholder="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <br />
          <span>{errors.email && <p>Escriba un Email valido</p>}</span>
        </label>
        <label>
          Celular:
          <br />
          <input
            type="number"
            name="celular"
            placeholder="celular"
            required
            value={form.celular}
            onChange={handleChange}
          />
          <br />
          <span>{errors.celular&& <p>su celular debe de tener 10 numeros</p>}</span>
        </label>
        <label>
          Edad:
          <br />
          <input
            type="number"
            name="edad"
            placeholder="edad"
            required
            value={form.edad}
            onChange={handleChange}
          />
          <br />
          <span>
            {errors.edad && (
              <p>su rango de edad debe de estar entre los 18 a 100 años</p>
            )}
          </span>
        </label>
        <br />
        <button>Enviar</button>
      </form>
    </div>
  );
};
