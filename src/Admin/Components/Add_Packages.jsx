import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Aheader from './Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Add_Packages() {
    const redirect = useNavigate();
    const [formvalue, setFormvalue] = useState({
        id: "",
        pkg_img: "",
        pkg_place: "",
        tot_day: "",
        tot_person: "",
        pkg_price: "",
        pkg_rating: "",
        pkg_desc: "",
        pkg_keywords: [],
    });

    const onchangehandle = (e) => {
        const { name, value } = e.target;

        if (name === "pkg_keywords") {
            setFormvalue({ ...formvalue, [name]: value.split(",").map(item => item.trim()) });
        } else {
            setFormvalue({ ...formvalue,id: new Date().getTime().toString(), [name]: value });
        }
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
            const res = await axios.post(`http://localhost:3000/packages`, formvalue);
            setFormvalue({ ...formvalue, pkg_img: "", pkg_place: "", tot_day: "", tot_person: "", pkg_price: "", pkg_rating: "", pkg_desc: "", pkg_keywords: [], });
            toast.success('insert Success');
            redirect('/Add_Packages');
            return false
        }
    }

    //Validation

    const validation = () => {
        var result = true;
        if (formvalue.pkg_img == "" || formvalue.pkg_img == null) {
            result = false;
            toast.warning('Train Name is required')
            return false;
        }
        if (formvalue.pkg_place == "" || formvalue.pkg_place == null) {
            result = false;
            toast.warning('Train Number is required')
            return false;
        }
        if (formvalue.tot_day == "" || formvalue.tot_day == null) {
            result = false;
            toast.warning('Source Field is required')
            return false;
        }
        if (formvalue.tot_person == "" || formvalue.tot_person == null) {
            result = false;
            toast.warning('Destination Field is required')
            return false;
        }
        if (formvalue.pkg_price == "" || formvalue.pkg_price == null) {
            result = false;
            toast.warning('Train Type is required')
            return false;
        }
        if (formvalue.pkg_rating == "" || formvalue.pkg_rating == null) {
            result = false;
            toast.warning('Train Type is required')
            return false;
        }
        if (formvalue.pkg_desc == "" || formvalue.pkg_desc == null) {
            result = false;
            toast.warning('Train Type is required')
            return false;
        }
        if (formvalue.pkg_keywords == "" || formvalue.pkg_keywords == null) {
            result = false;
            toast.warning('Train Type is required')
            return false;
        }
        return result;
    }

    return (
        <div>
            <Aheader />
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="bookingx p-5">
                        <div className="row g-5 align-items-center">

                            <div className="col-md-12">
                                <h1 className="text-white mb-4">Add Package</h1>
                                <form>
                                    <div className="row g-3 text-white">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="pkg_place" onChange={onchangehandle} value={formvalue.pkg_place} placeholder="Your Place Name" />
                                                <label htmlFor="name">Place Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="tot_day" onChange={onchangehandle} value={formvalue.tot_day} placeholder="Your Total Package Days " />
                                                <label htmlFor="name">Total Package Days</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="number" className="form-control bg-transparent" id="name" name="tot_person" onChange={onchangehandle} value={formvalue.tot_person} placeholder="Total Person Number" />
                                                <label htmlFor="name">Total Person Number</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="pkg_price" onChange={onchangehandle} value={formvalue.pkg_price} placeholder="Source Station" />
                                                <label htmlFor="name">Package Price</label>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="pkg_rating" onChange={onchangehandle} value={formvalue.pkg_rating} placeholder="Destination Station" />
                                                <label htmlFor="name">Package Rating</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control bg-transparent" placeholder="Enter the Description for your Package" id="message" style={{ height: 100 }} name="pkg_desc" onChange={onchangehandle} value={formvalue.pkg_desc} />
                                                <label htmlFor="message">Package Description</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="pkg_keywords" onChange={onchangehandle} value={formvalue.pkg_keywords.join(", ")} placeholder="Enter the Keywords to Highlight" />
                                                <label htmlFor="name">Keywords to Highlight</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="pkg_img" onChange={onchangehandle} value={formvalue.pkg_img} placeholder="Enter Url" />
                                                <label htmlFor="name">Package Image</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/Add_Packages">
                                                <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Add</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add_Packages