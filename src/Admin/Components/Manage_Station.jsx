import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'

function Manage_Station() {
  // =================fetching Data ==========================================================
  const [data, setData] = useState([]);

  const fetch = async () => {
    const res = await axios.get(`http://localhost:3000/station`);
    setData(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <Aheader />
      <div class="container">
        <h2 className='text-primary'>Manage Station</h2>
        <div className='table-responsive'>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Station Name</th>
                <th>State</th>
                <th>City</th>
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
                      <td>{value.stat_name}</td>
                      <td>{value.state}</td>
                      <td>{value.city}</td>
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

export default Manage_Station