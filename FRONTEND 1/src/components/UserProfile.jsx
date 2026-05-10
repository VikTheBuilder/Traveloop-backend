import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'Alex Mercer',
    level: 'Explorer Level 4',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBY3wIuAumYuJlNBdAZZWqqhjMujmWT901TEDmBc1-GLyGYF1U3V-6h9Si5zJ44ChGeI3sOkkUJIPP7b5MAwCifdPADasrLK35a794hpPseQmnAtz4hfJNlmCVCbL69VyCK9EDjL4rG8L33qKVZYxECNoLM-9onvv6VCpJCvuXtOSb_A5mzqEYjnw6t7FYdoQJ8K0T8APjeIDDiCD_Q-IvWfXcxh3P8ghrt5hKFnUgChQ1qfGgzMxE3MhbclzuMDmLm27IGj-5JCME',
    homeBase: 'Seattle, WA',
    memberSince: 'March 2021',
    prefAirline: 'Delta',
    passportExp: 'Oct 2029'
  };

  const trips = [
    { id: 1, title: 'Paris Getaway', location: 'France', days: 7, daysLeft: 14, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkxzCFeJKhbOaVvMm5wooQyR00koniJ9jX9glpD0FDkiH5pTVvPhLD312Wldx3pmmSqsAP3uVdjVbk8XRwPl8oGxt8EzsZf1QfiF8ZF7ppIpsk7T49qrWRT71hixsnq0_R8TXhINHcpV0HCBzJHayOjJVw7_Q55UP-4Xx88NKrycq8dzChYeC1iT0gpLPcYEhMgyo7U8teQ-ZNkGxKQ8HVDG4KQc5wlzCCs-EesZMtexfOdumC9SkrR5NQplB9b8Vf5EDV_XV46OY' },
    { id: 2, title: 'Tokyo Exploration', location: 'Japan', days: 14, daysLeft: 45, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7WCDoVojFkB8Ohip-zvUZpS7zxCVuBF10IajixSM2FUXzQ_TyyRwI0vz2QlSaPBBCpV1YMQhRAJRUmw9uNDR2c_01wsD1l2XVjcuJZ2zrC6KkVCR5dD9C0MZxYtFGmC0uUTxi32Z5rlc4hy4hiXn6p2PAO3vjBGn4WLoUyoKw0hsai2xnDg6A62O57BxOfQFBtLReG9Rv2rIRQ2KkeVsNg2UolN0RYLpO1LMg6vYv24_peLyAGvs-U-ROZzQUBJ_b3OO_KJtoWV0' }
  ];

  return (
    <div className="bg-background text-on-background antialiased min-h-screen flex flex-col font-body">
      <main className="flex-grow w-full max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop py-8 md:py-12 flex flex-col gap-8">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {/* Avatar & Identity */}
          <div className="md:col-span-1 flex flex-col items-center justify-center bg-surface-container raised rounded-xl p-8 border border-surface-container-highest">
            <div className="relative group cursor-pointer mb-6">
              <img src={user.avatar} alt={user.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-surface shadow-inset object-cover" />
              <div className="absolute inset-0 bg-inverse-surface/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                <span className="material-symbols-outlined text-surface text-3xl">photo_camera</span>
              </div>
            </div>
            <h1 className="font-h2 text-h2 text-on-surface mb-1">{user.name}</h1>
            <p className="font-body text-body text-secondary mb-4">{user.level}</p>
            <div className="flex gap-2">
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] tracking-widest inset-input">ADVENTURE</span>
              <span className="bg-surface-container-high px-3 py-1 rounded-full text-[10px] tracking-widest inset-input">URBAN</span>
            </div>
          </div>

          {/* User Details */}
          <div className="md:col-span-2 bg-surface raised rounded-xl border border-surface-container-highest p-8 relative flex flex-col justify-between">
            <button className="absolute top-6 right-6 p-2 bg-surface-container rounded-full raised hover:scale-110 transition-all text-primary">
              <span className="material-symbols-outlined">edit</span>
            </button>
            <div>
              <h2 className="font-h3 text-h3 text-on-surface mb-6 border-b border-surface-container-highest pb-4">Traveler Dossier</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-surface-container-low p-4 rounded-lg inset-input">
                  <span className="block font-label-sm text-label-sm text-secondary mb-1">HOME BASE</span>
                  <span className="block font-body text-body text-on-surface font-medium">{user.homeBase}</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg inset-input">
                  <span className="block font-label-sm text-label-sm text-secondary mb-1">MEMBER SINCE</span>
                  <span className="block font-body text-body text-on-surface font-medium">{user.memberSince}</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg inset-input">
                  <span className="block font-label-sm text-label-sm text-secondary mb-1">PREF. AIRLINE</span>
                  <span className="block font-body text-body text-on-surface font-medium">{user.prefAirline}</span>
                </div>
                <div className="bg-surface-container-low p-4 rounded-lg inset-input">
                  <span className="block font-label-sm text-label-sm text-secondary mb-1">PASSPORT EXP</span>
                  <span className="block font-body text-body text-on-surface font-medium">{user.passportExp}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <button className="bg-primary text-on-primary font-interactive text-interactive py-3 px-6 rounded-lg raised flex-1 text-center font-bold">
                View Passport
              </button>
              <button className="bg-surface-container text-on-surface font-interactive text-interactive py-3 px-6 rounded-lg raised flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-lg">share</span>
                Share Profile
              </button>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-h2 text-h2 text-on-surface mb-6">Preplanned Trips</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {trips.map((trip) => (
              <div key={trip.id} className="bg-surface rounded-xl p-4 raised border border-surface-container-highest hover:-translate-y-1 transition-all group cursor-pointer">
                <div className="w-full h-40 rounded-lg overflow-hidden mb-4 relative inset-input">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute top-2 right-2 bg-surface/90 backdrop-blur px-2 py-1 rounded raised font-label-sm text-label-sm font-bold text-primary">
                    IN {trip.daysLeft} DAYS
                  </div>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-1">{trip.title}</h3>
                <p className="font-body text-body text-secondary text-sm">{trip.location} • {trip.days} Days</p>
              </div>
            ))}
            <div className="bg-surface-container-low rounded-xl p-4 inset-input border border-dashed border-outline-variant flex flex-col items-center justify-center group cursor-pointer hover:bg-surface-container-high transition-colors min-h-[250px]">
              <div className="w-12 h-12 rounded-full bg-surface raised flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-2xl">add</span>
              </div>
              <h3 className="font-h3 text-h3 text-on-surface mb-1">Plan New Trip</h3>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserProfile;
