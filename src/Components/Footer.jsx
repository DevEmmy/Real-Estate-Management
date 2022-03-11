import React from 'react'

function Footer() {
  return (
    <div className='global__footer'>
        <div className="kingsmen">
            <div className="icon">
                KingsMen
            </div>
            <div className="icon__footer__content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id possimus reiciendis doloremque eligendi ipsum? Exercitationem eveniet expedita, laborum fuga ratione possimus ad iure reiciendis quo cumque aut, autem id minima!
            </div>

            <div className="social__icons">
                
            </div>

            <div className="copyright">
                2022 &copy; All right reserved
            </div>
        </div>

        <div className="kingmen__list">
            <h3>Our Company</h3>
            <div className="km__item">About us</div>
            <div className="km__item">Contact us</div>
            <div className="km__item">Blog</div>
            <div className="km__item">Agents</div>
        </div>

        <div className="categories__list">
            <h3>Categories</h3>
            <div className="cat__item">Real Estate</div>
            <div className="cat__item">Cars</div>
            <div className="cat__item">Houses</div>
            <div className="cat__item">Motels</div>
            <div className="cat__item">Accessories</div>
        </div>
    </div>
  )
}

export default Footer