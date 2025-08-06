import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink } from 'react-router-dom';

function Home() {

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <Header />
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
          
            {/* Destination Start */}
            <div className="container-xxl py-5 destination">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">TRAINS</h6>
                        <h1 className="mb-5">Most Preferred Trains</h1>
                    </div>
                    <div className="row g-3">
                        <div className="col-lg-6 col-md-6">
                            <div className="row g-3">
                                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/2022_9img30_sep_2022_pti09_30_2022_000068b_0-sixteen_nine.jpg?size=948:533" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">97% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Vande Bharat</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2023/9/1/rajadhani.JPG.transform/schema-4x3/image.jpg" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">85% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Rajdhani Express</div>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                                    <a className="position-relative d-block overflow-hidden" href>
                                        <img className="img-fluid" src="https://images.news18.com/ibnlive/uploads/2022/12/maharajas-express1-1024x681-16722290274x3.jpg" alt />
                                        <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">89% Ratings</div>
                                        <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">Maharajas' Express</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: 350 }}>
                            <a className="position-relative d-block h-100 overflow-hidden" href>
                                <img className="img-fluid position-absolute w-100 h-100" src="https://travelogyindia.b-cdn.net/blog/wp-content/uploads/2019/12/golden-chariot-train-2-1024x682.jpg" alt style={{ objectFit: 'cover' }} />
                                <div className="bg-white text-danger fw-bold position-absolute top-0 start-0 m-3 py-1 px-2">81% Ratings</div>
                                <div className="bg-white text-danger fw-bold position-absolute bottom-0 end-0 m-3 py-1 px-2">The Golden Chariot</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Destination Start */}
            {/* Process Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center pozy px-3">Why POZY?</h6>
                        <h1 className="mb-5">3 Key Features</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center">
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-globe fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Choose Your Location</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Choose your preferred Location through-out India and have a seamless booking experience with POZY</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-rupee-sign fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Pay With UPI</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">Keeping in mind Indian Government's policy of Digitalization the payment gateway is designed simple yet quick , supporting UPI </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                <div className="d-inline-flex align-items-center justify-content-center bg-primary rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: 100, height: 100 }}>
                                    <i className="fa fa-subway fa-3x text-white" />
                                </div>
                                <h5 className="mt-4">Wide Range of Trains</h5>
                                <hr className="w-25 mx-auto bg-primary mb-1" />
                                <hr className="w-50 mx-auto bg-primary mt-0" />
                                <p className="mb-0">With POZY you get wide range of Trains with different-different categories for minimal to maximal distance </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Process Start */}
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
                                    <a className="btn btn-square mx-1" href="https://www.instagram.com/_pavan.shelat?igsh=MWFieHA5ZXlkcW5ieQ=="><i className="fab fa-instagram" /></a>
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
            <Footer />

        </div>

    )
}

export default Home