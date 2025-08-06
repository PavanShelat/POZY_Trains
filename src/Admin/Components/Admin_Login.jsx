import React, {useEffect, useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

function Admin_Login() {
    const redirect = useNavigate();
    useEffect(() => {
      if (localStorage.getItem('adminid')) {
        redirect('/Ahome');
      }
    });
  
    const [formvalue, setFormvalue] = useState({
      email: "",
      password: "",
    });
  
  
    const onchangehandle = (e) => {
      setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
      console.log(formvalue);
    }
  
    const validation = () => {
      var result = true;
  
      if (formvalue.email == "" || formvalue.email == null) {
        result = false;
        toast.warning('email field is required')
        return false;
      }
      if (formvalue.password == "" || formvalue.password == null) {
        result = false;
        toast.warning('password field is required')
        return false;
      }
      return result;
    }
  
    const onsubmit = async (e) => {
      e.preventDefault();
      if (validation()) {
  
        const res = await axios.get(`http://localhost:3000/admin?email=${formvalue.email}`);
        console.log(res);
        if (res.data.length > 0) {
          if (res.data[0].password == formvalue.password) {
  
            //session create
            localStorage.setItem('adminid', res.data[0].id);
            localStorage.setItem('admin', res.data[0].name);
  
            toast.success('Login success !');
            setFormvalue({ ...formvalue, email: "", password: "" });
            return redirect('/Ahome');
          }
          else {
            toast.error('Password not match !');
            return false;
          }
        }
        else {
          toast.error('Email not found !');
          return false;
        }
      }
    }
  
  return (
    <div>
                {/* Booking Start */}
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="bookingx p-5">
                            <div className="row g-5 align-items-center">
    
                                <div className="col-md-12">
                                    <h1 className="text-white mb-4">Admin Login</h1>
                                    <form>
                                        <div className="row g-3 text-white">
                                            <div className="col-md-12">
                                                <div className="form-floating">
                                                    <input type="text" className="form-control bg-transparent" id="name" name="email" onChange={onchangehandle} value={formvalue.email} placeholder="Your Admin id" />
                                                    <label htmlFor="name">Admin Id</label>
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
                                                <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Login</button>
                                                </NavLink>
                                                <NavLink to="/Signup" className="text-white mb-3">Haven't Login? , Sign up</NavLink> <br />
                                                <NavLink to="/FPass" className="text-white ">Forgot Password?</NavLink>
    
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Booking Start */}
            </div>
  )
}

export default Admin_Login