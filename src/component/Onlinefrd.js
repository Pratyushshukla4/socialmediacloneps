import React from 'react'

const Onlinefrd = (props) => {
  return (
    <>
      <li className="rightbarfrd">
                <div className="rightbarprofileimg">
                  <img src={props.photo} alt="img" className="rightbarprofileimg" />
                  <span className="rightbaronline"></span>
                </div>
                <span className="rightbarusername">{props.name}</span>
              </li>
    </>
  )
}

export default Onlinefrd
