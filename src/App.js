import React from 'react'
import Login from './pages/login/Login'
import Register from './pages/login/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <Profile/> */}
      {/* <Login/> */}
      {/* <Register/> */}
       <Router>
        <Routes>
          <Route exact path="/" element={<Login />}>
            
          </Route>
          <Route exact path="/Home"element={<Home />}>
           
          </Route>
          <Route exact path="/Register"element={<Register />}>
           
          </Route>
          <Route exact path="/Login"element={<Login />}>
           
          </Route>
          <Route exact path="/Profile"element={<Profile />}>
           
          </Route>
         
          </Routes>
        
        </Router>

    </>
  )
}

export default App
