import React, { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function FPass() {

    const redirect = useNavigate();
    const [formvalue, setFormvalue] = useState({
        email: "",
    });
    const onchangehandle = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    const onsubmit = async (e) => {
        e.preventDefault();
        try {
          // Check if the email exists in the JSON server
          const response = await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
          const data = response.data;
    
          if (data.length > 0) {
            // Generate a dynamic OTP
            const otp = Math.floor(100000 + Math.random() * 900000);
            console.log(otp)
            
            localStorage.setItem('userid', response.data[0].id);
            localStorage.setItem('otp', otp);

            await axios.post('http://localhost:5000/send-otp', {
                email: formvalue.email,
                otp: otp
            });
            
            setFormvalue({email:""})
         
            // Save OTP to the user's record
            toast(`OTP sent to ${formvalue.email}!`);
            redirect('/OTP')
          } else {
            toast("Email not found!");
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
                                <h1 className="text-white mb-4">Forgot Password</h1>
                                <form>
                                    <div className="row g-3 text-white">
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control bg-transparent" id="name" name="email" onChange={onchangehandle} value={formvalue.email} placeholder="Your User id" />
                                                <label htmlFor="name">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-3">
                                            <NavLink to="/FPass">
                                                <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Send OTP</button>
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

export default FPass