import React from 'react'


const Closefrd = (props) => {
  return (

    <li className="sidebarfrd">
    <img src={props.photo} alt="" className="sidebarfrdimg" />
    <span className="sidebarfrdname">{props.name}</span>
</li>
  )
}

export default Closefrd
