import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { info } from '../Assets/Details/info.js';


function CarouselContainer() {
  return (
    <div className='carousel'>
        <h2>New & Trending</h2>
        <Carousel width="100%" autoPlay={true} infiniteLoop={true} showThumbs={false}>
            <div className="img">
                <img src={info.banner_img} alt="" />
            </div>

            <div className="img">
                <img src={info.banner_img} alt="" />
            </div>

            <div className="img">
                <img src={info.banner_img} alt="" />
            </div>

            <div className="img">
                <img src={info.banner_img} alt="" />
            </div>

            <div className="img">
                <img src={info.banner_img} alt="" />
            </div>
        </Carousel>
    </div>
  )
}

export default CarouselContainer