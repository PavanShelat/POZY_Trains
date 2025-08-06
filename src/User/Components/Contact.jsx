import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Contact() {
    return (
        <div>
            <Header/>
            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                        <h1 className="mb-5">Contact For Any Query</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h5>Get In Touch</h5>
                        
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-map-marker-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Office</h5>
                                    <p className="mb-0">SG Highway, Ahmedabad</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-phone-alt text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Mobile</h5>
                                    <p className="mb-0">+91 73592 91005</p>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: 50, height: 50 }}>
                                    <i className="fa fa-envelope-open text-white" />
                                </div>
                                <div className="ms-3">
                                    <h5 className="text-primary">Email</h5>
                                    <p className="mb-0">pozytrains@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <iframe className="position-relative rounded w-100 h-100" src="https://maps.google.com/maps?q=Sg+highway&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} style={{ minHeight: 300, border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0} />
                        </div>
                        <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                            <label htmlFor="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                            <label htmlFor="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 100 }} defaultValue={""} />
                                            <label htmlFor="message">Message</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}
            <Footer/>
        </div>

    )
}

export default Contact