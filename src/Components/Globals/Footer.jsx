import React from 'react'
import { Link } from 'react-router-dom'
import {info} from "../Assets/Details/info"

function Footer() {
  return (
    <div className='footer'>
        <div className="footer_1">
            <h3>{info.name}</h3>
            <p>{info.footer_content_text}</p>
            <p className="copyright">{info.copyright}</p>
        </div>

        <div className="footer_2">
            <h3>Our Company</h3>
            <div className="footer_items">
                {info.nav_items.filter((item)=>item.title !== "Sign In/Up").map((item)=>{
                    return(
                        <div className="footer_item" key={item.id}>
                            <Link to={item.link}>
                            {item.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>

        <div className="footer_3">
            <h3>Categories</h3>
            <div className="footer_items">
                { info.categories.map((item)=>{
                    return(
                        <div className="footer_item">
                            <Link to={item.link}>
                            {item.title}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer