import React, { useEffect, useState } from 'react';
import Header from './Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function TrainSearch() {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const from = params.get('from');
    const to = params.get('to');
    const [trains, setTrains] = useState([]);

    useEffect(() => {
        const fetchTrains = async () => {
            try {
                const res = await axios.get('http://localhost:3000/train');
                const allTrains = res.data;

                const filtered = allTrains.filter(
                    (train) =>
                        train.source.toLowerCase() === from?.toLowerCase() &&
                        train.destination.toLowerCase() === to?.toLowerCase()
                );

                setTrains(filtered);
            } catch (err) {
                console.error('Error fetching train data:', err);
            }
        };

        fetchTrains();
    }, [from, to]);

    const getTimeDifference = (start, end) => {
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);

        let startTotal = startHour * 60 + startMinute;
        let endTotal = endHour * 60 + endMinute;

        if (endTotal < startTotal) {
            endTotal += 24 * 60;
        }

        const diff = endTotal - startTotal;
        const hours = Math.floor(diff / 60);
        const minutes = diff % 60;

        return `${hours}hr ${minutes}min`;
    };

    return (
        <div>
            <Header />
            <div className="container mt-4">
                <h4 className="mb-4 text-center">
                    Showing Trains from <span className="text-success">{from}</span> to <span className="text-danger">{to}</span>
                </h4>

                {trains.length > 0 ? (
                    trains.map((train) => (
                        <div className="train-card p-4 border rounded shadow-sm bg-light mb-3" key={train.id}>
                            <h5 className="text-primary">{train.tnumber} - {train.tname}</h5>
                            <p className="mb-2">
                                <strong>Type:</strong> {train.ttype} &nbsp; | &nbsp;
                                <strong>Price:</strong> ₹{train.price}
                            </p>

                            <div className="d-flex justify-content-between align-items-center flex-wrap text-center">
                                <div>
                                    <h6>{train.source}</h6>
                                    <p className="mb-0">{train.departureTime}</p>
                                    <small>Today</small>
                                </div>

                                <div>
                                    <p className="mb-1 text-secondary">{getTimeDifference(train.departureTime, train.arrivalTime)}</p>
                                </div>

                                <div>
                                    <h6>{train.destination}</h6>
                                    <p className="mb-0">{train.arrivalTime}</p>
                                    <small>Today</small>
                                </div>

                                <div>
                                    <Link
                                        to="/Booking"
                                        state={train}
                                        className="btn btn-primary mt-2 mt-md-0"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-muted">No trains found for this route.</p>
                )}
            </div>
        </div>
    );
}

export default TrainSearch;
