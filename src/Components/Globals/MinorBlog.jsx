import React, { useState } from 'react'

function MinorBlog() {

    const [ blog, setBlog ] = useState()


  return (
    <div className='minor_blog'>
        <h2>Blog Posts</h2>
        <div className="minor_blog_post_container">
            {
                blog?.map(()=>{
                    return(
                        <div className='minor_blog_post'>
                        
                    </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MinorBlog