import React, { useEffect, useState } from 'react'
import Aheader from './Aheader'
import axios from 'axios'

function Manage_Train() {
 // =================fetching Data ==========================================================
 const [data, setData] = useState([]);

 const fetch = async () => {
   const res = await axios.get(`http://localhost:3000/train`);
   setData(res.data);
 }

 useEffect(() => {
   fetch();
 }, []);

 return (
   <div>
     <Aheader />
     <div class="container">
       <h2 className='text-primary'>Manage Train</h2>
       <div className='table-responsive'>
         <table class="table table-striped">
           <thead>
             <tr>
               <th>ID</th>
               <th>Train Name</th>
               <th>Train Number</th>
               <th>Source</th>
               <th>Destination</th>
               <th>Departure Time</th>
               <th>Arrival Time</th>
               <th>Price</th>
               <th>Train Type</th>
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
                     <td>{value.tname}</td>
                     <td>{value.tnumber}</td>
                     <td>{value.source}</td>
                     <td>{value.destination}</td>
                     <td>{value.departureTime}</td>
                     <td>{value.arrivalTime}</td>
                     <td>{value.price}</td>
                     <td>{value.ttype}</td>
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

export default Manage_Train