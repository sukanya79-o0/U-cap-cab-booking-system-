import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Account for ${formData.name} successfully created!`);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
      <div className="card shadow-lg p-4 text-white" 
           style={{ width: '100%', maxWidth: '420px', borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1 text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>Create Account</h3>
          <p className="text-white-50 small">Join the UCab network today</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Full Name</label>
            <input 
              type="text" 
              className="form-control shadow-none" 
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required 
              style={{ 
                backgroundColor: '#222222', 
                color: '#ffffff', 
                border: '2px solid #555555',
                padding: '10px'
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Email Address</label>
            <input 
              type="email" 
              className="form-control shadow-none" 
              placeholder="name@example.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required 
              style={{ 
                backgroundColor: '#222222', 
                color: '#ffffff', 
                border: '2px solid #555555',
                padding: '10px'
              }}
            />
          </div>
          <div className="mb-4">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Password</label>
            <input 
              type="password" 
              className="form-control shadow-none" 
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required 
              style={{ 
                backgroundColor: '#222222', 
                color: '#ffffff', 
                border: '2px solid #555555',
                padding: '10px'
              }}
            />
          </div>
          
          <button type="submit" className="btn w-100 fw-bold mb-3 py-2 text-dark shadow-sm" style={{ backgroundColor: '#ffcc00', border: 'none' }}>
            Sign Up
          </button>
          
          <div className="text-center mt-3">
            <span className="text-white-50 small">Already a member? </span>
            <Link to="/login" className="fw-bold small text-decoration-none ms-1" style={{ color: '#ffcc00' }}>Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
}