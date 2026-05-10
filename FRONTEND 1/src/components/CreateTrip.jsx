import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTrip = () => {
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating trip:', formData);
    navigate('/build-itinerary');
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-1 w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 md:py-12 flex flex-col gap-10">
        <header className="flex flex-col gap-2">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface">Plan a new trip</h1>
          <p className="font-body text-body text-on-surface-variant max-w-2xl">Set your destination and dates to begin configuring your itinerary console.</p>
        </header>

        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Destination Card */}
            <div className="md:col-span-7 bg-surface-container-low rounded-xl p-6 md:p-8 raised border border-white/60 flex flex-col gap-4 relative overflow-hidden group">
              <label className="font-interactive text-interactive text-on-surface flex items-center gap-2" htmlFor="destination">
                <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                Select a Place :
              </label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-outline">search</span>
                </div>
                <input 
                  className="w-full bg-surface-container rounded-lg py-4 pl-12 pr-4 text-body font-body text-on-surface placeholder:text-outline inset-input border border-transparent focus:border-primary/30 focus:ring-2 focus:ring-primary/20 transition-all duration-300 outline-none" 
                  id="destination" 
                  placeholder="e.g., Kyoto, Japan" 
                  type="text"
                  value={formData.destination}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Dates Card Container */}
            <div className="md:col-span-5 flex flex-col sm:flex-row md:flex-col gap-gutter">
              <div className="flex-1 bg-surface-container-low rounded-xl p-5 raised border border-white/60 flex flex-col gap-3">
                <label className="font-interactive text-interactive text-on-surface flex items-center gap-2" htmlFor="startDate">
                  <span className="material-symbols-outlined text-tertiary text-sm">calendar_today</span>
                  Start Date:
                </label>
                <input 
                  className="w-full bg-surface-container rounded-lg p-3 text-body font-body text-on-surface inset-input border border-transparent focus:ring-2 focus:ring-primary/20 outline-none text-center" 
                  id="startDate" 
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>
              <div className="flex-1 bg-surface-container-low rounded-xl p-5 raised border border-white/60 flex flex-col gap-3">
                <label className="font-interactive text-interactive text-on-surface flex items-center gap-2" htmlFor="endDate">
                  <span className="material-symbols-outlined text-tertiary text-sm">event</span>
                  End Date:
                </label>
                <input 
                  className="w-full bg-surface-container rounded-lg p-3 text-body font-body text-on-surface inset-input border border-transparent focus:ring-2 focus:ring-primary/20 outline-none text-center" 
                  id="endDate" 
                  type="date"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>

          {/* Suggestions Section */}
          <section className="flex flex-col gap-6">
            <h2 className="font-h3 text-h3 text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">explore</span>
              Suggestions for your trip
            </h2>
            <div className="flex flex-wrap gap-4">
              {['Historical Museums', 'Local Gastronomy', 'Nature Trails', 'Artisan Markets'].map((tag) => (
                <button key={tag} type="button" className="bg-surface rounded-full px-5 py-2.5 font-label-sm text-label-sm text-on-surface raised border border-white/80 flex items-center gap-2 hover:-translate-y-1 transition-all">
                  <span className="material-symbols-outlined text-sm text-secondary">check</span>
                  {tag}
                </button>
              ))}
            </div>
          </section>

          <div className="flex justify-center md:justify-start w-full pb-12">
            <button 
              type="submit"
              className="bg-primary text-on-primary rounded-xl px-8 py-4 font-interactive text-interactive font-bold raised hover:-translate-y-1 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">add_circle</span>
              Create Trip Console
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateTrip;
