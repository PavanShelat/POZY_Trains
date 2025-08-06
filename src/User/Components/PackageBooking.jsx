import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import dayjs from 'dayjs';

function PackageBooking() {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  // Redirect to login if not logged in
  useEffect(() => {
    if (!localStorage.getItem('userid')) {
      navigate('/Login');
    }
  }, [navigate]);
  // Try to get package id from navigation state or URL params
  const pkgId = location.state?.package?.id || params.id;

  const [pkg, setPkg] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    travelDate: '',
  });
  const [booking, setBooking] = useState(null);
  const [printed, setPrinted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fromStation, setFromStation] = useState('');
  const [toStation, setToStation] = useState('');
  const [trainInfo, setTrainInfo] = useState(null);
  const [allSources, setAllSources] = useState([]);
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (!pkgId) return;
    setLoading(true);
    axios.get(`http://localhost:3000/packages/${pkgId}`)
      .then(res => {
        setPkg(res.data);
        setLoading(false);
      })
      .catch(() => {
        toast.error('Failed to load package details.');
        setLoading(false);
      });
  }, [pkgId]);

  useEffect(() => {
    // Fetch all train sources for dropdown
    axios.get('http://localhost:3000/train').then(res => {
      const sources = [...new Set(res.data.map(t => t.source))];
      setAllSources(sources);
    });
  }, []);

  useEffect(() => {
    if (pkg && pkg.pkg_place) {
      setToStation(pkg.pkg_place);
    }
  }, [pkg]);

  useEffect(() => {
    // Fetch train info when fromStation is selected
    if (fromStation && toStation) {
      axios.get('http://localhost:3000/train').then(res => {
        const found = res.data.find(t => t.source === fromStation && t.destination === toStation);
        setTrainInfo(found || null);
      });
    } else {
      setTrainInfo(null);
    }
  }, [fromStation, toStation]);

  useEffect(() => {
    if (form.travelDate && pkg?.tot_day) {
      // Calculate end date: start date + (tot_day - 1)
      const start = dayjs(form.travelDate);
      const days = parseInt(pkg.tot_day) || 1;
      setEndDate(start.add(days - 1, 'day').format('YYYY-MM-DD'));
    } else {
      setEndDate('');
    }
  }, [form.travelDate, pkg]);

  if (!pkgId) {
    return <div className="text-center mt-5">No package selected. Please go back and select a package.</div>;
  }
  if (loading) {
    return <div className="text-center mt-5">Loading package details...</div>;
  }
  if (!pkg) {
    return <div className="text-center mt-5">Package not found.</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile || !form.travelDate || !fromStation) {
      toast.warning('Please fill all required fields.');
      return;
    }
    const bookingData = {
      ...form,
      packageId: pkg.id,
      pkg_place: pkg.pkg_place,
      pkg_price: pkg.pkg_price,
      pkg_img: pkg.pkg_img,
      tot_day: pkg.tot_day,
      tot_person: pkg.tot_person,
      bookingDate: new Date().toISOString(),
      id: Date.now().toString(),
      fromStation,
      toStation,
      trainNumber: trainInfo?.tnumber || '',
      trainName: trainInfo?.tname || '',
      departureTime: trainInfo?.departureTime || '',
      arrivalTime: trainInfo?.arrivalTime || '',
      endDate,
    };
    try {
      await axios.post('http://localhost:3000/package_booking', bookingData);
      setBooking(bookingData);
      toast.success('Booking successful! Redirecting to ticket...');
      setTimeout(() => {
        navigate('/PackageTicket', { state: bookingData });
      }, 1000);
    } catch (err) {
      toast.error('Failed to book package.');
    }
  };

  const handlePrint = async () => {
    setPrinted(true);
    window.print();
    // Send email after print
    try {
      await axios.post('http://localhost:5000/send-package-receipt', {
        email: form.email,
        name: form.name,
        packageName: pkg.pkg_place,
        travelDate: form.travelDate,
        endDate,
        persons: pkg.tot_person,
        price: pkg.pkg_price,
        bookingId: booking.id,
        days: pkg.tot_day,
        totalPersons: pkg.tot_person,
        fromStation: booking.fromStation,
        toStation: booking.toStation,
        trainName: booking.trainName,
        trainNumber: booking.trainNumber,
        departureTime: booking.departureTime,
        arrivalTime: booking.arrivalTime,
      });
      toast.success('Receipt sent to your email!');
    } catch (err) {
      toast.error('Failed to send receipt email.');
    }
  };

  // For images in public, use process.env.PUBLIC_URL or just "/" as prefix
  const imgSrc = pkg.pkg_img.startsWith('http') ? pkg.pkg_img : `/${pkg.pkg_img.replace(/^\/*/, '')}`;

  return (
    <div>
      {/* <Header /> */}
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="bookingx rounded-3 p-5">
            <h1 className="text-white mb-4">Book Package: {pkg.pkg_place}</h1>
            <div className="row mb-4">
              <div className="col-md-4 text-center">
                <img src={imgSrc} alt={pkg.pkg_place} style={{ maxWidth: 200, borderRadius: 8 }} onError={e => e.target.style.display='none'} />
              </div>
              <div className="col-md-8">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" value={pkg.pkg_place} disabled />
                      <label>Place</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" value={pkg.pkg_price} disabled />
                      <label>Price</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" value={pkg.tot_day} disabled />
                      <label>Days</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating mb-2">
                      <input type="text" className="form-control" value={pkg.tot_person} disabled />
                      <label>Persons</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating mb-2">
                      <textarea className="form-control" value={pkg.pkg_desc} disabled style={{height: 80}} />
                      <label>Description</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {!booking ? (
              <form onSubmit={handleSubmit}>
                <div className="row g-3 text-white">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <select className="form-select bg-transparent" name="fromStation" value={fromStation} onChange={e => setFromStation(e.target.value)} required>
                        <option value="">Select From Station</option>
                        {allSources.map(src => (
                          <option key={src} value={src}>{src}</option>
                        ))}
                      </select>
                      <label>From Station</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" value={toStation} disabled />
                      <label>To Station</label>
                    </div>
                  </div>
                  {trainInfo && (
                    <>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control bg-transparent" value={trainInfo.departureTime} disabled />
                          <label>Departure Time</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control bg-transparent" value={trainInfo.arrivalTime} disabled />
                          <label>Arrival Time</label>
                        </div>
                      </div>
                    </>
                  )}
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" name="name" value={form.name} onChange={handleChange} required />
                      <label>Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control bg-transparent" name="email" value={form.email} onChange={handleChange} required />
                      <label>Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control bg-transparent" name="mobile" value={form.mobile} onChange={handleChange} required />
                      <label>Your Mobile No.</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="date" className="form-control bg-transparent" name="travelDate" value={form.travelDate} onChange={handleChange} required />
                      <label>Travel Date</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-outline-light w-100 py-3" type="submit">Book Now</button>
                  </div>
                </div>
              </form>
            ) : (
              null
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
      <ToastContainer />
    </div>
  );
}

export default PackageBooking; 