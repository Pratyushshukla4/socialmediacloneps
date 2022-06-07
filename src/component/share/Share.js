import React from 'react'
import "./Share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MoodIcon from '@mui/icons-material/Mood';
import { Link } from 'react-router-dom'


const Share = () => {
  return (
    <>
    <div className="share">
        <div className="sharewraper">
       <div className="sharetop">

           <Link to="/Profile"><img src="/assets/wn.jpg" alt="img" className="shareprofileimg" /></Link>
           <input type="text" placeholder="what's in your mind" className='shareinput'/>

       </div>
       <hr className="sharehr" />


       
       <div className="sharebottom">
           <div className="shareoptions">
               <div className="shareoption">
                <PermMediaIcon htmlColor='tomato' className='shareicon'/>
                   <span className="shareoptiontext  nnn">Photo or vidio</span>
               </div>
               <div className="shareoption">
                <LocalOfferIcon htmlColor='blue' className='shareicon'/>
                   <span className="shareoptiontext nnn">Tag</span>
               </div>
               <div className="shareoption">
                <LocationOnIcon htmlColor='green' className='shareicon'/>
                   <span className="shareoptiontext nnn">location</span>
               </div>
               <div className="shareoption fff">
                < MoodIcon htmlColor='goldenrod' className='shareicon'/>
                   <span className="shareoptiontext nnn">Feelings</span>
               </div>
               <div className="shareoption">
               <button className="sharebotton ">Share</button>
               </div>
           </div>
         
       </div>
       </div>
       </div>
    </>
  )
}

export default Share
