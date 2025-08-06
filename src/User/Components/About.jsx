import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
    return (
        <div>
            <Header />
            <div>
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{ minHeight: 400 }}>
                                <div className="position-relative h-100">
                                    <img className="img-fluid position-absolute w-100 h-100" src="https://media.npr.org/assets/img/2016/09/16/indianrailway1_custom-f0cebada13c58db3cf828b05440ab8233b09a761.jpg" alt style={{ objectFit: 'cover' }} />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <h6 className="section-title bg-white text-start pozy pe-3">About Us</h6>
                                <h1 className="mb-4">Welcome to <span className="text-primary">POZY</span></h1>
                                <p className="mb-4">POZY Trains is a “Mini Ratna (Category-I)” Central Public Sector Enterprise under Ministry of Railways, Government of India. POZY Trains was incorporated on 27th September, 1999 as an extended arm of the Indian Railways to upgrade, professionalize and manage the catering and hospitality services at stations, on trains and other locations and to promote domestic and international tourism through development of special tour packages, information &amp; commercial publicity and global reservation systems.</p>
                                <p className="mb-4"> The authorized capital of the company is 10 crores and paid up capital is 3 crores. It’s registered and Corporate Office is situated at Ahmedabad.</p>
                                <div className="row gy-2 gx-4 mb-4">
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />First Class Flights</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />Handpicked Hotels</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />5 Star Accommodations</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />Latest Model Vehicles</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />150 Premium City Tours</p>
                                    </div>
                                    <div className="col-sm-6">
                                        <p className="mb-0"><i className="fa fa-arrow-right pozy me-2" />24/7 Service</p>
                                    </div>
                                </div>
                                <a className="btn btn-info py-3 text-white rounded-pill px-5 mt-2" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="section-title bg-white text-center pozy px-3">Team Guide</h6>
                            <h1 className="mb-5">Meet Our Team</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/ys1.png" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                        <a className="btn btn-square mx-1" href="https://www.linkedin.com/in/yash-panchal-450917301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin" /></a>
                                        <a className="btn btn-square mx-1" href="https://t.me/YashSPanchal"><i className="fab fa-telegram" /></a>
                                        <a className="btn btn-square mx-1" href="https://www.instagram.com/_yash.panchal_?igsh=bTBmbGt5ZWpwNHd6&utm_source=qr"><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Yash Panchal</h5>
                                        <small>CEO</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/om.png" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                        <a className="btn btn-square mx-1" href><i className="fab fa-linkedin" /></a>
                                        <a className="btn btn-square mx-1" href="https://t.me/Dracoon324"><i className="fab fa-telegram" /></a>
                                        <a className="btn btn-square mx-1" href="https://www.instagram.com/_om_0309_?igsh=NGd5bms2YWdrazUz"><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Om Patel</h5>
                                        <small>CFO</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/ps2.png" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                        <a className="btn btn-square mx-1" href="https://www.linkedin.com/in/pavan-shelat-b1357924b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin" /></a>
                                        <a className="btn btn-square mx-1" href="https://t.me/PavanShelat"><i className="fab fa-telegram" /></a>
                                        <a className="btn btn-square mx-1" href="https://www.instagram.com/pavan.shelat/"><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Pavan Shelat</h5>
                                        <small>CTO</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/z.png" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                        <a className="btn btn-square mx-1" href><i className="fab fa-linkedin" /></a>
                                        <a className="btn btn-square mx-1" href="https://t.me/Zakariya_Shaikh"><i className="fab fa-telegram" /></a>
                                        <a className="btn btn-square mx-1" href="https://www.instagram.com/zakariya_1415?igsh=MXc5cHpseTNkdXV4eQ=="><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">S M Zakariya</h5>
                                        <small>CMO</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item">
                                    <div className="overflow-hidden">
                                        <img className="img-fluid" src="img/pm.png" alt />
                                    </div>
                                    <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-19px' }}>
                                        <a className="btn btn-square mx-1" href="https://www.linkedin.com/in/preet-mistry-b78030301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fab fa-linkedin" /></a>
                                        <a className="btn btn-square mx-1" href="https://t.me/PTM1222"><i className="fab fa-telegram" /></a>
                                        <a className="btn btn-square mx-1" href="https://www.instagram.com/preet.mistry.944?igsh=bXNhZ2VjMWlmd2Fw"><i className="fab fa-instagram" /></a>
                                    </div>
                                    <div className="text-center p-4">
                                        <h5 className="mb-0">Preet Mistry</h5>
                                        <small>COO</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Team End */}
            </div>
            <Footer />

        </div>
    )
}

export default About