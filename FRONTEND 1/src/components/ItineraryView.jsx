import React from 'react';

const ItineraryView = () => {
  const days = [
    { id: 1, title: 'Day 1', subtitle: 'Arrival & Acclimation', expanded: false },
    { id: 2, title: 'Day 2', subtitle: 'Historical District', expanded: false },
    { id: 3, title: 'Day 3', date: 'June 14 2025', expanded: true }
  ];

  const activities = [
    { id: 1, type: 'hotel', time: '10:00 AM', title: 'Hotel check-in', desc: 'Ritz-Carlton Kyoto. Reservation #RC-9982.', tag: 'Confirmation' },
    { id: 2, type: 'hiking', time: '2:00 PM', title: 'Physical Activity', desc: 'Guided hike through the Arashiyama Bamboo Grove.', tags: ['Moderate', 'Guide Booked'] },
    { id: 3, type: 'receipt_long', time: '7:30 PM', title: 'Expense', desc: 'Dinner at Kikunoi', amount: '$350.00', note: 'Pre-paid via corporate card.' }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 md:py-12 space-y-8">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-surface mb-2">Itinerary for Kyoto</h1>
            <p className="font-body text-body text-secondary">A curated journey through history and modernity.</p>
          </div>
          <div className="w-full md:w-auto relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary">search</span>
            <input className="w-full md:w-80 pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg inset-input" placeholder="Search activities..." type="text"/>
          </div>
        </header>

        <div className="relative pl-6 md:pl-8 space-y-12 before:content-[''] before:absolute before:left-[11px] md:before:left-[15px] before:top-2 before:bottom-0 before:w-[2px] before:bg-surface-container-highest">
          {days.map((day) => (
            <div key={day.id} className="relative">
              <div className={`absolute -left-6 md:-left-8 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center z-10 raised ${day.expanded ? 'bg-primary-container border-primary' : 'bg-surface-container border-outline-variant'}`}>
                <div className={`w-2 h-2 rounded-full ${day.expanded ? 'bg-on-primary-container' : 'bg-outline-variant'}`}></div>
              </div>
              
              {!day.expanded ? (
                <div className="flex items-center gap-4 bg-surface-container-low py-3 px-4 rounded-lg raised border border-outline-variant/30 hover:shadow-lg transition-shadow cursor-pointer">
                  <h2 className="font-h3 text-h3 text-on-surface-variant">{day.title}</h2>
                  <span className="font-label-sm text-label-sm text-secondary bg-surface-variant px-2 py-1 rounded-full">{day.subtitle}</span>
                </div>
              ) : (
                <>
                  <h2 className="font-h2 text-h2 text-on-surface mb-6 flex items-baseline gap-3">
                    {day.title}: <span className="font-h3 text-h3 text-primary">{day.date}</span>
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((act) => (
                      <div key={act.id} className="bg-surface rounded-xl p-6 raised border border-outline-variant/20 flex flex-col hover:translate-y-[-2px] transition-transform">
                        <div className="flex justify-between items-start mb-4">
                          <div className="p-3 bg-surface-container-high rounded-lg text-primary inset-input">
                            <span className="material-symbols-outlined">{act.type}</span>
                          </div>
                          <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-1 rounded">{act.time}</span>
                        </div>
                        <h3 className="font-h3 text-h3 text-on-surface mb-2">{act.title}</h3>
                        <p className="font-body text-body text-on-surface-variant mb-4 flex-grow">{act.desc}</p>
                        {act.amount && <div className="font-interactive text-interactive text-on-surface font-semibold mb-4">{act.amount}</div>}
                        <div className="flex flex-wrap gap-2">
                          {act.tag && <span className="font-label-sm text-label-sm text-secondary bg-surface-variant px-2 py-1 rounded-full">{act.tag}</span>}
                          {act.tags && act.tags.map((t, i) => <span key={i} className="font-label-sm text-label-sm text-secondary bg-surface-variant px-2 py-1 rounded-full">{t}</span>)}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ItineraryView;
