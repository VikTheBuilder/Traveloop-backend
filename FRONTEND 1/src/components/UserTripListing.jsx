import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserTripListing = () => {
  const navigate = useNavigate();

  const handleTripClick = (tripId) => {
    navigate(`/itinerary-view`);
  };

  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body text-body antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 flex flex-col gap-8">
        {/* Page Header & Filter Bar (Glassmorphic) */}
        <header className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface">My Trips</h1>
            <button 
              onClick={() => navigate('/create-trip')}
              className="bg-primary text-on-primary px-6 py-2 rounded-lg raised flex items-center gap-2 hover:scale-105 transition-transform"
            >
              <span className="material-symbols-outlined">add</span>
              New Trip
            </button>
          </div>
          <div className="w-full bg-white/40 backdrop-blur-md border border-white/60 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.05),inset_1px_1px_0_rgba(255,255,255,0.9)] rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input (Inset) */}
            <div className="relative w-full md:w-1/3">
              <span className="material-symbols-outlined absolute left-3 top-1/2 transform -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full pl-10 pr-4 py-2 bg-surface-container-highest/50 border border-outline-variant/30 rounded-lg shadow-[inset_2px_2px_4px_rgba(0,0,0,0.05),inset_-1px_-1px_2px_rgba(255,255,255,0.5)] focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none font-body text-body text-on-surface placeholder:text-on-surface-variant transition-all duration-200" 
                placeholder="Search destinations, dates..." 
                type="text"
              />
            </div>
            {/* Filters */}
            <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),inset_1px_1px_0_rgba(255,255,255,0.8)] font-interactive text-interactive text-on-surface hover:translate-y-[-2px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">tune</span>
                Filters
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg shadow-[0_2px_4px_-1px_rgba(0,0,0,0.1),inset_1px_1px_0_rgba(255,255,255,0.8)] font-interactive text-interactive text-on-surface hover:translate-y-[-2px] hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.15)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-all duration-300 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">sort</span>
                Sort
              </button>
              <div className="h-6 w-px bg-outline-variant/50 mx-2"></div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-primary/10 text-primary font-label-sm text-label-sm rounded-md shadow-[inset_1px_1px_3px_rgba(0,0,0,0.05)] border border-primary/20">All</button>
                <button className="px-3 py-1.5 bg-surface text-on-surface-variant font-label-sm text-label-sm rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_1px_1px_0_rgba(255,255,255,0.8)] hover:text-primary transition-colors">Business</button>
              </div>
            </div>
          </div>
        </header>

        {/* Ongoing Section */}
        <section className="flex flex-col gap-4 perspective-1000">
          <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
            Ongoing
          </h2>
          <div className="flex overflow-x-auto pb-6 -mx-margin_mobile px-margin_mobile md:-mx-0 md:px-0 gap-6 snap-x snap-mandatory preserve-3d">
            {/* Card 1 */}
            <div 
              onClick={() => handleTripClick(1)}
              className="snap-start min-w-[300px] md:min-w-[400px] bg-surface rounded-xl p-4 shadow-[0_8px_16px_-4px_rgba(0,0,0,0.1),inset_1px_1px_0_rgba(255,255,255,0.9)] hover:-rotate-y-2 hover:rotate-x-2 hover:translate-z-4 hover:shadow-[0_12px_24px_-6px_rgba(0,0,0,0.15)] transition-all duration-300 transform-gpu cursor-pointer flex flex-col gap-4 border border-outline-variant/10"
            >
              <div className="h-40 rounded-lg bg-surface-container-high overflow-hidden shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)] relative">
                <img 
                  alt="New York City" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnge_JtRLEAwmFORncK094eicnKCWxR99ESFVw1Fm8BfDXeetAUB3zNHqqnYr9z4BF5J4inKzl22A56R4xhJb3NaeDIBLcCn6NiD22dbDLbbUWhPSGBardHo5-w7HUrHJZ1n1gExSAAx0ukXjDgothMD7KCk5O1TY116VwXuoULxGYLvIfqILUjZ963WiKx8zj8qpkTgeMOUtK1sqUHykLrP9NTmceZozTzwu4hmqAMmSoq6vJuUoQT_7dQQkowImsX5cNujPzE6E"
                />
                <div className="absolute top-2 right-2 bg-white/80 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-primary shadow-sm tracking-wider uppercase">Active Now</div>
              </div>
              <div>
                <h3 className="font-h3 text-h3 text-on-surface mb-1">New York Tech Week</h3>
                <p className="font-body text-body text-on-surface-variant text-sm">Oct 12 - Oct 18, 2024</p>
              </div>
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-outline-variant/20">
                <div className="flex -space-x-2">
                  <img className="w-6 h-6 rounded-full border border-surface shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc_uWm60QtcvSuAgGX8jeG21_71bV2cpkE77nurUD9aBIVhjWl3NlgSsxY_1GllhgKrp5vPJ0bj7NKducas1im9ichSlRUE52pMRhRKDXoNvXaqM0cvX2mylV4ADqsDz_KJqqnIiXBIa1zEvThwdIRoXlAjR8k0Fa_7NLHCvp3NtvuJf8qbtlxlnAsOObAMSVI-Sqt5rjsTxT-xHpdPT5_jen2UlZD2yzakWl6wdeNa2bU5wLSODmiaTejA1kxOV0haqWKL2fJvEg" />
                </div>
                <span className="font-label-sm text-label-sm text-secondary">Tech Conference & Networking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Up-coming Section */}
        <section className="flex flex-col gap-4 perspective-1000">
          <h2 className="font-h2 text-h2 text-on-surface flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">calendar_month</span>
            Upcoming
          </h2>
          <div className="flex overflow-x-auto pb-6 -mx-margin_mobile px-margin_mobile md:-mx-0 md:px-0 gap-6 snap-x snap-mandatory preserve-3d">
            {/* Card 2 */}
            <div className="snap-start min-w-[280px] md:min-w-[350px] bg-surface rounded-xl p-4 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.08),inset_1px_1px_0_rgba(255,255,255,0.9)] hover:-rotate-y-2 hover:rotate-x-2 hover:translate-z-4 hover:shadow-[0_8px_16px_-4px_rgba(0,0,0,0.12)] transition-all duration-300 transform-gpu cursor-pointer flex flex-col gap-3 border border-outline-variant/10">
              <div className="h-32 rounded-lg bg-surface-container-high overflow-hidden shadow-[inset_2px_2px_6px_rgba(0,0,0,0.1)]">
                <img 
                  alt="Tokyo" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkU4eaqRd8HjVMgL2csjStUu4Fq1fd_2434kjGFdfGXzBujZll_W30Kz-mh5Y4_n7LNlycQmkzgswky61tKKz34xYbTjqfccaBUuYixIrU2p91ZxDcTTi0PnXZ4kc6gvch8twK6_qYZsgxDKflUdxsLn7YItHdGkf4Oz2H08YVYYslS2FOrEI3RPxsUPEOHg0szXrkq6t0_yHf7ncZxHHo5RtATJTzPaqT3rVaCAto_WklfohoSZIrhEQVdC0Gx3Shxhj6a1tZxNc"
                />
              </div>
              <div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-1">Tokyo Summit</h3>
                <p className="font-body text-body text-on-surface-variant text-sm">Nov 05 - Nov 12, 2024</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-8 mt-auto flex flex-col md:flex-row justify-between items-center px-margin_mobile md:px-margin_desktop max-w-container_max mx-auto gap-4 border-t border-outline-variant/30 bg-surface-container-low dark:bg-surface-dim">
        <div className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim">
          © 2024 Traveloop Console. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Privacy Policy</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">Terms of Service</a>
          <a className="font-label-sm text-label-sm text-on-surface-variant dark:text-outline-variant hover:text-primary dark:hover:text-primary-fixed-dim transition-colors" href="#">API Docs</a>
        </div>
      </footer>
    </div>
  );
};

export default UserTripListing;
