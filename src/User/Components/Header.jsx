import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Header() {
    const redirect = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('userid');
        toast.success("Logout Success");
        return redirect('/');
    }

    const [searchData, setSearchData] = useState({
      from: '',
      to: ''
    });
  
    const handleChange = (e) => {
      setSearchData({ ...searchData, [e.target.name]: e.target.value });
    };
  
    const handleSearch = () => {
      if (searchData.from && searchData.to) {
        redirect(`/TrainSearch?from=${encodeURIComponent(searchData.from)}&to=${encodeURIComponent(searchData.to)}`);
      } else {
        alert('Please enter both source and destination');
      }
    };
    return (
        <div>

            <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+91 73592 91005</small>
                            <small className="text-light"><i className="fa fa-envelope-open me-2" />pozytrains@gmail.com</small>
                        </div>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
                        <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.linkedin.com/in/pozy-trains/"><i className="fab fa-linkedin-in fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/pozy.trains/"><i className="fab fa-instagram fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://x.com/PozyTrains"><i className="fab fa-twitter fw-normal" /></a>
                            <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="https://www.youtube.com/@POZYTrains"><i className="fab fa-youtube fw-normal" /></a>


                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}
            {/* Navbar & Hero Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                    <a href className="navbar-brand p-0">

                        <img src="img/logo.png" alt="Logo" width={"100px"} />

                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link default">Home</NavLink>
                            <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                            <NavLink to="/Service" className="nav-item nav-link">Services</NavLink>
                            <NavLink to="/Package" className="nav-item nav-link">Packages</NavLink>
                            <NavLink to="/PNRStatus" className="nav-item nav-link">PNR Status</NavLink>
                            {/* <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                                <div className="dropdown-menu bg-info m-0">
                                    <a href="destination.html" className="dropdown-item">Destination</a>
                                    <a href="booking.html" className="dropdown-item">E-Booking</a>
                                    <a href="team.html" className="dropdown-item">Travel Guides</a>
                                    <a href="testimonial.html" className="dropdown-item">Reviews</a>
                                    <a href="404.html" className="dropdown-item">Train Timings</a>
                                </div>
                            </div> */}

                            {(() => {
                                if (localStorage.getItem('user')) {
                                    return (
                                        <>
                                            <NavLink to="/CPass" className="nav-item nav-link">Change-Password</NavLink>
                                            <NavLink className="nav-item nav-link" to="/">
                                                <i className="fa fa-user" aria-hidden="true" />{localStorage.getItem('user')}
                                            </NavLink>
                                            <NavLink to="javascript:void(0)" className="nav-item nav-link" onClick={logout}>Logout</NavLink>

                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <NavLink to="/login" className="nav-item nav-link">
                                            <i className="fa fa-user " aria-hidden="true" />
                                            <span> Login</span>
                                        </NavLink>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </nav>
                <div className="container-fluid bg-primary py-5 mb-5 hero-header">
                    <div className="container py-5">
                        <div className="row justify-content-center py-5">
                            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                                <h1 className="display-3 text-white mb-3 animated slideInDown">Enjoy Your Vacation With Us</h1>
                                <p className="fs-4 text-white mb-4 animated slideInDown" />
                                <div className="position-relative w-75 mx-auto animated slideInDown d-flex gap-2">
                                    <input
                                        className="form-control bg-dark border-0 rounded-pill flex-grow-1 py-3 ps-4 pe-5"
                                        type="text"
                                        name="from"
                                        placeholder="From: Eg. New Delhi"
                                        value={searchData.from}
                                        onChange={handleChange}
                                    />
                                    <input
                                        className="form-control bg-dark border-0 rounded-pill flex-grow-1 py-3 ps-4 pe-5"
                                        type="text"
                                        name="to"
                                        placeholder="To: Eg. Mumbai"
                                        value={searchData.to}
                                        onChange={handleChange}
                                    />
                                    <button type="button" className="btn btn-info text-white rounded-pill py-2 px-4" onClick={handleSearch}>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Header