import React, { useState } from 'react';
import axios from 'axios';
import './resetpassword.css';

export default function ResetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/reset-password', {
        email,
      });
      setMessage(response.data.message);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="wrapper d-flex align-items-center justify-content-center" style={{ backgroundColor: '#5A287D' }}>
      <div className='resetpassword'>
        <div className="card">
          <div className="card-header card-header-custom">
            <h2 className="text-center">Forgot Password</h2>
          </div>
          <div className="card-body card-body-custom">
            <form onSubmit={handleResetPassword}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Reset Password
              </button>
              {message && <p className="mt-2">{message}</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
