import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ auth, setAuth }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({ isAuthenticated: false, role: null, user: null });
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark px-4 shadow-sm" style={{ backgroundColor: '#1d1c1c', borderBottom: '2px solid #ffcc00' }}>
      <Link className="navbar-brand fw-bold text-uppercase fs-4" to="/" style={{ color: '#ffcc00' }}>UCab</Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item"><Link className="nav-link text-white-50 me-2" to="/">Home</Link></li>
          
          {!auth || !auth.isAuthenticated ? (
            <>
              <li className="nav-item"><Link className="nav-link text-white-50 me-2" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="btn btn-sm px-3 fw-bold text-dark" to="/register" style={{ backgroundColor: '#ffcc00' }}>Register</Link></li>
            </>
          ) : auth.role === 'admin' ? (
            <>
              <li className="nav-item"><Link className="nav-link text-white me-3" to="/admin">Dashboard</Link></li>
              <li className="nav-item"><Link className="nav-link text-white me-3" to="/admin/users">Manage Users</Link></li>
              {/* Renamed navigation item text here */}
              <li className="nav-item"><Link className="nav-link text-white me-3" to="/admin/cabs">Add Cab</Link></li>
              <li className="nav-item fw-bold me-3 font-monospace" style={{ color: '#ffcc00' }}>({auth.user})</li>
              <li className="nav-item"><button className="btn btn-sm btn-outline-light px-3" onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li className="nav-item"><Link className="nav-link text-white me-3" to="/book-cab">Book Cab</Link></li>
              <li className="nav-item"><Link className="nav-link text-white me-3" to="/my-bookings">My Bookings</Link></li>
              <li className="nav-item fw-bold me-3 font-monospace" style={{ color: '#ffcc00' }}>({auth.user})</li>
              <li className="nav-item"><button className="btn btn-sm btn-outline-light px-3" onClick={handleLogout}>Logout</button></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}