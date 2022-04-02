import React, { useState, useEffect }  from 'react'
import { sub } from '../Assets/Details/subcategory'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'

function RealEstate() {
  const [listing, setListing] = useState([])

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


    const fetchRealEstate = async ()=>{
      const resp = await fetch('http://localhost:1337/api/real-estate-houses')
      const data = await resp.json()
      console.log(data.data)
      setListing(data.data)
    }

    useEffect(()=>{
      fetchRealEstate()
    }, [])
  
  return (
    <div>
        <Nav width = {width}/>
        <Banner/>

        <div className="real_estate_listings">

          <div className="real_estate_filter">
            {
              sub.realEstate.map((cat)=>{
                return(
                  <div className="filter">
                      {cat.title}
                  </div>
                )
              })
            }
          </div>

          <div className="real_estate_main">
            <h2>Real Estate</h2>
            <div className="main_listing">
              {
                listing.map((list)=>{
                  return(
                    <div className='list'>
                      {list.attributes.title}
                    </div>
                  )
                })
              }
            </div>
          </div>
          
          <h2>New & Trending</h2>
          <div className="listing">

          </div>
        </div>


        <Footer />
    </div>
  )
}

export default RealEstate