import React from 'react';

const TripNotes = () => {
  const notes = [
    {
      id: 1,
      tag: 'Flight Info',
      title: 'CDG Arrival Details',
      content: 'Flight AF123 lands at Terminal 2E. Need to pick up Paris Visite pass at the tourist information desk near baggage claim 4.',
      date: 'Oct 12',
      edited: '2h ago',
      icon: 'schedule'
    },
    {
      id: 2,
      tag: 'Restaurant',
      title: 'Le Marais Dinner',
      content: "Booked 'Septime' for Thursday at 20:00. Dress code is smart casual. Remember to mention dietary restrictions (no shellfish).",
      date: 'Oct 14',
      edited: 'yesterday',
      icon: 'restaurant',
      yellow: true
    },
    {
      id: 3,
      tag: 'Sightseeing',
      title: 'Vatican Tour Guide',
      content: "Meeting point is outside the Caffè Vaticano at 08:45 AM sharp. Guide's name is Marco, he'll be holding a blue umbrella.",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCidNiS01TtbWWmJOrfCoDZhzzt8hsrWrC15hVbtWKE74x9HjY6lu-TB0sw54RA75xxkldpuk4Fh555IttDvRNSJ-UpESlO7-au-cTojgKBNu5lyx7aucKBhlPnxxfVW-CNCnfmEfDPwedYr_ZbY3GT3czt9QtEedvF66GMJXVJYJuZ-pCfkTjfy9f4Rwo03WdXv9SUP2_R0WwpXVDD0ZFq05r2wudJStpSNSRmrXYkKBT8tlGPi_VdlIG4Ooulno79WF8Sc1u_NZs'
    }
  ];

  return (
    <div className="bg-background text-on-background font-body min-h-screen flex flex-col antialiased">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-gutter">
        <header className="mb-10">
          <h1 className="font-h1-mobile md:font-h1 text-h1-mobile md:text-h1 text-on-background mb-2">Trip: Paris & Rome Adventure</h1>
          <p className="font-h3 text-h3 text-secondary">Trip Notes</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {notes.map((note) => (
            <article 
              key={note.id} 
              className={`${note.yellow ? 'bg-[#fef9c3] dark:bg-surface-container-high' : 'bg-surface-container-lowest'} rounded-xl p-6 raised border border-outline-variant/30 flex flex-col min-h-[220px] hover:-rotate-1 transition-transform relative group`}
            >
              {!note.image && <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-3 bg-surface-variant/50 rounded-b-sm"></div>}
              
              {note.image && (
                <div className="h-32 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-xl relative">
                  <img src={note.image} alt={note.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-2 left-3 bg-inverse-surface/80 text-inverse-on-surface px-2 py-1 rounded-sm text-[10px] uppercase tracking-widest">{note.tag}</div>
                </div>
              )}

              <div className="flex justify-between items-start mb-3">
                {!note.image && <div className="bg-tertiary-container/20 text-tertiary px-2 py-1 rounded text-[10px] uppercase tracking-widest inset-input">{note.tag}</div>}
                <span className="material-symbols-outlined text-outline group-hover:text-primary">more_horiz</span>
              </div>

              <h3 className="font-h3 text-h3 text-on-background mb-2">{note.title}</h3>
              <p className="font-body text-body text-on-surface-variant flex-grow text-sm">{note.content}</p>

              {note.date && (
                <div className="mt-4 pt-3 border-t border-surface-variant flex justify-between items-center text-secondary text-[12px]">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">{note.icon}</span> {note.date}</span>
                  <span>{note.edited}</span>
                </div>
              )}
            </article>
          ))}

          <article className="bg-surface-container border-2 border-dashed border-outline-variant rounded-xl p-6 flex flex-col items-center justify-center min-h-[220px] hover:bg-surface-container-high cursor-pointer transition-colors text-secondary hover:text-primary group">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[24px]">add</span>
            </div>
            <span className="font-interactive text-interactive font-semibold">Create New Note</span>
          </article>
        </div>
      </main>

      <button className="fixed bottom-10 right-10 bg-primary text-on-primary rounded-full h-14 px-6 flex items-center gap-2 raised z-40 hover:scale-105 transition-all">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>edit_document</span>
        <span className="font-interactive text-interactive font-bold">Add Note</span>
      </button>
    </div>
  );
};

export default TripNotes;
