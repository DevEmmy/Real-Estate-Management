import React from 'react'
import {info}  from "../Assets/Details/info"
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav_compo'>
      <h3>{ info.name }</h3>
      <div className="nav_items">
        {info.nav_items.map((item)=>{
          return(
            <Link to={item.link ? `${item.link}` : "/"}>
              <p className={ item.title === ("Sign In/Up") ? 'nav_item block' : "nav_item"}>
                {item.title}
              </p>
            </Link>
            
          )
        })}
      </div>
    </div>
  )
}

export default Nav