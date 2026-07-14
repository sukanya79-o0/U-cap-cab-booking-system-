import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ setAuth }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleSelection, setRoleSelection] = useState('user');

  const inputStyle = { 
    backgroundColor: '#222222', 
    color: '#ffffff', 
    border: '2px solid #555555',
    padding: '10px'
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Please enter a valid username.");
      return;
    }

    setAuth({
      isAuthenticated: true,
      role: roleSelection,
      user: username
    });

    if (roleSelection === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
      <div className="card shadow-lg p-4 text-white" 
           style={{ width: '100%', maxWidth: '420px', borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        <div className="text-center mb-4">
          <h3 className="fw-bold mb-1 text-uppercase tracking-wide" style={{ color: '#ffcc00' }}>UCab Login</h3>
          <p className="text-white-50 small">Access your personalized account dashboard</p>
        </div>
        
        <form onSubmit={handleLoginSubmit}>
          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Username / Name</label>
            <input 
              type="text" 
              className="form-control shadow-none" 
              placeholder="Enter your user name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required 
              style={inputStyle}
            />
          </div>

          <div className="mb-3">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Password</label>
            <input 
              type="password" 
              className="form-control shadow-none" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              style={inputStyle}
            />
          </div>

          <div className="mb-4">
            <label className="form-label small fw-bold text-uppercase tracking-wider text-white">Select Role</label>
            <select 
              className="form-select shadow-none text-white"
              value={roleSelection}
              onChange={(e) => setRoleSelection(e.target.value)}
              style={inputStyle}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <button type="submit" className="btn w-100 fw-bold mb-2 py-2 text-dark shadow-sm" style={{ backgroundColor: '#ffcc00', border: 'none' }}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}