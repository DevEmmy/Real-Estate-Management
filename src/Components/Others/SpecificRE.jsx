import { CameraIcon, HeartIcon } from '@heroicons/react/solid'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiURLs } from '../Assets/Details/api'
import Nav from '../Globals/Nav'

function SpecificRE() {

  const { id } = useParams()
  const [listing, setListing] = useState([])

  const fetchRealEstate = async ()=>{
    const resp = await fetch(apiURLs.fetchRealEstate)
    const data = await resp.json()
    console.log(data.data)
    setListing(data.data.filter(i=> i.id == id))
  }

  useEffect(()=>{
    fetchRealEstate()
  }, [])

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
    <div className='sp_real_estate' >
      <Nav width = {width}/>

        <div className="spl_top_section" style={{backgroundImage: `linear-gradient(rgb(0,0,0,0.3), rgba(0,0,0,0.7)), url(${ listing[0]?.attributes.media.data[0].attributes.url})`, height: '600px'}} >

          <div className="list_title">
            {
              listing[0]?.attributes.title
            }
          </div>
            <div className="list_option">
              <div className="opt">
                save <HeartIcon width={22}/>
              </div>

              <div className="opt">
                view photos <CameraIcon width={22} />
              </div>
            </div>
        </div>

 
            {
              listing?.map((i)=>{
                return(
                  <div key={i.id} className="sp_list">
                    {/* <img src={i.attributes.media.data[0].attributes.url} alt="" /> */}

                    {/* <div className="sp_list_content">
                      <h3>{i.attributes.title}</h3>
                    </div> */}
                    
                  </div>
                )
              })
            }
           
    </div>
  )
}

export default SpecificRE