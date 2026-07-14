import React from 'react';

export default function AdminDashboard({ auth, users = [], cabs = [], bookings = [] }) {
  // Dynamically count the items based on your application state arrays
  const totalUsers = users.length || 0;
  const totalCabs = cabs.length || 0;
  const totalBookings = bookings.length || 0;

  // Find the highest number to scale the visual chart bars proportionally
  const maxVal = Math.max(totalUsers, totalCabs, totalBookings, 1);

  return (
    <div className="container my-5">
      {/* Header Panel */}
      <div className="p-3 mb-4 rounded d-flex justify-content-between align-items-center" style={{ backgroundColor: '#111111', border: '1px solid #333' }}>
        <h4 className="fw-bold mb-0 text-white text-uppercase">Admin Dashboard</h4>
        <div className="text-end">
          <span className="text-muted small">Operator: </span>
          <span className="badge text-dark fw-bold text-uppercase px-3 py-2" style={{ backgroundColor: '#ffcc00' }}>{auth?.user || "System Root"}</span>
        </div>
      </div>

      {/* Main Theme Card Container */}
      <div className="card shadow-lg p-4 text-white" style={{ borderRadius: '16px', backgroundColor: '#111111', border: '2px solid #ffcc00' }}>
        
        {/* Dynamic Metric Cards Row */}
        <div className="row g-4 mb-5 text-center">
          {/* DYNAMIC USERS CARD */}
          <div className="col-md-4">
            <div className="p-4 rounded-3 text-dark fw-bold" style={{ backgroundColor: '#ffcc00' }}>
              <div className="text-uppercase small tracking-wider mb-2">Users</div>
              <h2 className="display-5 fw-black mb-0">{totalUsers}</h2>
            </div>
          </div>

          {/* DYNAMIC CABS CARD */}
          <div className="col-md-4">
            <div className="p-4 rounded-3 text-dark fw-bold" style={{ backgroundColor: '#ffcc00' }}>
              <div className="text-uppercase small tracking-wider mb-2">Cabs</div>
              <h2 className="display-5 fw-black mb-0">{totalCabs}</h2>
            </div>
          </div>

          {/* DYNAMIC BOOKINGS CARD */}
          <div className="col-md-4">
            <div className="p-4 rounded-3 text-dark fw-bold" style={{ backgroundColor: '#ffcc00' }}>
              <div className="text-uppercase small tracking-wider mb-2">Bookings</div>
              <h2 className="display-5 fw-black mb-0">{totalBookings}</h2>
            </div>
          </div>
        </div>

        {/* Dynamic Scaling Chart Visualization Container */}
        <div className="p-4 rounded bg-dark border border-secondary text-center">
          <h6 className="fw-bold text-uppercase mb-4 text-warning" style={{ letterSpacing: '1px' }}>Metrics Distribution Visualizer</h6>
          
          <div className="d-flex justify-content-around align-items-end mx-auto pt-3" style={{ maxWidth: '400px', height: '200px', borderBottom: '2px solid #555' }}>
            
            {/* Dynamic Users Bar */}
            <div className="d-flex flex-column align-items-center w-100">
              <span className="small text-white-50 mb-1">{totalUsers}</span>
              <div style={{ 
                width: '40px', 
                height: `${(totalUsers / maxVal) * 150}px`, 
                minHeight: totalUsers > 0 ? '10px' : '2px',
                backgroundColor: '#ffcc00', 
                transition: 'height 0.4s ease', 
                borderRadius: '4px 4px 0 0' 
              }}></div>
              <span className="small text-uppercase tracking-wider text-white mt-2" style={{ fontSize: '11px' }}>Users</span>
            </div>

            {/* Dynamic Cabs Bar */}
            <div className="d-flex flex-column align-items-center w-100">
              <span className="small text-white-50 mb-1">{totalCabs}</span>
              <div style={{ 
                width: '40px', 
                height: `${(totalCabs / maxVal) * 150}px`, 
                minHeight: totalCabs > 0 ? '10px' : '2px',
                backgroundColor: '#ffcc00', 
                transition: 'height 0.4s ease', 
                borderRadius: '4px 4px 0 0' 
              }}></div>
              <span className="small text-uppercase tracking-wider text-white mt-2" style={{ fontSize: '11px' }}>Cabs</span>
            </div>

            {/* Dynamic Bookings Bar */}
            <div className="d-flex flex-column align-items-center w-100">
              <span className="small text-white-50 mb-1">{totalBookings}</span>
              <div style={{ 
                width: '40px', 
                height: `${(totalBookings / maxVal) * 150}px`, 
                minHeight: totalBookings > 0 ? '10px' : '2px',
                backgroundColor: '#ffcc00', 
                transition: 'height 0.4s ease', 
                borderRadius: '4px 4px 0 0' 
              }}></div>
              <span className="small text-uppercase tracking-wider text-white mt-2" style={{ fontSize: '11px' }}>Bookings</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}