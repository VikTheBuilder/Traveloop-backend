import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    additional_info: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    navigate('/login');
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex items-center justify-center p-margin_mobile md:p-margin_desktop">
      {/* Registration Container */}
      <div className="bg-surface w-full max-w-2xl rounded-xl p-8 raised">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-h2 text-h2 text-primary">Register</h1>
          <p className="font-body text-body text-on-surface-variant mt-2">Create a new profile for the Traveloop console.</p>
        </div>

        {/* Avatar Upload */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-surface-container-low raised flex items-center justify-center relative cursor-pointer hover:-translate-y-1 transition-transform duration-200">
            <span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
              account_circle
            </span>
            <div className="absolute bottom-0 right-0 bg-primary text-on-primary rounded-full p-2 raised shadow-sm">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                upload
              </span>
            </div>
          </div>
        </div>

        {/* Form Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="first_name">First Name</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="first_name" 
                placeholder="Jane" 
                type="text"
                value={formData.first_name}
                onChange={handleChange}
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="last_name">Last Name</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="last_name" 
                placeholder="Doe" 
                type="text"
                value={formData.last_name}
                onChange={handleChange}
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="email">Email Address</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="email" 
                placeholder="jane@example.com" 
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="phone">Phone Number</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="phone" 
                placeholder="+1 (555) 000-0000" 
                type="tel"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            {/* City */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="city">City</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="city" 
                placeholder="Seattle" 
                type="text"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            {/* Country */}
            <div className="flex flex-col gap-2">
              <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="country">Country</label>
              <input 
                className="bg-surface-container-low border-none rounded-lg p-3 font-interactive text-interactive text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                id="country" 
                placeholder="United States" 
                type="text"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Full-width Text Area */}
          <div className="flex flex-col gap-2">
            <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="additional_info">Additional Information</label>
            <textarea 
              className="bg-surface-container-low border-none rounded-lg p-3 font-body text-body text-on-surface inset focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-none" 
              id="additional_info" 
              placeholder="Enter any special requests..." 
              rows="4"
              value={formData.additional_info}
              onChange={handleChange}
            ></textarea>
          </div>
          {/* Submit Button */}
          <div className="mt-8 flex justify-end">
            <button 
              className="bg-primary text-on-primary font-interactive text-interactive py-3 px-8 rounded-lg raised hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2" 
              type="submit"
            >
              Register
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
