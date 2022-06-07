import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Post.css"
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Post = (props) => {

  
  
  const [like ,setlike ] = useState(props.like)
  const [isliked , setliked] = useState(false)

  const updatelike = ()=>{

  
    setlike(isliked ? like-1 : like+1)
    setliked(!isliked)
  }

  return (
    <>
       <div className="post"> 
       <div className="postwrapper">
           <div className="posttop">
               <div className="posttopleft">
              <Link to="/Profile"><img src={props.photo1} alt="" className="profilepicture" /></Link> 
               <span className="profilename">Spiderman</span>
               <span  className="profiletime">{props.date} min ago</span>
           </div>

           <div className="posttopright">
              <MoreVertIcon/>
           </div>
           </div>



           <div className="postcenter">
               <span className="posttext">{props.desc}</span>
               <img src={props.photo2} alt="" className="postimg" />
           </div>


           <div className="postbutton">
               <div className="postbuttonleft">
               <img src="/assets/heart.png" alt="" className="likeicon" />
               <img  onClick={updatelike} src="/assets/like.png" alt="" className="hearticon" />
               <span  className="postlikecounter">{like} people like it</span>
               </div>
               <div className="posybuttonright">
                <span className="postcommenttext">{props.comment}comments</span>
               </div>
           </div>
       </div>
       </div>
    </>
  )
}

export default Post
