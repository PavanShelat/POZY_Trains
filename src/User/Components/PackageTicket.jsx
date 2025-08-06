import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function PackageTicket() {
  const location = useLocation();
  const booking = location.state;
  const [emailSent, setEmailSent] = useState(false);
  const [printing, setPrinting] = useState(false);

  if (!booking) {
    return <div className="text-center mt-5">No ticket data available.</div>;
  }

  const handlePrint = async () => {
    setPrinting(true);
    try {
      if (!emailSent) {
        await axios.post('http://localhost:5000/send-package-receipt', {
          email: booking.email,
          name: booking.name,
          packageName: booking.pkg_place,
          travelDate: booking.travelDate,
          endDate: booking.endDate,
          persons: booking.tot_person,
          price: booking.pkg_price,
          bookingId: booking.id,
          days: booking.tot_day,
          totalPersons: booking.tot_person,
          fromStation: booking.fromStation,
          toStation: booking.toStation,
          trainName: booking.trainName,
          trainNumber: booking.trainNumber,
          departureTime: booking.departureTime,
          arrivalTime: booking.arrivalTime,
        });
        toast.success('Receipt sent to your email!');
        setEmailSent(true);
      }
      window.print();
    } catch (err) {
      toast.error('Failed to send receipt email.');
    } finally {
      setPrinting(false);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 rounded-4 bg-light">
        <img src="img/logo.png" alt="Logo" width={"100px"} />
        <h2 className="text-center mb-4">Package Ticket Receipt</h2>
        <div className="row mb-3">
          <div className="col"><strong>Booking ID:</strong> {booking.id}</div>
        </div>
        <div className="row mb-3">
          <div className="col"><strong>Name:</strong> {booking.name}</div>
          <div className="col"><strong>Mobile:</strong> {booking.mobile}</div>
        </div>
        <div className="row mb-3">
          <div className="col"><strong>Email:</strong> {booking.email}</div>
          <div className="col"><strong>Travel Date:</strong> {booking.travelDate}</div>
        </div>
        {booking.endDate && (
          <div className="row mb-3">
            <div className="col"><strong>End Date:</strong> {booking.endDate}</div>
          </div>
        )}
        <div className="row mb-3">
          <div className="col"><strong>Package:</strong> {booking.pkg_place}</div>
          <div className="col"><strong>Price:</strong> {booking.pkg_price}</div>
        </div>
        <div className="row mb-3">
          <div className="col"><strong>Days:</strong> {booking.tot_day}</div>
          <div className="col"><strong>Persons:</strong> {booking.tot_person}</div>
        </div>
        <div className="row mb-3">
          <div className="col"><strong>From Station:</strong> {booking.fromStation}</div>
          <div className="col"><strong>To Station:</strong> {booking.toStation}</div>
        </div>
        {booking.trainName && (
          <>
            <div className="row mb-3">
              <div className="col"><strong>Train:</strong> {booking.trainName} ({booking.trainNumber})</div>
            </div>
            <div className="row mb-3">
              <div className="col"><strong>Departure:</strong> {booking.departureTime}</div>
              <div className="col"><strong>Arrival:</strong> {booking.arrivalTime}</div>
            </div>
          </>
        )}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handlePrint} disabled={printing || emailSent}>
            {emailSent ? 'Email Sent! Print Again' : printing ? 'Sending Email...' : 'Print Receipt'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PackageTicket; 