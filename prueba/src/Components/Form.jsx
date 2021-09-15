import React,{useState}from 'react'
import { validEmail,validName,validMobile,validAge } from '../Validations/regex.';
 
export const Form = () => {


// Data user 
const [email,setEmail] = useState('')
const [name,setName] =useState('')
const [celular,setCelular] = useState('')
const [edad,setEdad]=useState(0)
 
// Validation 
const [emailErr, setEmailErr] = useState(false);
const [nameErr,setNameErr] =useState(false)
// const [mobileErr,setMobileErr] =useState(false)
const [ageErr,setAgeErr] =useState(false)

const validate = () => {
    if (!validEmail.test(email)) {
       setEmailErr(true);
    }

    if (!validName.test(name)) {
        setNameErr(true);
     }

    //  if (!validMobile.test(name)) {
    //     setMobileErr(true);
    //  }

     if (!validAge.test(name)) {
        setAgeErr(true);
     }
    
    }
    

    return (
        <div>
            <form>
                <label>Nombre Completo:
                    <br/>
                <input type="text" 
                       name="Name" 
                       required
                       onChange={(e) => setName(e.target.value)} />
                    <br/>
                    <span>{nameErr && <p>Your Name is invalid</p>}</span>
                </label>
                <label>Email:
                    <br/>
                   
                <input type="email"
                       placeholder ="email"
                       name="email" 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required />
                    <br/>
                <span>{emailErr && <p>Your email is invalid</p>}</span>
                </label>
                <label>Celular: 
                    <br/>
                <input type="number"  
                       name="celular" 
                       required />
                    <br/>
                   
                </label>
                <label>Edad:
                    <br/> 
                <input type="number"
                       name="edad" 
                       required
                       onChange={(e) => setEdad(e.target.value)} />
                    <br/>
                    <span>{ageErr && <p>Your Age  is invalid</p>}</span>
                </label>
                <br/>
                <button onClick={validate}>Enviar</button>
                
            </form>
        </div>
    )
}
