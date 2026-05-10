import React, { useState } from 'react';

const BuildItinerary = () => {
  const [sections, setSections] = useState([
    { id: 1, title: 'Section 1', dateRange: 'Oct 12 to Oct 15', budget: '$1,500', details: 'Arrival in Kyoto, check into the Ryokan, and evening walk through Gion district.' },
    { id: 2, title: 'Section 2', dateRange: 'Oct 16 to Oct 18', budget: '$800', details: 'Bullet train to Tokyo. Afternoon shopping in Shibuya and dinner in Shinjuku.' }
  ]);

  const addSection = () => {
    const newId = sections.length + 1;
    setSections([...sections, { id: newId, title: `Section ${newId}`, dateRange: '', budget: '', details: '' }]);
  };

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-[32px]">
        <header className="mb-[32px]">
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-on-background mb-[8px]">Build Itinerary</h1>
          <p className="font-body text-body text-on-surface-variant">Design your journey, day by day.</p>
        </header>

        <div className="flex flex-col gap-[24px]">
          {sections.map((section) => (
            <article key={section.id} className="bg-surface raised-card p-[24px] transition-transform duration-300 hover:-translate-y-1 perspective-1000">
              <h2 className="font-h3 text-h3 text-on-surface mb-[16px]">{section.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mb-[16px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Date Range</label>
                  <p className="font-body text-body text-on-surface bg-surface-container-low px-[16px] py-[12px] inset-input">{section.dateRange || 'Select dates'}</p>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Budget</label>
                  <div className="relative">
                    <span className="absolute left-[12px] top-[12px] font-body text-body text-on-surface-variant material-symbols-outlined">payments</span>
                    <input 
                      className="w-full pl-[40px] pr-[16px] py-[12px] bg-surface-container-low font-body text-body text-on-surface inset-input border-none focus:ring-2 focus:ring-primary focus:outline-none transition-shadow" 
                      placeholder="Enter budget" 
                      type="text" 
                      defaultValue={section.budget}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Section Details</label>
                <textarea 
                  className="w-full p-[16px] bg-surface-container-low font-body text-body text-on-surface inset-input border-none focus:ring-2 focus:ring-primary focus:outline-none transition-shadow resize-y" 
                  placeholder="Describe the activities for this section..." 
                  rows="4"
                  defaultValue={section.details}
                ></textarea>
              </div>
              <div className="mt-[16px] flex justify-end">
                <button className="bg-primary text-on-primary font-interactive text-interactive px-[24px] py-[12px] raised-button active:scale-[0.98] transition-all duration-200">Save Section</button>
              </div>
            </article>
          ))}

          <button 
            onClick={addSection}
            className="bg-surface-container-highest text-primary font-interactive text-interactive px-[24px] py-[16px] raised-button active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-[8px] w-full md:w-auto md:self-center mt-[16px]"
          >
            <span className="material-symbols-outlined">add</span>
            Add New Section
          </button>
        </div>
      </main>
    </div>
  );
};

export default BuildItinerary;
