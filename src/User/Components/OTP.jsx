import React, { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function OTP() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('otp')) {
            
        }
        else{
            navigate('/')
        }
    },[]);
    const [formvalue, setFormvalue] = useState({
        otp: "",
    });
    const onchangehandle = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(setFormvalue);
      }
    const onsubmit = async (e) => {
        e.preventDefault();
        try {    
          if (localStorage.getItem('otp') === formvalue.otp) {
            
            localStorage.removeItem('otp')
            toast("OTP verified!");
            setFormvalue({otp:""})
            navigate('/NPass')
            console.log("*************************")
          } else {
            toast("Invalid OTP!");
            
          }
        } catch (err) {
          toast("An error occurred. Please try again.");
        }
      };
    return (
        <div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="bookingx p-5">
                        <div className="row g-5 align-items-center">

                            <div className="col-md-12">
                                <h1 className="text-white mb-4">Verify OTP</h1>
                                <form>
                                    <div className="row g-3 text-white">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="number" className="form-control bg-transparent" id="otp" name="otp" onChange={onchangehandle} value={formvalue.otp} placeholder="Your User id" />
                                                <label htmlFor="name">OTP</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                        
                                                <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Verify OTP</button>
                                       
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

export default OTP