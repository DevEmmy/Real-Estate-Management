import React from 'react'
import {info} from '../Assets/Details/info'

function Banner() {
  return (
    <div className='banner' style={{backgroundImage: `linear-gradient(rgb(0,0,0,0.3), rgba(0,0,0,0.7)), url(${info.banner_img})`}}>
                <h1>{info.banner_text}</h1>
                <p>{info.banner_sub_text}</p>
    </div>
  )
}

export default Banner