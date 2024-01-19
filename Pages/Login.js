import React, { useState } from 'react'
import './CSS/LoginSingnup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Login () {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const navigate=useNavigate();

    const mail=(e)=>{
        setEmail(e.target.value)
    }

    const pass=(e)=>{
        setPassword(e.target.value)
    }

    const submit=()=>{
        axios.post("http://localhost:3000/logins",{email,password})
      .then((res)=>{
          console.log(res);
            if(res.data === "success"){
              navigate("/");
            }
          
      })
      .catch((err)=>{
          console.log(err)
      })
    }
  return (
    <div className='loginsingnup'>
      <div className='loginsignup-container'>
        <h1>Login</h1>
        <div className='loginsignup-fields'>
          <input type='email' placeholder='Email Address' onClick={mail}/>
          <input type='password' placeholder='Password' onClick={pass}/>
        </div>
        <button onClick={submit}>Login</button>
      </div>
    </div>
  )
}

export default Login