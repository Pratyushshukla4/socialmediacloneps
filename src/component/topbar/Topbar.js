import React from 'react'
import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom'
const Topbar = () => {
  return (


    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">MY FB</span>
      </div>



      <div className="topbarCenter">
    <div className="searchBar">
< SearchIcon className ="searchIcon"/>

<input placeholder='search,post or friend' type="text" className="searchInput" />
    </div>
      </div>




      <div className="topbarRight">
        <div className="navbarlinks">
         <Link className='tl' to="/Home"><span className="topbarlinks">Homepage</span></Link> 
          <Link className='tl' to="/Login"><span className="topbarlinks">Logout</span></Link>
        </div>
         <div className="topbaricons">
           <div className="topbariconitem">
             <PersonIcon/>
             <span className="topbariconbadge">1</span>
           </div>
           <div className="topbariconitem nnnn">
             <ChatIcon/>
             <span className="topbariconbadge">1</span>
           </div>
           <div className="topbariconitem">
             <NotificationsIcon/>
             <span className="topbariconbadge">1</span>
           </div>
         </div>
        <Link to="/Profile"> <img src="/assets/wn.jpg" alt="img" className="topbarimg" /></Link>
      </div>
    </div>
  )
}

export default Topbar
