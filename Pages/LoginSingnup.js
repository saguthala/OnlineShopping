import React, { useState } from 'react'
import './CSS/LoginSingnup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom"


const LoginSingnup = () => {
  const [name, setName]=useState('');
  const [email, setmail]=useState('');
  const [password, setpassword]=useState('');

  const navigate = useNavigate();
  

  const na=(e)=>{
    setName(e.target.value)
  }

  const mail=(e)=>{
    setmail(e.target.value)
  }

  const pass=(e)=>{
    setpassword(e.target.value)
  }

  const log=()=>{
    navigate('./logins')
  }

  const submit=(setPassword,setEmail,setName)=>{
    axios.post("http://localhost:3000/",{name,email,password})
    .then((res)=>{
        console.log(res);
        navigate("./logins")
        setPassword('')
        setEmail('')
        setName('')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='loginsingnup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type='text' placeholder='Your Name' onClick={na}/>
          <input type='email' placeholder='Email Address' onClick={mail}/>
          <input type='password' placeholder='Password' onClick={pass}/>
        </div>
        <button onClick={submit}>Continue</button>
        <p className='loginsignup-login'>Already have a account? <Link to={'/logins'}><span onClick={log}>Login here</span></Link></p>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id=''/>
          <p>By continuing, i agree to the team of use & privacy policy.</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSingnup