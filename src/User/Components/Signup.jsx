import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Signup() {
    const redirect = useNavigate();
    const [formvalue, setFormvalue] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        mobile: ""
      });
    
      const onchangehandle = (e) => {
        setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
    
      }
      const onsubmit = async (e) => {
        e.preventDefault();
        if (validation()) {
          const res = await axios.post(`  http://localhost:3000/user`, formvalue);
          setFormvalue({ ...formvalue, name: "", email: "", password: "", mobile: "" });
          toast.success('insert Success');
          redirect('/Login');
          return false
        }
      }
      //Validation
    
      const validation = () => {
        var result = true;
        if (formvalue.name == "" || formvalue.name == null) {
          result = false;
          toast.warning('Name Field is required')
          return false;
        }
        if (formvalue.email == "" || formvalue.email == null) {
          result = false;
          toast.warning('Email Field is required')
          return false;
        }
        if (formvalue.password == "" || formvalue.password == null) {
          result = false;
          toast.warning('Password Field is required')
          return false;
        }
        if (formvalue.mobile == "" || formvalue.mobile == null) {
          result = false;
          toast.warning('Mobile Field is required')
          return false;
        }
        return result;
      }
    
  return (
    <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="bookingx p-5">
                            <div className="row g-5 align-items-center">

                                <div className="col-md-12">
                                    <h1 className="text-white mb-4">Sign-up</h1>
                                    <form>
                                        <div className="row g-3 text-white">
                                        <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control bg-transparent" id="name" name="name" onChange={onchangehandle} value={formvalue.name} placeholder="Your User id" />
                                                    <label htmlFor="name">Name</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control bg-transparent" id="name" name="email" onChange={onchangehandle} value={formvalue.email} placeholder="Your User id" />
                                                    <label htmlFor="name">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control bg-transparent" id="name" name="mobile" onChange={onchangehandle} value={formvalue.mobile} placeholder="Your User id" />
                                                    <label htmlFor="name">Mobile Number</label>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="phone" className="form-control bg-transparent" id="name" name="password" onChange={onchangehandle} value={formvalue.password} placeholder="Password" />
                                                    <label htmlFor="name">Password</label>
                                                </div>
                                            </div>

                                            <div className="col-3">
                                                <NavLink to="/">
                                                <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Sign-up</button>
                                                </NavLink>
                                                <NavLink to="/Login" className="text-white ">Already Login? , Login</NavLink>
                                                
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </>
  )
}

export default Signup