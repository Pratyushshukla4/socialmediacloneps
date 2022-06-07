import React from 'react'
import "./SideBar.css"
import "./se.png"
import RssFeedIcon from '@mui/icons-material/RssFeed';
import {Users} from "../Damydata"
import Closefrd from '../Closefrd';

const SideBar = () => {
  return (
    <div className='sidebar'>
       <div className="sidebarwrrapper">
           <ul className="sidebarlist">
               <li className="sidebarlistitem">
                   <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">feed</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">chats</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">vedio</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">groups</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">bookmarks</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">question</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">job</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">event</span>
               </li>
               <li className="sidebarlistitem">
               <RssFeedIcon className='sidebaricon'/>
                   <span className="sidebaricontext">course</span>
               </li>
           </ul>
           <button className="sidebarbutton">show more</button>
           <hr className='sidebarhr' />



           
 <ul className="sidebarfrdlist">

     {
         Users.map((ele)=>{
             return(
                 <Closefrd photo={ele.profilePicture} name={ele.username}/>
             )
         })
     }

 </ul>
       </div>

    </div>
  )
}

export default SideBar
