import React, { useState, useEffect } from 'react'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function Latest() {
    let [width, setWidth] = useState(window.innerWidth)

  const setSize = ()=>{
      setWidth(window.innerWidth)
      console.log(width)
  }
  useEffect(() => {
   window.addEventListener('resize', setSize)
   return ()=>{ 
       console.log(width)
      window.removeEventListener('resize', setSize)
   }
  
  }, []);

  return (
    <div className='latest_compo'>
        <Nav width = {width}/>



        <Footer />
    </div>
  )
}

export default Latest