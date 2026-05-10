import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col items-center justify-center p-margin_mobile md:p-margin_desktop text-center">
      <div className="relative mb-8">
        <h1 className="font-h1 text-[120px] md:text-[200px] leading-none text-primary/10 select-none">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="material-symbols-outlined text-[80px] md:text-[120px] text-primary raised-shadow p-6 rounded-full bg-surface">
            explore_off
          </span>
        </div>
      </div>
      
      <h2 className="font-h2 text-h2 mb-4">Lost in Transit?</h2>
      <p className="font-body text-body text-on-surface-variant max-w-md mb-8">
        The destination you're looking for doesn't seem to exist in our itinerary. Let's get you back on track.
      </p>
      
      <button 
        onClick={() => navigate('/')}
        className="bg-primary text-on-primary font-interactive text-interactive px-8 py-4 rounded-xl raised-shadow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
      >
        <span className="material-symbols-outlined">home</span>
        Return to Home
      </button>
      
      <div className="mt-12 flex gap-4">
        <div className="w-2 h-2 rounded-full bg-primary/20"></div>
        <div className="w-2 h-2 rounded-full bg-primary/40"></div>
        <div className="w-2 h-2 rounded-full bg-primary/20"></div>
      </div>
    </div>
  );
};

export default NotFound;
