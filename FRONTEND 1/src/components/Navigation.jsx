import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="bg-surface/80 dark:bg-surface-dim/80 backdrop-blur-md text-primary dark:text-primary-fixed-dim font-interactive text-interactive docked full-width top-0 sticky z-50 bg-surface-container-low/80 dark:bg-surface-container-highest/20 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_1px_1px_0_rgba(255,255,255,0.8)]">
      <div className="flex justify-between items-center w-full px-margin_mobile md:px-margin_desktop h-16 max-w-container_max mx-auto">
        <Link to="/" className="font-h3 text-h3 font-bold text-primary dark:text-primary-fixed-dim tracking-tight">
          Traveloop
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:translate-y-[-1px] transition-transform duration-200 active:scale-[0.98] active:shadow-inner" to="/user-trips">Trips</Link>
          <Link className="text-primary dark:text-primary-fixed-dim border-b-2 border-primary dark:border-primary-fixed-dim pb-1 hover:text-primary dark:hover:text-primary-fixed-dim hover:translate-y-[-1px] transition-transform duration-200 active:scale-[0.98] active:shadow-inner" to="/">Explore</Link>
          <Link className="text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim hover:translate-y-[-1px] transition-transform duration-200 active:scale-[0.98] active:shadow-inner" to="/community-tab">Community</Link>
        </nav>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary spring-transition active:scale-[0.98]">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <Link to="/user-profile" className="text-on-surface-variant hover:text-primary spring-transition active:scale-[0.98]">
            <span className="material-symbols-outlined">settings</span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden raised spring-transition btn-hover">
            <img 
              alt="User profile avatar" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkkF6J4KjkDcXnU9uHz5R-LOWHoOmOJuP7J2kBeL8xmlYH5lC7lC_krYEuudZ7JU0_NQQroT-3iLYOqjdUB_oihGkEGnBrZRRHBqeA1VFID8Tx5A5wWCXwEfSvlgtPkDWR3WhWxRdqQBVeM3oWUMMFVP-60dAdl9ZrkR55cktbCcx4sf9Sycht8zOwEfoHLbQk8zAM_XCy0xc6nG3OC-NblUg93AboCAwiDgI2VoY4MgO6aaNaRXqFBRewG7xoz0V-dUmFHzOA-x4"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
