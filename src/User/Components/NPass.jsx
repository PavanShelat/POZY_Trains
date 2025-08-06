import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';


function NPass() {
    const redirect = useNavigate();
     useEffect(() => {
        if (localStorage.getItem('userid')) {
          
        }
        else{
            redirect('/')
        }
      },[]);
    const [formvalue, setFormvalue] = useState({
            npass: "",
            ncpass: "",
        });

    const [user, setUser] = useState(null);
    useEffect(() => {
        // Simulating a session check
        const loggedInUser = JSON.parse(localStorage.getItem("userid"));   
        setUser(loggedInUser);
        console.log(loggedInUser)
        }, []);
              
    const onchangehandle = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }

    const onsubmit = async (e) => {
        e.preventDefault();
    
        try {
          // Fetch the user's data from the server
          const response = await axios.get(`http://localhost:3000/user/${localStorage.getItem('userid')}`);
          const fetchedUser = response.data;
          console.log(fetchedUser)
          console.log(user)
          if (formvalue.npass !== formvalue.ncpass) {
            toast.warning("Password doesn't match!");
            return;
          }
          
          // Update the password  
          await axios.patch(`http://localhost:3000/user/${user}`, {
            password: formvalue.npass,
          });
          setFormvalue({  npass:"",ncpass:"" })
          toast.success("Password updated successfully!");
          localStorage.removeItem('userid')
          redirect('/Login')
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
                                                <input type="text" className="form-control bg-transparent" id="npass" name="npass" onChange={onchangehandle} value={formvalue.npass} placeholder="Your User id" />
                                                <label htmlFor="name">New Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control bg-transparent" id="ncpass" name="ncpass" onChange={onchangehandle} value={formvalue.ncpass} placeholder="Password" />
                                                <label htmlFor="name">Confirm Password</label>
                                            </div>
                                        </div>

                                        <div className="col-3">                                     
                                            <button className="btn btn-outline-light w-100 py-3 mb-3" type="submit" onClick={onsubmit}>Change Password</button>
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

export default NPass