import React from 'react'
import "./Login.css"
import {
//     BrowserRouter as Router,
    // Switch,
    // Route,
    // Routes,
    Link
  } from "react-router-dom";

const Login = () => {
  return (
    <>
       <div className="login">
           <div className="loginwrapper">
               <div className="loginleft">
                   <h3 className="loginlogo">MYFB</h3>
                   <span className="logindesc">Connect the friends and world around you on MYFB</span>
               </div>
               <div className="loginright">
                   <div className="loginbox">
                       <input placeholder='Email' type="text" className="logininput" />
                       <input placeholder='Password' type="text" className="logininput" />
                      <Link className="loginbutton" to="/Home"> login</Link>
                     
                       <span className="forgotpass">Forgot password?</span>
                       <Link to="/Register" className="register">Create a new account</Link>
                   </div>
               </div>
           </div>
       </div>
    </>
  )
}

export default Login
