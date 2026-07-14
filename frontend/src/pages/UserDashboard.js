import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserDashboard({ auth }) {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState('');
  const [searchType, setSearchType] = useState('');
  const [sortOrder, setSortOrder] = useState('lowToHigh');

  const sampleCabs = [
    { name: "Maruti Swift", type: "Hatchback", number: "MH 12 XY 5678", driver: "Pooja Singh", fare: 10, img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&q=80" },
    { name: "Honda City", type: "Sedan", number: "KA 05 CD 9012", driver: "Rahul Mehta", fare: 15, img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400&q=80" },
    { name: "Toyota Etios", type: "Sedan", number: "RJ 14 QW 3456", driver: "Sneha Kapoor", fare: 12, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&q=80" },
    { name: "Hyundai Verna", type: "Sedan", number: "DL 03 CC 7789", driver: "Amit Sharma", fare: 14, img: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&q=80" }
  ];

  const sortedCabs = [...sampleCabs].sort((a, b) => {
    return sortOrder === 'lowToHigh' ? a.fare - b.fare : b.fare - a.fare;
  });

  const filteredCabs = sortedCabs.filter(cab => 
    cab.name.toLowerCase().includes(searchName.toLowerCase()) &&
    cab.type.toLowerCase().includes(searchType.toLowerCase())
  );

  const handleBookRedirect = (cab) => {
    navigate('/book-cab', { state: { selectedCab: cab } });
  };

  return (
    <div className="container my-4">
      {/* Cleaned text string here */}
      <div className="p-3 mb-4 rounded d-flex justify-content-between align-items-center" style={{ backgroundColor: '#111111', border: '1px solid #333' }}>
        <h4 className="fw-bold mb-0 text-white text-uppercase">Available Cabs</h4>
        <div className="text-end">
          <span className="text-muted small">User: </span>
          <span className="badge text-dark fw-bold uppercase px-3 py-2" style={{ backgroundColor: '#ffcc00' }}>{auth?.user || "Active Passenger"}</span>
        </div>
      </div>
      
      <div className="row g-3 mb-4 justify-content-center p-3 rounded mx-auto" style={{ backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        <div className="col-md-4">
          <input 
            type="text" 
            className="form-control text-white" 
            placeholder="Search by car name" 
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input 
            type="text" 
            className="form-control text-white" 
            placeholder="Search by car type" 
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select 
            className="form-select fw-bold border-0 text-dark"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{ backgroundColor: '#ffcc00' }}
          >
            <option value="lowToHigh">Sort Price: Low to High</option>
            <option value="highToLow">Sort Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {filteredCabs.map((cab, idx) => (
          <div className="col-md-3" key={idx}>
            <div className="card h-100 shadow border-0" style={{ borderRadius: '12px', overflow: 'hidden', backgroundColor: '#111111', border: '1px solid #333' }}>
              <img src={cab.img} className="card-img-top" style={{ height: '150px', objectFit: 'cover' }} alt="Cab View" />
              <div className="card-body p-3 text-white">
                <h6 className="fw-bold mb-2" style={{ color: '#ffcc00' }}>{cab.name}</h6>
                <p className="mb-1 small text-light opacity-75"><strong>Driver:</strong> {cab.driver}</p>
                <p className="mb-1 small text-light opacity-75"><strong>Type:</strong> {cab.type}</p>
                <p className="mb-1 small text-light opacity-75"><strong>Number:</strong> {cab.number}</p>
                <p className="mb-3 small text-light opacity-75"><strong>Fare:</strong> <span className="text-success fw-bold">₹{cab.fare}/Km</span></p>
                <button 
                  onClick={() => handleBookRedirect(cab)} 
                  className="btn w-100 fw-bold btn-sm text-dark"
                  style={{ backgroundColor: '#ffcc00', border: 'none' }}
                >
                  Book Cab
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}