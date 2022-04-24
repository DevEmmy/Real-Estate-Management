import React, { useState, useEffect } from 'react'
import Footer from '../Globals/Footer'
import Nav from '../Globals/Nav'
import blog from '../Assets/Details/blog'

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

        <div className="blog_top_section">
          { blog.indexOf(0)}
          <img src={ blog.indexOf(1).img} alt="" />
        </div>

          <div className="main_blogs_container">
          {
                blog?.map((item)=>{
                    return(
                        <div className='main_blog_post' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="main_blog_texts">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    </div>
                    )
                })
            }
          </div>
        <Footer />
    </div>
  )
}

export default Blog