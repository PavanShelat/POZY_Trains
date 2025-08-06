import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'

function Manage_Packages() {
  // =================fetching Data ==========================================================
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/packages`);
    setData(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Aheader />
      <div class="container">
        <h2 className='text-primary'>Manage Packages</h2>
        <div className='table-responsive'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Package Place</th>
                <th>Total Days</th>
                <th>Total Person</th>
                <th>Package Price</th>
                <th>Package Rating</th>
                <th>Package Description</th>
                <th>Package Keywords</th>
                <th>Package Image</th>
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
                      <td>{value.pkg_place}</td>
                      <td>{value.tot_day}</td>
                      <td>{value.tot_person}</td>
                      <td>{value.pkg_price}</td>
                      <td>{value.pkg_rating}</td>
                      <td>{value.pkg_desc}</td>
                      <td>{value.pkg_keywords}</td>
                      <td><img src={value.pkg_img} alt="" width="100px" height="100px" /></td>
                      <td>
                        <button className='btn btn-success'>Edit it</button>
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

export default Manage_Packages