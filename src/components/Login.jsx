import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
    // Simple navigation for demonstration
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#F8FAFC] text-on-background min-h-screen flex items-center justify-center p-margin_mobile font-body antialiased">
      <div className="w-full max-w-md">
        {/* Skeuomorphic Login Card */}
        <div className="bg-surface rounded-xl raised-card p-8 relative overflow-hidden">
          {/* Decorative glass overlay */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4 raised-card">
              <span className="material-symbols-outlined text-[32px] text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>flight_takeoff</span>
            </div>
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-primary">Login</h1>
            <p className="font-body text-body text-on-surface-variant mt-2">Access your travel console.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="username">Username</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">person</span>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-DEFAULT inset-input py-3 pl-10 pr-4 font-body text-body text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  id="username" 
                  placeholder="Enter your username" 
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant ml-1" htmlFor="password">Password</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">lock</span>
                <input 
                  className="w-full bg-surface-container-highest border-none rounded-DEFAULT inset-input py-3 pl-10 pr-4 font-body text-body text-on-surface focus:ring-2 focus:ring-primary focus:outline-none transition-all" 
                  id="password" 
                  placeholder="Enter your password" 
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-2 mb-6">
              <Link className="font-label-sm text-label-sm text-primary hover:text-primary-fixed-dim transition-colors" to="/register">Create Account</Link>
              <a className="font-label-sm text-label-sm text-primary hover:text-primary-fixed-dim transition-colors" href="#">Forgot password?</a>
            </div>

            <button 
              className="w-full bg-primary-container text-on-primary-container rounded-lg py-4 font-interactive text-interactive raised-button flex items-center justify-center gap-2" 
              type="submit"
            >
              Login
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
