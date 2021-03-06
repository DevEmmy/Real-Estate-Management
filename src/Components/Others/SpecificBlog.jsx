import React from 'react'
import { useParams } from 'react-router-dom'
import blog from '../Assets/Details/blog'
import Footer from '../Globals/Footer'

function SpecificBlog() {

    const { id } = useParams()
  return (
    <div className='specific_blog'>
      
        {blog?.filter(i =>i.id == id).map(i=>{return(

          <div className="blog_contents">
            <h2>{i.title}</h2>
            <img src={i.img} alt="" />
            <p>{i.content}</p>
          </div>
          
          
        )})}

        <Footer />
    </div>
  )
}

export default SpecificBlog