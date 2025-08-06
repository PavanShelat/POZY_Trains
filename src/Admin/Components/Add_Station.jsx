import React, { useState } from 'react'
import axios from 'axios'
import Aheader from './Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Add_Station() {
  const redirect = useNavigate();
  const [formvalue, setFormvalue] = useState({
      id: "",
      stat_name: "",
      state: "",
      city: "",
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
          const res = await axios.post(`http://localhost:3000/station`, formvalue);
          setFormvalue({ ...formvalue, stat_name: "", state: "", city: ""});
          toast.success('insert Success');
          redirect('/Add_Station');
          return false
      }
  }

  //Validation

  const validation = () => {
      var result = true;
      if (formvalue.stat_name == "" || formvalue.stat_name == null) {
          result = false;
          toast.warning('Station Name is required')
          return false;
      }
      if (formvalue.state == "" || formvalue.state == null) {
          result = false;
          toast.warning('State is required')
          return false;
      }
      if (formvalue.city == "" || formvalue.city == null) {
          result = false;
          toast.warning('City is required')
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
                <h1 className="text-white mb-4">Add Station</h1>
                <form>
                  <div className="row g-3 text-white">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="stat_name"  onChange={onchangehandle} value={formvalue.stat_name}  placeholder="Your Train Name" />
                        <label htmlFor="name">Station Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="state"  onChange={onchangehandle} value={formvalue.state}  placeholder="Source Station" />
                        <label htmlFor="name">State</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="city" onChange={onchangehandle} value={formvalue.city}  placeholder="Destination Station" />
                        <label htmlFor="name">City</label>
                      </div>
                    </div>
                    <div className="col-3">
                      <NavLink to="/Add_Station">
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

export default Add_Station