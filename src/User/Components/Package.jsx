import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function Package() {

    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    });
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/packages`);
        console.log(res.data);
        setData(res.data)

    }

    const highlightText = (text, keywords) => {
        const regex = new RegExp(`(${keywords.join("|")})`, "gi");
        return text.replace(
            regex,
            '<span style="font-weight: bold; color: #00c3ff;">$1</span>'
        );
    };

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <>
                {Array.from({ length: fullStars }, (_, i) => (
                    <small key={`full-${i}`} className="fa fa-star text-primary"></small>
                ))}
                {hasHalfStar && (
                    <small className="fa fa-star-half-alt text-primary"></small>
                )}
                {Array.from({ length: emptyStars }, (_, i) => (
                    <small key={`empty-${i}`} className="far fa-star text-primary"></small>
                ))}
            </>
        );
    };

    const handleBookNowClick = (pkg) => {
        navigate(`/PackageBooking/${pkg.id}`);
    };

    return (
        <div>
            <Header />

            {/* Package Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-primary px-3">Packages</h6>
                        <h1 className="mb-5">Awesome Packages</h1>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {
                            data && data.map((value) => {
                                return (
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={value.id}>
                                        <div className="package-item h-100 d-flex flex-column">
                                            <div className="overflow-hidden">
                                                <img className="img-fluid" src={value.pkg_img} alt />
                                            </div>
                                            <div className="d-flex border-bottom">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-map-marker-alt text-primary me-2" />{value.pkg_place}</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-calendar-alt text-primary me-2" />{value.tot_day} Days</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-user text-primary me-2" />{value.tot_person} Person</small>
                                            </div>
                                            <div className="text-center p-4 d-flex flex-column flex-grow-1">
                                                <h3 className="mb-0">{value.pkg_price}</h3>
                                                <div className="mb-3">{renderStars(value.pkg_rating)}</div>
                                                <p dangerouslySetInnerHTML={{
                                                    __html: highlightText(value.pkg_desc, value.pkg_keywords),
                                                }}></p>
                                                <div className="mt-auto">
                                                    <a href="#" className="btn btn-sm btn-primary px-3 border-end" style={{ borderRadius: '30px 0 0 30px' }}>Read More</a>
                                                    <button className="btn btn-sm btn-primary px-3" style={{ borderRadius: '0 30px 30px 0' }} onClick={() => handleBookNowClick(value)}>Book Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
            {/* Package End */}
            {/* Booking Start */}
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="booking p-5">
                        <div className="row g-5 align-items-center">
                            <div className="col-md-6 text-white">
                                <h6 className="text-white text-uppercase">Booking</h6>
                                <h1 className="text-white mb-4">Online Booking</h1>
                                <p className="mb-4">Our company's online train booking system is a seamless and efficient platform designed to cater to the diverse travel needs of our customers.</p>
                                <p className="mb-4">With user-friendly interfaces and a robust backend, we offer a hassle-free experience from start to finish. Our intuitive website or app allows users to effortlessly search for train schedules, select preferred routes, and choose from various classes and seat options. The streamlined booking process ensures quick confirmations and secure transactions, providing peace of mind to travelers...</p>
                                <a className="btn btn-outline-light py-3 px-5 mt-2" href>Read More</a>
                            </div>
                            <div className="col-md-6">
                                <h1 className="text-white mb-4">Book A Tour</h1>
                                <form>
                                    <div className="row g-3 text-white">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control bg-transparent" id="name" placeholder="Your Name" />
                                                <label htmlFor="name">Your Mobile No.</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control bg-transparent" id="email" placeholder="Your Email" />
                                                <label htmlFor="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating date" id="date3" data-target-input="nearest">
                                                <input type="text" className="form-control bg-transparent datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                                                <label htmlFor="datetime">Date &amp; Time</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select text-white bg-transparent" id="select1">
                                                    <option className="bg-info" value={0} />
                                                    <option className="bg-info" value={1}>Mumbai</option>
                                                    <option className="bg-info" value={2}>Delhi</option>
                                                    <option className="bg-info" value={3}>Ahmedabad</option>
                                                </select>
                                                <label htmlFor="select1" className="text-white">From: </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <select className="form-select text-white bg-transparent" id="select2">
                                                    <option className="bg-info" value={0} />
                                                    <option className="bg-info" value={1}>Mumbai</option>
                                                    <option className="bg-info" value={2}>Delhi</option>
                                                    <option className="bg-info" value={3}>Ahmedabad</option>
                                                </select>
                                                <label htmlFor="select2" className="text-white">To: </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Special Request" id="message" style={{ height: 100 }} defaultValue={""} />
                                                <label htmlFor="message">Special Request</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Booking Start */}
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
            <Footer />
            <ToastContainer />
        </div>

    )
}

export default Package