import React, { useState } from 'react';

export default function AdminCabs() {
  const [view, setView] = useState('list'); // 'list' | 'add' | 'edit'
  const [selectedCab, setSelectedCab] = useState({ driver: '', model: '', type: '', number: '', price: '' });

  const sampleCabs = [
    { driver: "Pooja Singh", model: "Maruti Swift", type: "Hatchback", number: "MH 12 XY 5678", price: "10" },
    { driver: "Rahul Mehta", model: "Honda City", type: "Sedan", number: "KA 05 CD 9012", price: "15" },
    { driver: "Sneha Kapoor", model: "Toyota Etios", type: "Sedan", number: "RJ 14 QW 3456", price: "12" }
  ];

  return (
    <div className="container my-5">
      {/* Sub-navigation Controls */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold text-dark mb-0">Cab Fleet Management</h3>
        <button 
          className={`btn btn-sm fw-bold ${view === 'list' ? 'btn-dark' : 'btn-outline-dark'}`}
          onClick={() => { setView('list'); }}
        >
          View Fleet List
        </button>
      </div>

      {/* VIEW 1: FLEET CARD CAR LIST */}
      {view === 'list' && (
        <div className="row g-4">
          {sampleCabs.map((cab, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 shadow-sm border-0 p-3 text-center" style={{ borderRadius: '12px' }}>
                <h5 className="fw-bold mb-1">{cab.model}</h5>
                <span className="badge bg-secondary mx-auto mb-3 px-3 py-1.5">{cab.type}</span>
                <div className="text-start bg-light p-3 rounded mb-3 small text-muted">
                  <p className="mb-1"><strong>Driver:</strong> {cab.driver}</p>
                  <p className="mb-1"><strong>Plate ID:</strong> {cab.number}</p>
                  <p className="mb-0"><strong>Base Fare:</strong> ₹{cab.price}/Km</p>
                </div>
                <div className="row g-2">
                  <div className="col-6">
                    <button className="btn btn-warning btn-sm w-100 fw-bold" onClick={() => { setSelectedCab(cab); setView('edit'); }}>Edit</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-danger btn-sm w-100 fw-bold">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <button className="btn btn-outline-secondary py-5 w-100 h-100 border-dashed" onClick={() => setView('add')} style={{ borderStyle: 'dashed', borderRadius: '12px' }}>
              + Add New Vehicle
            </button>
          </div>
        </div>
      )}

      {/* VIEW 2: ADD NEW CAB FORM */}
      {view === 'add' && (
        <div className="card shadow-sm border-0 p-4 mx-auto" style={{ maxWidth: '450px', borderRadius: '12px' }}>
          <h4 className="fw-bold mb-4 text-center">Add Car</h4>
          <form onSubmit={(e) => { e.preventDefault(); setView('list'); }}>
            <div className="mb-3"><input type="text" className="form-control" placeholder="Driver Name" required /></div>
            <div className="mb-3"><input type="text" className="form-control" placeholder="Car Model" required /></div>
            <div className="mb-3"><input type="text" className="form-control" placeholder="Car Type (e.g. Sedan)" required /></div>
            <div className="mb-3"><input type="text" className="form-control" placeholder="Car No." required /></div>
            <div className="mb-3"><input type="number" className="form-control" placeholder="Price per Km" required /></div>
            <div className="mb-4">
              <label className="small text-muted mb-1 d-block">Car Image Upload</label>
              <input type="file" className="form-control form-control-sm" />
            </div>
            <button type="submit" className="btn btn-dark w-100 fw-bold">Submit</button>
          </form>
        </div>
      )}

      {/* VIEW 3: EDIT VEHICLE METADATA FORM */}
      {view === 'edit' && (
        <div className="card shadow-sm border-0 p-4 mx-auto" style={{ maxWidth: '450px', borderRadius: '12px' }}>
          <h4 className="fw-bold mb-4 text-center">Edit Car Data</h4>
          <form onSubmit={(e) => { e.preventDefault(); setView('list'); }}>
            <div className="mb-3"><input type="text" className="form-control" value={selectedCab.driver} onChange={(e) => setSelectedCab({...selectedCab, driver: e.target.value})} required /></div>
            <div className="mb-3"><input type="text" className="form-control" value={selectedCab.model} onChange={(e) => setSelectedCab({...selectedCab, model: e.target.value})} required /></div>
            <div className="mb-3"><input type="text" className="form-control" value={selectedCab.type} onChange={(e) => setSelectedCab({...selectedCab, type: e.target.value})} required /></div>
            <div className="mb-3"><input type="text" className="form-control" value={selectedCab.number} onChange={(e) => setSelectedCab({...selectedCab, number: e.target.value})} required /></div>
            <div className="mb-3"><input type="number" className="form-control" value={selectedCab.price} onChange={(e) => setSelectedCab({...selectedCab, price: e.target.value})} required /></div>
            <div className="mb-4">
              <label className="small text-muted mb-1 d-block">Update Car Image</label>
              <input type="file" className="form-control form-control-sm" />
            </div>
            <button type="submit" className="btn btn-warning text-dark w-100 fw-bold">Update</button>
          </form>
        </div>
      )}
    </div>
  );
}