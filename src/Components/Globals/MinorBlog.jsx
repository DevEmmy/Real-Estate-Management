import React, { useState } from 'react'
import blog from '../Assets/Details/blog'

function MinorBlog() {

    // const [ blog, setBlog ] = useState()


  return (
    <div className='minor_blog'>
        <h2>Blog Posts</h2>
        <div className="minor_blog_post_container">
            {
                blog?.map((item)=>{
                    return(
                        <div className='minor_blog_post' key={item.id}>
                        <img src={item.img} alt="" />
                        <div className="blog_texts">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MinorBlog