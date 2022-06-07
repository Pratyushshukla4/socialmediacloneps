import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
// import "../Damydata"
import {posts} from "../Damydata"


const Feed = () => {
  return (
    <div className='feed'>
       <div className="feedwrapper">
       <Share/>


    
     {
     (posts|| []).map((ele)=>{
       return( 
        <Post photo1={ele.photo1} photo2={ele.photo2} key={ele.id} like={ele.like} comment={ele.comment} date={ele.date} desc={ele.desc}/> 
       )
     })
}
       </div>
    </div>
  )
}

export default Feed
