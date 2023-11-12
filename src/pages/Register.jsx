import React from 'react'
import "./Home.css"
import Add from "../img/add-photo.png"
export const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Chit Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="text" placeholder='Display Name'/>
                <input type="email" placeholder='Email ID'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:'none'}}type="file" id='file'/>
                <label htmlFor="file">
                    <img src={Add} alt="" />
                    <span>Add Avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Do You Have an Account? Sign In</p>
        </div>
    </div>
  )
}
