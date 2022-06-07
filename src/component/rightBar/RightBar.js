import React from 'react'
import Onlinefrd from '../Onlinefrd'
import "./RightBar.css"
import {Users} from "../Damydata"

const rightBar = () => {
  return (
    <div className='rightbar'>
          <div className="rightbarwrapper">


            <div className="birthdaycontainer">
              <img src="/assets/surprise.png" alt="" className="birthdayimg" />
              <span className="birthdaytext"> <b>Pola</b>  and <b> 3 other friends</b>  have birthday today</span>
            </div>


            <img src="/assets/add.jpg" alt="" className="add" />


            <h4 className="onlinefrds">Online Friends</h4>

            <ul className="rightbarfrdlist">

           {
          Users.map((ele)=>{
            return(
            <Onlinefrd photo={ele.profilePicture} name={ele.username} />

           ) })
               
           }


             
            </ul>
          </div>
    </div>
  )
}

export default rightBar
