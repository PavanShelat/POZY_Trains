import React from 'react'
import { NavLink } from 'react-router-dom'

function Afooter() {
    return (
        <div>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Company</h4>
                            <NavLink className="btn btn-link" to="/About">About Us</NavLink>
                            <a className="btn btn-link" href="/Contact">Contact Us</a>
                            <a className="btn btn-link" href="/PrivacyPolicy">Privacy Policy</a>
                            <a className="btn btn-link" href="/Terms">Terms & Conditions</a>
                            <a className="btn btn-link" href="/FAQ">FAQs &amp; Help</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Contact</h4>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3" />+91 73592 91005</p>
                            <p className="mb-2"><i className="fa fa-envelope me-3" />pozytrains@gmail.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/pozy-trains/"><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/pozy.trains/"><i className="fab fa-instagram" /></a>
                                <a className="btn btn-outline-light btn-social" href="https://x.com/PozyTrains"><i className="fab fa-twitter" /></a>
                                <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/@POZYTrains"><i className="fab fa-youtube" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3" />
                            <div className="row g-2 pt-2">
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h4 className="text-white mb-3">Newsletter</h4>
                            <p>To stay updated with offers and user policies sign up with POZY </p>
                            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
                                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                © <a className="border-bottom" href="#">POZY Trains</a>, All Right Reserved.
                                Designed By <a className="border-bottom" href="https://htmlcodex.com">POZYTech</a>
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                    <a href="/">Home</a>
                                    <a href>Cookies</a>
                                    <a href="/FAQ">Help</a>
                                    <a href="/FAQ">FAQs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End */}

        </div>
    )
}

export default Afooter