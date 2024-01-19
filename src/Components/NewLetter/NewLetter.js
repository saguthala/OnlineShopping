import React from 'react'
import './NewLetter.css'
const NewLetter = () => {
  return (
    <div className='newletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay update</p>
        <div className=''>
            <input type='email' placeholder='Your Email id'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter