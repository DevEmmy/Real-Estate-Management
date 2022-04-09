import React, { useState, useEffect } from 'react'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'

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