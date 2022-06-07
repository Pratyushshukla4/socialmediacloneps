import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"

const Register = () => {
  return (
    <>
        <div className="login">
           <div className="loginwrapper">
               <div className="loginleft">
                   <h3 className="loginlogo">MYFB</h3>
                   <span className="logindesc">Connect the friends and world around you on MYFB</span>
               </div>
               <div className="loginright">
                   <div className="loginbox2">
                       <input placeholder='Username' type="text" className="logininput" />
                       <input placeholder='Email' type="text" className="logininput" />
                       <input placeholder='Password' type="text" className="logininput" />
                       <input placeholder='Confirm Password' type="text" className="logininput" />
                       <Link to="/Home" className="loginbutton">Sign up</Link>
                       
                       <Link to="/Login" className="register">Login your account</Link>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default Register
