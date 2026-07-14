import React from 'react';

export default function AdminUsers({ auth }) {
  return (
    <div className="container my-5">
      <div className="card shadow border-0 p-4" style={{ backgroundColor: '#111111', border: '2px solid #ffcc00', borderRadius: '12px' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-bold text-white mb-0 text-uppercase">Users Control Grid</h3>
          <span className="small text-muted">Admin Operator: <strong style={{ color: '#ffcc00' }}>{auth?.user || "System Root"}</strong></span>
        </div>
        <div className="table-responsive">
          <table className="table table-dark table-hover align-middle text-center border border-secondary">
            <thead className="table-light text-dark small text-uppercase">
              <tr>
                <th>Sl.No</th>
                <th>User ID</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody className="small">
              <tr>
                <td className="fw-bold">1</td>
                <td className="font-monospace" style={{ color: '#ffcc00' }}>6877e2c50f3d667784d91014</td>
                {/* Dynamically uses the actual logged-in user name here */}
                <td className="fw-semibold">{auth?.user || "Active Operator"}</td>
                <td>{auth?.user ? `${auth.user.toLowerCase().replace(/\s+/g, '')}@gmail.com` : "operator@gmail.com"}</td>
                <td>
                  <button className="btn btn-sm btn-outline-warning px-2 me-2">Edit</button>
                  <button className="btn btn-sm btn-outline-danger px-2">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}