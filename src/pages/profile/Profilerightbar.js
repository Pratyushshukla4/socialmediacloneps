import React from 'react'
import "./Profile.css"
// import "./RightBar.css"


const Profilerightbar = () => {
  return (
    <>
    <div className="profilerightbar">
      <h4 className="rightbartitle">User information </h4>
          <div className="rightbarinfo">
              <div className="rightbarinfiitm">
                  <span className="rightbarinfokey">City : </span>
                  <span className="rightbarinfovalue">Barabanki</span>
              </div>
              <div className="rightbarinfiitm">
                  <span className="rightbarinfokey">From : </span>
                  <span className="rightbarinfovalue">Utter pradesh</span>
              </div>
              <div className="rightbarinfiitm">
                  <span className="rightbarinfokey">relationship : </span>
                  <span className="rightbarinfovalue">Single</span>
              </div>

          </div>


       <h4 className="rightbartitle">User Friends </h4>
       <div className="rightbarfollowings">
           <div className="rightbarfollowing">
               <img src="assets/wn.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Piyush</span>
           </div>
           <div className="rightbarfollowing">
               <img src="assets/se2.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Manswani</span>
           </div>
           <div className="rightbarfollowing">
               <img src="assets/wn.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Yadav</span>
           </div>
           <div className="rightbarfollowing">
               <img src="assets/se2.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Vollapalli</span>
           </div>
           <div className="rightbarfollowing">
               <img src="assets/wn.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Vollapalli</span>
           </div>
           <div className="rightbarfollowing">
               <img src="assets/se2.jpg" alt="" className="rightbarfollowingimg" />
               <span className="rihjtbarfollowingname">Vollapalli</span>
           </div>
       </div>
      </div>
    </>
  )
}

export default Profilerightbar
