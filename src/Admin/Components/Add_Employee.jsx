import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Aheader from './Aheader'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Add_Employee() {
  const redirect = useNavigate();
  const [formvalue, setFormvalue] = useState({
    id: "",
    ename: "",
    enumber: "",
    e_mail: "",
    e_address: "",
    epass: "",
    edesignation: ""
  });

  // Function to generate a random 8-character password
  const generateEmployeePassword = () => {
    const consonants = "BCDFGHJKLMNPQRSTVWXYZ";
    const vowels = "AEIOU";
    const digits = "0123456789";
    let password = "";

    for (let i = 0; i < 8; i++) {
      if (i % 3 === 0) {
        password += consonants[Math.floor(Math.random() * consonants.length)];
      } else if (i % 3 === 1) {
        password += vowels[Math.floor(Math.random() * vowels.length)];
      } else {
        password += digits[Math.floor(Math.random() * digits.length)];
      }
    }
    return password;
  };

  // Generate password when component loads
  useEffect(() => {
    setFormvalue((prevState) => ({ ...prevState, epass: generateEmployeePassword() }));
  }, []);

  // Handle input changes
  const onchangehandle = (e) => {
    setFormvalue({ ...formvalue, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onsubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      await axios.post(`http://localhost:3000/employee`, formvalue);
      setFormvalue({
        id: "",
        ename: "",
        enumber: "",
        e_mail: "",
        e_address: "",
        epass: generateEmployeePassword(), // Generate new password on submission
        edesignation: ""
      });
      toast.success('Insert Success');
      redirect('/Add_Employee');
    }
  };

  // Validation function
  const validation = () => {
    if (!formvalue.ename) return toast.warning('Employee Name is required');
    if (!formvalue.enumber) return toast.warning('Employee Number is required');
    if (!formvalue.e_mail) return toast.warning('E-mail Field is required');
    if (!formvalue.e_address) return toast.warning('Address Field is required');
    if (!formvalue.epass) return toast.warning('Password is required');
    if (!formvalue.edesignation) return toast.warning('Designation is required');
    return true;
  };

  return (
    <div>
      <Aheader />
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="bookingx p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12">
                <h1 className="text-white mb-4">Add Employee</h1>
                <form>
                  <div className="row g-3 text-white">
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" name="ename" onChange={onchangehandle} value={formvalue.ename} placeholder="Employee Name" />
                        <label>Employee Name</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" name="enumber" onChange={onchangehandle} value={formvalue.enumber} placeholder="Mobile Number" />
                        <label>Mobile Number</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" name="e_mail" onChange={onchangehandle} value={formvalue.e_mail} placeholder="E-mail" />
                        <label>E-mail</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control bg-transparent" name="e_address" onChange={onchangehandle} value={formvalue.e_address} style={{ height: 100 }}></textarea>
                        <label>Address</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" name="epass" value={formvalue.epass} />
                        <label>Password</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <select className="form-select form-select-lg bg-transparent text-primary" name="edesignation" onChange={onchangehandle} value={formvalue.edesignation}>
                        <option disabled>Select Designation</option>
                        <option value="Web Developer">Web Developer</option>
                        <option value="Customer Service Executive">Customer Service Executive</option>
                        <option value="Digital Marketing Manager">Digital Marketing Manager</option>
                        <option value="Catering Operations Manager">Catering Operations Manager</option>
                        <option value="Tourism Development Officer">Tourism Development Officer</option>
                        <option value="Data Analyst">Data Analyst</option>
                        <option value="Finance Officer">Finance Officer</option>
                      </select>
                    </div>
                    <div className="col-3">
                      <NavLink to="/Add_Employee">
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

export default Add_Employee;
