import React, { useState, useEffect } from 'react'
import Nav from '../Globals/Nav'
import Banner from '../Globals/Banner'
import Footer from '../Globals/Footer'
import { info } from '../Assets/Details/info'
import MinorBlog from '../Globals/MinorBlog'
import MinorLatest from '../Globals/MinorLatest'
import { useDispatch, useSelector } from 'react-redux'
import { widthAction } from '../../store/widthSlice'
import Loader from '../Globals/Loader'
import CarouselContainer from '../Globals/CarouselContainer'

function LandingPage() {

  let [width, setWidth] = useState(window.innerWidth)

  let [display, setDisplay] = useState(false)

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

  const displayContent = ()=>{
    setTimeout(()=>setDisplay(true), 3000)
  }

  displayContent();

  return (
    <div>

      {
        display &&  <>
<Nav width = {width}/>

      <Banner />

      <div className="featured_categories">
        <h1>Featured Categories</h1>
        <div className="categories_container">
          {info.categories.map((item)=>{
          return(
            <div className='category' style={{background: `url(${item.image})`}} key={item.id}>
              <h3>{item.title}</h3>
            </div>
          )
        })}
        </div>
        
      </div>

        <div className="latest">
          <CarouselContainer />
        </div>
      

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
       </>
      }
      {!display && <Loader />}
    </div>
  )
}

export default LandingPage