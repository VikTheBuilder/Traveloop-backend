import React from 'react';

const ActivitySearch = () => {
  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 flex flex-col gap-8">
        {/* Header & Utility Bar */}
        <header className="flex flex-col gap-6">
          <div>
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-background">Explore Interlaken</h1>
            <p className="font-body text-body text-on-surface-variant mt-2">Discover activities in the adventure capital of the Swiss Alps.</p>
          </div>
          {/* Utility Bar */}
          <div className="bg-surface-container rounded-lg p-unit inset-shadow flex flex-col md:flex-row gap-4 items-center justify-between border border-outline-variant/20">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
              <input 
                className="w-full bg-surface rounded-md py-2 pl-10 pr-4 font-body text-body text-on-background border-none focus:ring-2 focus:ring-primary inset-shadow transition-all" 
                placeholder="Search activities..." 
                type="text"
              />
            </div>
            {/* Filters & Sort */}
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              <button className="bg-surface text-on-surface font-interactive text-interactive px-4 py-2 rounded-md raised-shadow flex items-center gap-2 hover:translate-z-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">filter_list</span> Filters
              </button>
              <button className="bg-surface text-on-surface font-interactive text-interactive px-4 py-2 rounded-md raised-shadow flex items-center gap-2 hover:translate-z-[10px] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 whitespace-nowrap">
                <span className="material-symbols-outlined text-[18px]">sort</span> Sort
              </button>
            </div>
          </div>
        </header>

        {/* Results Section */}
        <section className="flex flex-col gap-6">
          <h2 className="font-h2 text-h2 text-on-background border-b border-outline-variant/30 pb-2">Paragliding Results</h2>
          <div className="flex flex-col gap-6">
            {/* Activity Card 1 */}
            <article className="bg-surface rounded-xl raised-shadow border border-outline-variant/20 flex flex-col md:flex-row overflow-hidden group hover:-rotate-1 hover:scale-[1.01] transition-transform duration-500 perspective-1000">
              <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                <img 
                  alt="Paragliding over Interlaken" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAVwIvuEucj8h8pC8j03XTYC8SaUuTveydnu-d7MWyaIoa5J4qbjsn6_etkME9qMHWyIKY0AR_7mqk1votWRk0eJhqIFSQZt0V7O3Gwaq2MP0Cu2hwQ-5M3S8N7QIdTBom71QmSETM1E1fD2pYCbjsgR-MBGgMZSMFJDxD7yUOotNogrEIcJU0QOcAaPndKQgVeqybQqOQPcrO26SCu4VHkTLwpOBTd6VfN84bZPI_2q8yiLtI19re9uyOOBasCwO8aFyRvcLKNEU"
                />
                <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1 raised-shadow">
                  <span className="material-symbols-outlined text-[14px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-sm text-label-sm text-on-surface font-bold">4.9</span>
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-h3 text-h3 text-on-background">Tandem Flight Beatenberg</h3>
                    <span className="font-h3 text-h3 text-primary font-bold">€170</span>
                  </div>
                  <p className="font-body text-body text-on-surface-variant">Experience the thrill of a lifetime with a tandem paragliding flight from Beatenberg down to Interlaken.</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2 py-1 rounded-sm inset-shadow tracking-widest">DURATION: 1.5H</span>
                    <span className="font-label-sm text-label-sm bg-surface-container-high text-on-surface px-2 py-1 rounded-sm inset-shadow tracking-widest">LEVEL: EASY</span>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 pt-4 border-t border-outline-variant/20">
                  <span className="font-body text-body text-on-surface-variant text-sm italic">Option and its details</span>
                  <button className="bg-primary text-on-primary font-interactive text-interactive px-6 py-3 rounded-lg raised-shadow hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ActivitySearch;
