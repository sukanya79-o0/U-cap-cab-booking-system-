import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function MyBookings() {
  const navigate = useNavigate();

  // 1. Initializing dynamic sample data inside the component state
  const [bookings, setBookings] = useState([
    {
      id: 8492,
      pickupCity: "New Delhi",
      pickupAddress: "Connaught Place, Block E",
      dropCity: "Mumbai",
      dropAddress: "Bandra West, Linking Rd",
      pickupDate: "2026-07-14",
      pickupTime: "10:30 AM",
      status: "On the Way" // Starting state
    },
    {
      id: 3104,
      pickupCity: "Bengaluru",
      pickupAddress: "Indiranagar, 100 Feet Rd",
      dropCity: "Panaji",
      dropAddress: "Fontainhas, Latin Quarter",
      pickupDate: "2026-07-12",
      pickupTime: "04:15 PM",
      status: "Completed" // Already finished trip
    }
  ]);

  // 2. Simulation Engine: Upgrades live statuses automatically over time
  useEffect(() => {
    // Timer 1: Turn any "On the Way" booking into "Ongoing" after 6 seconds
    const ongoingTimer = setTimeout(() => {
      setBookings(prev => 
        prev.map(b => b.status === "On the Way" ? { ...b, status: "Ongoing" } : b)
      );
    }, 6000);

    // Timer 2: Turn any "Ongoing" booking into "Completed" after 14 seconds
    const completedTimer = setTimeout(() => {
      setBookings(prev => 
        prev.map(b => b.status === "Ongoing" ? { ...b, status: "Completed" } : b)
      );
    }, 14000);

    // Clean up timers if the user leaves the page
    return () => {
      clearTimeout(ongoingTimer);
      clearTimeout(completedTimer);
    };
  }, []);

  return (
    <div className="container my-5">
      {/* Header Panel */}
      <div className="p-3 mb-4 rounded d-flex justify-content-between align-items-center" style={{ backgroundColor: '#111111', border: '1px solid #333' }}>
        <h4 className="fw-bold mb-0 text-white text-uppercase">My Bookings</h4>
        <button 
          onClick={() => navigate('/book-cab')}
          className="btn btn-sm fw-bold text-dark"
          style={{ backgroundColor: '#ffcc00' }}
        >
          + Book New Ride
        </button>
      </div>

      {bookings.length === 0 ? (
        <div className="card shadow-lg p-5 text-center text-white" style={{ borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
          <h5 className="fw-bold text-uppercase mb-2" style={{ color: '#ffcc00' }}>No Bookings Found</h5>
          <p className="text-white-50 small mb-4">You haven't scheduled or requested any cab rides yet.</p>
        </div>
      ) : (
        <div className="card shadow-lg p-4 text-white" style={{ borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
          <div className="table-responsive">
            <table className="table table-dark table-striped table-hover align-middle mb-0">
              <thead>
                <tr style={{ color: '#ffcc00' }}>
                  <th className="text-uppercase small tracking-wider py-3">Booking ID</th>
                  <th className="text-uppercase small tracking-wider py-3">Pickup Address</th>
                  <th className="text-uppercase small tracking-wider py-3">Drop Address</th>
                  <th className="text-uppercase small tracking-wider py-3">Schedule Date/Time</th>
                  <th className="text-uppercase small tracking-wider py-3">Live Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="font-monospace text-warning fw-bold">#{booking.id}</td>
                    <td>
                      <div className="fw-bold">{booking.pickupCity}</div>
                      <small className="text-white-50">{booking.pickupAddress}</small>
                    </td>
                    <td>
                      <div className="fw-bold">{booking.dropCity}</div>
                      <small className="text-white-50">{booking.dropAddress}</small>
                    </td>
                    <td>
                      <div>{booking.pickupDate}</div>
                      <small className="text-white-50">{booking.pickupTime}</small>
                    </td>
                    <td>
                      <span 
                        className={`badge px-3 py-2 fw-bold text-uppercase ${
                          booking.status === 'Completed' ? 'bg-success text-white' : 
                          booking.status === 'Ongoing' ? 'bg-info text-dark' : 
                          'bg-light text-dark border border-warning' // Styling for 'On the Way'
                        }`}
                        style={{ minWidth: '110px', display: 'inline-block', textAlign: 'center' }}
                      >
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}