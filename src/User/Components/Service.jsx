import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Service() {
    return (
        <div>
            <Header/>
                   {/* Service Start */}
                   <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">POZY at a Glance</h6>
                        <h1 className="mb-5">Our Services</h1>
                    </div>
                    <div className="row g-4 h-100">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item h-100 rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-globe pozy mb-4" />
                                    <h5>Domestics Tours</h5>
                                    <p>Enjoy your Domestic tours with family </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item h-100 rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-train pozy mb-4" />
                                    <h5>Advanced Booking</h5>
                                    <p>With POZY you can get special early access for Advance Booking</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item h-100 rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-user pozy mb-4" />
                                    <h5>Instant PNR</h5>
                                    <p>Our Instant PNR service ensures quick and hassle-free retrieval of your PNR details.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="service-item h-100 rounded pt-3">
                                <div className="p-4">
                                    <i className="fa fa-3x fa-cog pozy mb-4" />
                                    <h5>Mobile and SMS Alerts</h5>
                                    <p>Stay updated with real-time information through our Mobile and SMS Alerts service.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
            <Footer/>
        </div>

    )
}

export default Service