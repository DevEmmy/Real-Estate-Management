import React, { useState, useEffect } from 'react'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'
import blog from '../Assets/Details/blog'
import { Link } from 'react-router-dom'

function Blog() {

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
    <div className='blog'>
        <Nav width = {width}/>

        <div className="blog_top_section" style={{backgroundImage: `linear-gradient(rgb(0,0,0,0.3), rgba(0,0,0,0.7)), url(${ blog[0].img})`}}>
         <h2>
           Blogs
         </h2>
        </div>

          <div className="main_blogs_container">
          {
                blog?.map((item)=>{
                    return(

                      <Link to={`/blog/${item.id}`}>
                        <div className='main_blog_post' key={item.id}>
                          <img src={item.img} alt="" />
                          <div className="main_blog_texts">
                              <h4>{item.title}</h4>
                              <p>{item.content}</p>
                          </div>
                        </div>
                      </Link>
                    )
                })
            }
          </div>
        <Footer />
    </div>
  )
}

export default Blog