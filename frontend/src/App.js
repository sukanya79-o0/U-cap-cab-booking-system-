import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import BookCab from './pages/BookCab';
import MyBookings from './pages/MyBookings';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsers from './pages/AdminUsers';
import AdminCabs from './pages/AdminCabs';

export default function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: null,
    user: null
  });

  return (
    <Router>
      <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: 'rgb(239, 237, 207)', color: '#f8fafc' }}>
        <Navbar auth={auth} setAuth={setAuth} />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Passenger Client Routes - Passing auth state down */}
            <Route path="/dashboard" element={auth.isAuthenticated && auth.role === 'user' ? <UserDashboard auth={auth} /> : <Navigate to="/login" />} />
            <Route path="/book-cab" element={auth.isAuthenticated && auth.role === 'user' ? <BookCab auth={auth} /> : <Navigate to="/login" />} />
            <Route path="/my-bookings" element={auth.isAuthenticated && auth.role === 'user' ? <MyBookings auth={auth} /> : <Navigate to="/login" />} />

            {/* Protected Controller/Admin Interfaces */}
            <Route path="/admin" element={auth.isAuthenticated && auth.role === 'admin' ? <AdminDashboard auth={auth} /> : <Navigate to="/login" />} />
            <Route path="/admin/users" element={auth.isAuthenticated && auth.role === 'admin' ? <AdminUsers auth={auth} /> : <Navigate to="/login" />} />
            <Route path="/admin/cabs" element={auth.isAuthenticated && auth.role === 'admin' ? <AdminCabs auth={auth} /> : <Navigate to="/login" />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}