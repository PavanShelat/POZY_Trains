import React, { useState } from 'react'
import axios from 'axios'
import Aheader from './Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Add_Train() {
  const redirect = useNavigate();
  const [formvalue, setFormvalue] = useState({
    id: "",
    tname: "",
    tnumber: "",
    source: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    ttype: ""
  });

  const onchangehandle = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  }
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const res = await axios.post(`http://localhost:3000/train`, formvalue);
      setFormvalue({ ...formvalue, tname: "", tnumber: "", source: "", destination: "",  departureTime: "",
        arrivalTime: "", price: "", ttype: "" });
      toast.success('insert Success');
      redirect('/Add_Train');
      return false
    }
  }
  //Validation

  const validation = () => {
    var result = true;
    if (formvalue.tname == "" || formvalue.tname == null) {
      result = false;
      toast.warning('Train Name is required')
      return false;
    }
    if (formvalue.tnumber == "" || formvalue.tnumber == null) {
      result = false;
      toast.warning('Train Number is required')
      return false;
    }
    if (formvalue.source == "" || formvalue.source == null) {
      result = false;
      toast.warning('Source Field is required')
      return false;
    }
    if (formvalue.destination == "" || formvalue.destination == null) {
      result = false;
      toast.warning('Destination Field is required')
      return false;
    }
    if (formvalue.departureTime === "" || formvalue.departureTime === null) {
      toast.warning('Departure Time is required');
      return false;
    }
    if (formvalue.arrivalTime === "" || formvalue.arrivalTime === null) {
      toast.warning('Arrival Time is required');
      return false;
    }
    if (formvalue.price == "" || formvalue.price == null) {
      result = false;
      toast.warning('Price Field is required')
      return false;
    }
    if (formvalue.ttype == "" || formvalue.ttype == null) {
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
                <h1 className="text-white mb-4">Add Train</h1>
                <form>
                  <div className="row g-3 text-white">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="tname" onChange={onchangehandle} value={formvalue.tname} placeholder="Your Train Name" />
                        <label htmlFor="name">Train Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="tnumber" onChange={onchangehandle} value={formvalue.tnumber} placeholder="Your Train Number" />
                        <label htmlFor="name">Train Number</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="source" onChange={onchangehandle} value={formvalue.source} placeholder="Source Station" />
                        <label htmlFor="name">Source Station</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" id="name" name="destination" onChange={onchangehandle} value={formvalue.destination} placeholder="Destination Station" />
                        <label htmlFor="name">Destination Station</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="time"
                          className="form-control bg-transparent"
                          id="departureTime"
                          name="departureTime"
                          onChange={onchangehandle}
                          value={formvalue.departureTime}
                          placeholder="Departure Time"
                        />
                        <label htmlFor="departureTime">Departure Time</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating">
                        <input
                          type="time"
                          className="form-control bg-transparent"
                          id="arrivalTime"
                          name="arrivalTime"
                          onChange={onchangehandle}
                          value={formvalue.arrivalTime}
                          placeholder="Arrival Time"
                        />
                        <label htmlFor="arrivalTime">Arrival Time</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="number" className="form-control bg-transparent" id="name" name="price" onChange={onchangehandle} value={formvalue.price} placeholder="Total Ticket Price" />
                        <label htmlFor="name">Price</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <select class="form-select form-select-lg bg-transparent text-primary" name="ttype" onChange={onchangehandle} value={formvalue.ttype} aria-label="Default select example">
                        <option selected disabled>Select Train Type</option>
                        <option value="Express">Express</option>
                        <option value="Electric">Electric</option>
                        <option value="MEMU">MEMU</option>
                        <option value="DEMU">DEMU</option>
                        <option value="Passenger">Passenger</option>
                        <option value="Local">Local</option>
                      </select>
                    </div>

                    <div className="col-3">
                      <NavLink to="/Add_Train">
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

export default Add_Train