import React from 'react';
import { useLocation } from 'react-router-dom';

function TrainTicket() {
  const location = useLocation();
  const booking = location.state;

  if (!booking) {
    return <div className="text-center mt-5">No ticket data available.</div>;
  }

  const handlePrint = () => {
    window.print(); // 🖨️ Triggers print dialog
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 rounded-4 bg-light">
      <img src="img/logo.png" alt="Logo" width={"100px"} />
        <h2 className="text-center mb-4"> Train Ticket</h2>

        {booking.pnr && (
          <div className="row mb-3">
            <div className="col"><strong>PNR:</strong> {booking.pnr}</div>
          </div>
        )}

        <div className="row mb-3">
          <div className="col"><strong>Name:</strong> {booking.name}</div>
          <div className="col"><strong>Mobile:</strong> {booking.mobile}</div>
        </div>

        <div className="row mb-3">
          <div className="col"><strong>Email:</strong> {booking.email}</div>
          <div className="col"><strong>Travel Date:</strong> {booking.travelDate}</div>
        </div>

        <div className="row mb-3">
          <div className="col"><strong>Train:</strong> {booking.trainName} ({booking.trainNumber})</div>
        </div>

        <div className="row mb-3">
          <div className="col"><strong>From:</strong> {booking.source}</div>
          <div className="col"><strong>To:</strong> {booking.destination}</div>
        </div>

        <div className="row mb-3">
          <div className="col"><strong>Departure:</strong> {booking.departureTime}</div>
          <div className="col"><strong>Arrival:</strong> {booking.arrivalTime}</div>
        </div>

        <div className="row mb-3">
          <div className="col"><strong>Passengers:</strong> {booking.passengers}</div>
          <div className="col"><strong>Total Price:</strong> ₹{booking.totalPrice}</div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" onClick={handlePrint}>
             Print Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainTicket;
