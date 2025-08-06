import React from 'react'
import Footer from './Footer'
import Header from './Header'

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3">Privacy Policy</h6>

        </div>

        <strong>© Copyright 2023,POZY Trains</strong>
        <p>At POZY Trains, we respect your privacy and strive to protect your personal information. We collect
          and use your data with the sole interest of improving your experience and offering the best service possible.
          We will never pass your information onto third parties without consent. The contents hereof are purely for internal
          circulation in POZY and any access of whatsoever nature of these materials outside the POZY network is strictly prohibited
          and will attract legal liability of both civil and criminal nature.We need to be able to have your trust,
          and in turn,we make sure that all information under our possession is treated with utmost care.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default PrivacyPolicy