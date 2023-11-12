import React from 'react'
import "./Style.css"
export const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chit Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="email" placeholder='Email ID'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:'none'}}type="file" id='file'/>
                <button>Sign In</button>
            </form>
            <p>You Don't Have an Account? Register</p>
        </div>
    </div>
  )
}
