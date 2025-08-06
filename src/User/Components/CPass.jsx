import React, { useEffect, useState } from 'react'
import { NavLink, redirect, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';

function CPass() {

    const redirect = useNavigate();
    useEffect(()=>{
        if(localStorage.getItem('userid'))
        {

        }
        else
        {
            redirect('/');
        }
    });
    
    const [formvalue, setFormvalue] = useState({
        pass: "",
        npass: "",
    });
    const [user, setUser] = useState(null);
    useEffect(() => {
        // Simulating a session check
        const loggedInUser = JSON.parse(localStorage.getItem("userid"));
        if (loggedInUser) {
          setUser(loggedInUser);
          console.log(loggedInUser)
        } else {
          toast.warning("You need to log in to change your password.");
        }
      }, []);
      
    
    const onchangehandle = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const onsubmit = async (e) => {
        e.preventDefault();
    
        if (!user) {
          toast.warning("No user is logged in.");
          return;
        }
    
        try {
          // Fetch the user's data from the server
          const response = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
          const fetchedUser = response.data;
          console.log(fetchedUser)
          console.log(user)
          if (fetchedUser.password !== formvalue.pass) {
            toast.warning("Current password is incorrect!");
            return;
          }
          
          // Update the password  
          await axios.patch(`http://localhost:3000/user/${user}`, {
            password: formvalue.npass,
          });
          setFormvalue({  pass:"",npass:"" })
          toast.success("Password updated successfully!");
        } catch (error) {
          toast.error("An error occurred while updating the password.");
          console.error(error);
        }
      };
  return (
    <div>
                    <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container">
                            <div className="bookingx p-5">
                                <div className="row g-5 align-items-center">
        
                                    <div className="col-md-12">
                                        <h1 className="text-white mb-4">Change Password</h1>
                                        <form>
                                            <div className="row g-3 text-white">
                                                <div className="col-md-12">
                                                    <div className="form-floating">
                                                        <input type="text" className="form-control bg-transparent" id="pass" name="pass" onChange={onchangehandle} value={formvalue.pass} placeholder="Your User id" />
                                                        <label htmlFor="name">Old Password</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-floating">
                                                        <input type="phone" className="form-control bg-transparent" id="npass" name="npass" onChange={onchangehandle} value={formvalue.npass} placeholder="Password" />
                                                        <label htmlFor="name">New Password</label>
                                                    </div>
                                                </div>
        
                                                <div className="col-3">
                                                    <NavLink to="/">
                                                    <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Change Password</button>
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

export default CPass