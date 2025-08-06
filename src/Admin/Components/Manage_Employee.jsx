import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'

function Manage_Employee() {
   // =================fetching Data ==========================================================
   const [data, setData] = useState([]);

   const fetch = async () => {
     const res = await axios.get(`http://localhost:3000/employee`);
     setData(res.data);
   }
 
   useEffect(() => {
     fetch();
   }, []);
 
  return (
    <div>
    <Aheader />
    <div class="container">
      <h2 className='text-primary'>Manage Users</h2>
      <div className='table-responsive'>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Password</th>
              <th>Address</th>
              <th>Designation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
            {
              data && data.map((value, index, arr) => {
                return (
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.ename}</td>
                    <td>{value.enumber}</td>
                    <td>{value.e_mail}</td>
                    <td>{value.epass}</td>
                    <td>{value.e_address}</td>
                    <td>{value.edesignation}</td>

                    <td>
                      <button className='btn btn-success mr-3'>Edit it</button>
                      <button className='btn btn-danger'>Delete</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

export default Manage_Employee