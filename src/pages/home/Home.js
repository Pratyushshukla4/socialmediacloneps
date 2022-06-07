import React from 'react'
import Feed from '../../component/feed/Feed'
import SideBar from '../../component/sideBar/SideBar'
import RightBar from '../../component/rightBar/RightBar'
import Topbar from '../../component/topbar/Topbar'
import "./Style.css"

const Home = () => {
  return (
    <>
      
      <Topbar/>
      <div className="homePge">
        
      <SideBar className={"sidedisplay"}/>
      <Feed/>
     <RightBar className={"sidedisplay"}/>
     </div>
    </>
  )
}

export default Home
