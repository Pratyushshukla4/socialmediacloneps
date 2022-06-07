import React from 'react'
import Feed from '../../component/feed/Feed'
import SideBar from '../../component/sideBar/SideBar'
// import RightBar from '../../component/rightBar/RightBar'
import Topbar from '../../component/topbar/Topbar'
import "./Profile.css"
import Profilerightbar from './Profilerightbar'

const Profile = () => {
  return (
      <>  
    <Topbar/>
    <div className="profile">
    <SideBar/>
    <div className="profileright">
      <div className="profilerighttop">
        <div className="profilecover">
        <img src="assets/wn.jpg" alt="" className="profilecoverimg" />
        <img src="assets/se2.jpg" alt="" className="profoleuserimg" />
      </div>
      <div className="profileinfo">
        <h4 className="profileinfoname">Nitin Shukla</h4>
        <span className="profilreinfodesc">Hello my friends</span>
      </div>
      </div>
      <div className="profilerightbottom">
    <Feed/>
   {/* <RightBar/> */}
   <Profilerightbar/>


   </div>
   </div>
   </div>
   </>  
  )
}

export default Profile;
