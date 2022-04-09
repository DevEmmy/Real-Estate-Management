import React, { useState, useEffect } from 'react'
import Nav from '../Globals/Nav'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import { info } from '../Assets/Details/info'
import MinorBlog from '../Globals/MinorBlog'
import MinorLatest from '../Globals/MinorLatest'

function LandingPage() {

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
    <div>
      <Nav width = {width}/>

      <Banner />

      <div className="featured_categories">
        <h1>Featured Categories</h1>
        <div className="categories_container">
          {info.categories.map((item)=>{
          return(
            <div className='category' style={{background: `url(${item.image})`}}>
              <h3>{item.title}</h3>
            </div>
          )
        })}
        </div>
        
      </div>

      <MinorLatest />

      <MinorBlog />

      <div className="news_letter">
        <div className="news_text_container">
          <h1>Weekly News Letter</h1>
          <p>{info.newsLetter_intro_text}</p>
        </div>

        <form className="newsLetter_form">
          <input type="email" name="email" placeholder='Email'/>
          <input type="button" value="SUBSCRIBE" />
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default LandingPage