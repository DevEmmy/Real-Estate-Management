import React, { useState } from 'react'
import {info}  from "../Assets/Details/info"
import { Link } from 'react-router-dom'
import { MenuAlt3Icon } from '@heroicons/react/solid'
import MobileNav from './MobileNav'

function Nav({width}) {

  const [nav, setNav] = useState(false)

  return (
    <div className='nav_compo'>
      <h3>{ info.name }</h3>

      
      { width > 800 ? <div className="nav_items">
        {info.nav_items.map((item)=>{
          return(
            <Link to={item.link ? `${item.link}` : "/"}>
              <p className={ item.title === ("Sign In/Up") ? 'nav_item block' : "nav_item"}>
                {item.title}
              </p>
            </Link>
            
          )
        })}
      </div> :  <MenuAlt3Icon width="30px" onClick={()=>setNav(!nav)}/>}
      
      {nav ?  <MobileNav pro = {setNav } left='0px'/> : <MobileNav pro = {setNav } left='-100%'/>}
    </div>
  )
}

export default Nav