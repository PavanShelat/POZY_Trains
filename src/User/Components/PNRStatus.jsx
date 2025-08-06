import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

function PNRStatus() {
  const [pnr, setPnr] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCheckPNR = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);
    if (!pnr) {
      setError('Please enter a valid PNR number.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:3000/booking?pnr=${pnr}`);
      if (res.data && res.data.length > 0) {
        setResult(res.data[0]);
      } else {
        setError('No booking found for this PNR.');
      }
    } catch (err) {
      setError('Error fetching PNR status.');
    }
    setLoading(false);
  };

  const handleCancelBooking = async () => {
    if (!result) return;
    if (!window.confirm('Are you sure you want to cancel this booking?')) return;
    try {
      await axios.delete(`http://localhost:3000/booking/${result.id}`);
      // Send cancellation email
      try {
        await axios.post('http://localhost:5000/send-cancel', {
          email: result.email,
          name: result.name,
          pnr: result.pnr,
          trainName: result.trainName,
          trainNumber: result.trainNumber,
          travelDate: result.travelDate,
          source: result.source,
          destination: result.destination
        });
      } catch (emailErr) {
        setError('Booking cancelled, but failed to send cancellation email.');
        setResult(null);
        return;
      }
      setResult(null);
      setError('Booking cancelled successfully. Cancellation email sent.');
    } catch (err) {
      setError('Failed to cancel booking.');
    }
  };

  return (
    <div>
      <Header />
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="bookingx rounded-3 p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12">
                <h1 className="text-white mb-4">Check PNR Status</h1>
                <form onSubmit={handleCheckPNR} className="mb-4">
                  <div className="row g-3 text-white align-items-end">
                    <div className="col-md-8">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          placeholder="Enter PNR Number"
                          value={pnr}
                          onChange={(e) => setPnr(e.target.value.toUpperCase())}
                          required
                        />
                        <label>PNR Number</label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <button className="btn btn-outline-light w-100 py-3" type="submit" disabled={loading}>
                        {loading ? 'Checking...' : 'Check Status'}
                      </button>
                    </div>
                  </div>
                </form>
                {error && <div className="alert alert-danger">{error}</div>}
                {result && (
                  <div className="card shadow p-4 rounded-4 bg-light mt-4">
                    <h4 className="mb-3">PNR Status</h4>
                    <div className="mb-2"><strong>PNR:</strong> {result.pnr}</div>
                    <div className="mb-2"><strong>Name:</strong> {result.name}</div>
                    <div className="mb-2"><strong>Mobile:</strong> {result.mobile}</div>
                    <div className="mb-2"><strong>Email:</strong> {result.email}</div>
                    <div className="mb-2"><strong>Travel Date:</strong> {result.travelDate}</div>
                    <div className="mb-2"><strong>Train:</strong> {result.trainName} ({result.trainNumber})</div>
                    <div className="mb-2"><strong>From:</strong> {result.source}</div>
                    <div className="mb-2"><strong>To:</strong> {result.destination}</div>
                    <div className="mb-2"><strong>Departure:</strong> {result.departureTime}</div>
                    <div className="mb-2"><strong>Arrival:</strong> {result.arrivalTime}</div>
                    <div className="mb-2"><strong>Passengers:</strong> {result.passengers}</div>
                    <div className="mb-2"><strong>Total Price:</strong> ₹{result.totalPrice}</div>
                    <button className="btn btn-danger mt-3" onClick={handleCancelBooking}>Cancel Booking</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PNRStatus; 