import React, { useState } from 'react'

function MinorLatest() {
    const [latest, setLatest] = useState([])
  return (
    <div className='minor_latest'>
        <h2>New & Latest</h2>

        <div className="minor_latest_listings">
            {
                latest.map(()=>{
                    return(
                        <div className="minor_latest_list">
                            
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MinorLatest