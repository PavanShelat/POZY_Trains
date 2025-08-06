import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import Header from './Header';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

function Booking() {
  const location = useLocation();
  const train = location.state;
  const navigate = useNavigate();

  // Redirect to login if not logged in
  useEffect(() => {
    if (!localStorage.getItem('userid')) {
      navigate('/Login');
    }
  }, [navigate]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [totalPrice, setTotalPrice] = useState(train?.price || 0);

  // User input states
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (train && passengers) {
      const price = parseFloat(train.price) * passengers;
      setTotalPrice(price);
    }
  }, [passengers, train]);

  const generatePNR = () => {
    // Simple PNR generator: 10-character alphanumeric
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let pnr = '';
    for (let i = 0; i < 10; i++) {
      pnr += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return pnr;
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !selectedDate || passengers < 1) {
      toast.error('Please fill all fields correctly.');
      return;
    }

    const pnr = generatePNR();
    const bookingData = {
      name,
      mobile,
      email,
      passengers,
      travelDate: selectedDate.toISOString().split('T')[0],
      totalPrice,
      trainNumber: train.tnumber,
      trainName: train.tname,
      source: train.source,
      destination: train.destination,
      departureTime: train.departureTime,
      arrivalTime: train.arrivalTime,
      ticketPrice: train.price,
      pnr
    };

    try {
      await axios.post('http://localhost:3000/booking', bookingData);
      // Send PNR email
      await axios.post('http://localhost:5000/send-pnr', {
        email,
        pnr,
        name,
        trainName: train.tname,
        trainNumber: train.tnumber,
        travelDate: selectedDate.toISOString().split('T')[0],
        source: train.source,
        destination: train.destination
      });
      toast.success('Ticket booked successfully! PNR sent to your email.');
      navigate('/TrainTicket', { state: bookingData });
    } catch (err) {
      console.error('Error saving booking:', err);
      toast.error('Failed to book ticket.');
    }
  };

  if (!train) {
    return (
      <div className="text-center mt-5">
        <h3>Train data not available. Please search again.</h3>
      </div>
    );
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container ">
          <div className="bookingx rounded-3 p-5">
            <div className="row g-5 align-items-center">
              <div className="col-md-12">
                <h1 className="text-white mb-4">Book Train Ticket</h1>
                <form onSubmit={handleBooking}>
                  <div className="row g-3 text-white">

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          placeholder="Your Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                        <label>Your Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent"
                          placeholder="Your Mobile No."
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        <label>Your Mobile No.</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control bg-transparent"
                          placeholder="Your Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <label>Your Email</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control bg-transparent text-white"
                          value={passengers}
                          min="1"
                          onChange={(e) => setPassengers(parseInt(e.target.value))}
                          required
                        />
                        <label>Number of Passengers</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.source} disabled />
                        <label>From</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.destination} disabled />
                        <label>To</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.tnumber} disabled />
                        <label>Train Number</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.tname} disabled />
                        <label>Train Name</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.departureTime} disabled />
                        <label>Departure Time</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={train?.arrivalTime} disabled />
                        <label>Arrival Time</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control bg-transparent" value={`₹${train?.price}`} disabled />
                        <label>Ticket Price</label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control bg-transparent text-white"
                          value={`₹${totalPrice}`}
                          readOnly
                        />
                        <label>Total Price</label>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-floating">
                        <DatePicker
                          selected={selectedDate}
                          onChange={(date) => setSelectedDate(date)}
                          dateFormat="yyyy-MM-dd"
                          className="form-control bg-transparent datetimepicker-input text-white"
                          placeholderText="Select Travel Date"
                          id="datetime"
                          required
                        />
                        
                      </div>
                    </div>

                    <div className="col-12">
                      <button className="btn btn-outline-light w-100 py-3" type="submit">
                        Book Now
                      </button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;
