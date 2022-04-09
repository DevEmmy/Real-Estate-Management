import React, { useState, useEffect }  from 'react'
import { apiURLs } from '../Assets/Details/api'
import { sub } from '../Assets/Details/subcategory'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'


function RealEstate() {
  const [listing, setListing] = useState([])
  const [filter, setFilter] = useState('All')

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
      const resp = await fetch(apiURLs.fetchRealEstate)
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
                  <div className="filter" onClick={()=>setFilter(`${cat.title}`)}>
                    { console.log(filter) }
                      {cat.title}
                  </div>
                )
              })
            }
          </div>

          <div className="real_estate_main">
            <h2>Real Estate</h2>
            <div className="main_listing">
              { filter === "All" ?
                listing?.map((list)=>{
                  return(
                    <div className='list'>
                      <img src={list.attributes.media.data[0].attributes.url} alt="" />
                      <div className="list_text">
                        <h3>{list.attributes.title}</h3>
                        <h6>Category : { list.attributes.real_estate_subcategory.data.attributes.category}</h6>
                        <p>
                          {list.attributes.description}
                        </p>
                      </div>
                    </div>
                  )
                })

                : 

                listing?.filter((list)=> list.attributes.real_estate_subcategory.data.attributes.category === filter).map((list)=>{
                  return(
                    <div className='list'>
                      <img src={list.attributes.media.data[0].attributes.url} alt="" />
                      <div className="list_text">
                        <h3>{list.attributes.title}</h3>
                        <h6>Category : { list.attributes.real_estate_subcategory.data.attributes.category}</h6>
                        <p>
                          {list.attributes.description}
                        </p>
                      </div>
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
