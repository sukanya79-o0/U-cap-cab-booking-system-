import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditCab({ cabs = [], setCabs }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [cabData, setCabData] = useState({
    name: '',
    type: 'Sedan',
    number: '',
    fare: ''
  });

  const inputStyle = { 
    backgroundColor: '#222222', 
    color: '#ffffff', 
    border: '2px solid #555555',
    padding: '10px'
  };

  useEffect(() => {
    // Find the vehicle to edit from your active list state
    const currentCab = cabs.find(c => c.id === parseInt(id) || c.id === id);
    if (currentCab) {
      setCabData(currentCab);
    }
  }, [id, cabs]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCabData({ ...cabData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Update the cab entry in your state array
    const updatedCabs = cabs.map(c => (c.id === cabData.id ? cabData : c));
    if (setCabs) setCabs(updatedCabs);

    alert(`Cab ${cabData.name} updated successfully!`);
    navigate('/admin/cabs'); // Returns to your management table list view
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <div className="card shadow-lg p-4 text-white" 
           style={{ width: '100%', maxWidth: '480px', borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1 text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>Edit Cab Details</h3>
          <p className="text-white-50 small">Modify vehicle registry and base rate parameters</p>
        </div>
        
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Vehicle Name / Model</label>
            <input 
              type="text" 
              name="name"
              className="form-control shadow-none text-white" 
              placeholder="e.g. Toyota Innova"
              value={cabData.name}
              onChange={handleInputChange}
              required 
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Vehicle Category</label>
            <select 
              name="type"
              className="form-select shadow-none text-white"
              value={cabData.type}
              onChange={handleInputChange}
              style={inputStyle}
            >
              <option value="Hatchback">Hatchback</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">License Plate Number</label>
            <input 
              type="text" 
              name="number"
              className="form-control shadow-none text-white" 
              placeholder="e.g. DL-1CA-1234"
              value={cabData.number}
              onChange={handleInputChange}
              required 
              style={inputStyle}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Fare Rate (per Km)</label>
            <div className="input-group">
              <span className="input-group-text border-0 fw-bold text-white" style={{ backgroundColor: '#333333' }}>₹</span>
              <input 
                type="number" 
                name="fare"
                className="form-control shadow-none text-white" 
                placeholder="15"
                value={cabData.fare}
                onChange={handleInputChange}
                required 
                style={inputStyle}
              />
            </div>
          </div>

          <div className="row g-3">
            <div className="col-6">
              <button 
                type="button" 
                onClick={() => navigate('/admin/cabs')} 
                className="btn btn-outline-secondary btn-sm w-100 fw-bold py-2 text-uppercase tracking-wider text-white"
              >
                Cancel
              </button>
            </div>
            <div className="col-6">
              <button 
                type="submit" 
                className="btn btn-sm w-100 fw-bold py-2 text-dark shadow-sm text-uppercase tracking-wider" 
                style={{ backgroundColor: '#ffcc00', border: 'none' }}
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
}