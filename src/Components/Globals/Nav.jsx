import React from 'react'
import {info}  from "../Assets/Details/info"

function Nav() {
  return (
    <div className='nav_compo'>
      <h3>{ info.name }</h3>
      <div className="nav_items">
        {info.nav_items.map((item)=>{
          return(
            <p className='nav_item'>
              {item.title}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default Nav