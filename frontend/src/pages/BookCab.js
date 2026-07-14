import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BookCab({ auth }) {
  const location = useLocation();
  const navigate = useNavigate();
  const preSelectedCab = location.state?.selectedCab || null;

  const [liveCoords, setLiveCoords] = useState('');
  const [fetching, setFetching] = useState(false);

  const inputStyle = { 
    backgroundColor: '#222222', 
    color: '#ffffff', 
    border: '2px solid #555555',
    padding: '8px'
  };

  const handleFetchLocation = () => {
    setFetching(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLiveCoords(`${position.coords.latitude.toFixed(4)}° N, ${position.coords.longitude.toFixed(4)}° E`);
          setFetching(false);
        },
        () => {
          setLiveCoords("12.9716° N, 77.5946° E (Default Coordinates)");
          setFetching(false);
        }
      );
    } else {
      setLiveCoords("Geolocation unsupported by browser.");
      setFetching(false);
    }
  };

  const handleCalculateFare = () => {
    const rate = preSelectedCab ? preSelectedCab.fare : 12;
    const estimatedDistance = 15; 
    alert(`Estimated Journey Fare: ₹${estimatedDistance * rate} (Based on ~${estimatedDistance} km route profile)`);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Booking Confirmed successfully!');
    navigate('/my-bookings');
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 text-white" style={{ width: '100%', maxWidth: '550px', borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        <h3 className="h4 fw-bold text-center mb-1 text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>Book Your Ride</h3>
        <p className="text-center small text-white-50 mb-4">Passenger: {auth?.user || "Active Passenger"}</p>
        
        {preSelectedCab && (
          <div className="alert bg-dark text-white border border-secondary p-2 small mb-4 d-flex justify-content-between align-items-center">
            <span>Selected Vehicle: <strong>{preSelectedCab.name}</strong> ({preSelectedCab.type})</span>
            <span className="fw-bold" style={{ color: '#ffcc00' }}>₹{preSelectedCab.fare}/Km</span>
          </div>
        )}

        {/* Form elements tied directly to native browser validator */}
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4 p-3 rounded bg-dark border border-secondary">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white d-block mb-2">Live Current Coordinates</label>
            <div className="input-group">
              <input 
                type="text" 
                className="form-control text-white form-control-sm shadow-none" 
                placeholder="Click to acquire coordinates" 
                value={liveCoords} 
                readOnly 
                required
                style={inputStyle}
              />
              <button 
                type="button" 
                className="btn btn-sm fw-bold text-dark" 
                style={{ backgroundColor: '#ffcc00' }} 
                onClick={handleFetchLocation}
                disabled={fetching}
              >
                {fetching ? "Locating..." : "Get Live GPS"}
              </button>
            </div>
          </div>

          <h6 className="fw-bold mb-2 small text-uppercase" style={{ color: '#ffcc00' }}>Pickup Location</h6>
          <div className="row g-2 mb-2">
            <div className="col-6">
              <select className="form-select form-select-sm text-white shadow-none" style={inputStyle} required>
                <option value="">Select State</option>
                <option>Delhi</option>
                <option>Maharashtra</option>
              </select>
            </div>
            <div className="col-6">
              <select className="form-select form-select-sm text-white shadow-none" style={inputStyle} required>
                <option value="">Select City</option>
                <option>New Delhi</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>
          {/* New Pickup Street Address Input */}
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control form-control-sm text-white shadow-none" 
              placeholder="Enter full pickup street address, landmark or house number" 
              style={inputStyle} 
              required 
            />
          </div>

          <h6 className="fw-bold mb-2 small text-uppercase" style={{ color: '#ffcc00' }}>Drop Location</h6>
          <div className="row g-2 mb-2">
            <div className="col-6">
              <select className="form-select form-select-sm text-white shadow-none" style={inputStyle} required>
                <option value="">Select State</option>
                <option>Karnataka</option>
                <option>Goa</option>
              </select>
            </div>
            <div className="col-6">
              <select className="form-select form-select-sm text-white shadow-none" style={inputStyle} required>
                <option value="">Select City</option>
                <option>Bengaluru</option>
                <option>Panaji</option>
              </select>
            </div>
          </div>
          {/* New Drop Street Address Input */}
          <div className="mb-3">
            <input 
              type="text" 
              className="form-control form-control-sm text-white shadow-none" 
              placeholder="Enter full destination street address, landmark or company name" 
              style={inputStyle} 
              required 
            />
          </div>

          <div className="row g-2 mb-3">
            <div className="col-6">
              <label className="small text-white-50 mb-1">Pickup Date</label>
              <input type="date" className="form-control form-control-sm text-white shadow-none" style={inputStyle} required />
            </div>
            <div className="col-6">
              <label className="small text-white-50 mb-1">Pickup Time</label>
              <input type="time" className="form-control form-control-sm text-white shadow-none" style={inputStyle} required />
            </div>
          </div>

          <div className="row g-2 mb-4">
            <div className="col-6">
              <label className="small text-white-50 mb-1">Drop Date</label>
              <input type="date" className="form-control form-control-sm text-white shadow-none" style={inputStyle} required />
            </div>
            <div className="col-6">
              <label className="small text-white-50 mb-1">Drop Time</label>
              <input type="time" className="form-control form-control-sm text-white shadow-none" style={inputStyle} required />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-6">
              {/* Calculate Fare can run independently without forcing standard form checking */}
              <button 
                type="button" 
                onClick={handleCalculateFare} 
                className="btn btn-outline-warning btn-sm w-100 fw-bold py-2 shadow-sm"
              >
                Calculate Fare
              </button>
            </div>
            <div className="col-6">
              {/* Type submit triggers native 'required' alerts for empty drops/pickups */}
              <button 
                type="submit" 
                className="btn text-dark btn-sm w-100 fw-bold py-2 shadow-sm" 
                style={{ backgroundColor: '#ffcc00', border: 'none' }}
              >
                Book Ride
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}