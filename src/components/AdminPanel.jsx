import React from 'react';

const AdminPanel = () => {
  return (
    <div className="bg-background text-on-background font-body text-body flex h-screen overflow-hidden">
      {/* SideNavBar */}
      <nav className="fixed left-0 top-0 h-full z-40 p-4 w-64 flex flex-col bg-inverse-surface border-r border-outline-variant/20 shadow-[4px_0_15px_rgba(0,0,0,0.3)]">
        <div className="mb-8">
          <h1 className="font-h3 text-h3 text-primary-fixed font-bold tracking-tight">Traveloop Admin</h1>
          <p className="font-label-sm text-label-sm text-surface-variant mt-1">Global Command</p>
        </div>
        <button className="mb-8 w-full py-3 px-4 bg-primary text-on-primary rounded-xl font-interactive text-interactive flex items-center justify-center gap-2 raised-card hover:translate-y-[-1px] transition-transform active:scale-[0.98]">
          <span className="material-symbols-outlined text-[18px]">add</span>
          New Trip
        </button>
        <div className="flex-1 flex flex-col gap-2">
          <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container rounded-full translate-x-1 shadow-md transition-all font-interactive text-interactive" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
            Dashboard
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-surface-variant hover:translate-x-1 transition-all hover:text-primary-fixed-dim hover:bg-surface-variant/10 font-interactive text-interactive rounded-full" href="#">
            <span className="material-symbols-outlined">event_available</span>
            Bookings
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-surface-variant hover:translate-x-1 transition-all hover:text-primary-fixed-dim hover:bg-surface-variant/10 font-interactive text-interactive rounded-full" href="#">
            <span className="material-symbols-outlined">inventory_2</span>
            Inventory
          </a>
        </div>
        <div className="mt-auto flex flex-col gap-2 pt-4 border-t border-outline-variant/20">
          <a className="flex items-center gap-3 px-4 py-3 text-surface-variant hover:translate-x-1 transition-all hover:text-primary-fixed-dim hover:bg-surface-variant/10 font-interactive text-interactive rounded-full" href="#">
            <span className="material-symbols-outlined">logout</span>
            Logout
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="ml-64 flex-1 h-full overflow-y-auto bg-background p-margin_desktop">
        <div className="max-w-container_max mx-auto">
          <header className="mb-gutter flex justify-between items-end">
            <div>
              <h2 className="font-h2 text-h2 text-on-background mb-unit">Admin Dashboard</h2>
              <p className="font-body text-body text-on-surface-variant">Overview of user activity and system health.</p>
            </div>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {/* Manage Users Card */}
            <div className="bg-surface rounded-xl p-6 raised-card flex flex-col h-full lg:col-span-2 hover:scale-[1.01] transition-transform duration-300">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center inset-element">
                    <span className="material-symbols-outlined">manage_accounts</span>
                  </div>
                  <h3 className="font-h3 text-h3 text-on-surface">Manage Users</h3>
                </div>
              </div>
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-surface-container-low p-4 rounded-lg inset-element">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">Total Active</p>
                  <p className="font-h2 text-h2 text-primary">24,592</p>
                </div>
                <div className="flex-1 bg-surface-container-low p-4 rounded-lg inset-element">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-1 uppercase">New Signups</p>
                  <p className="font-h2 text-h2 text-secondary">1,204</p>
                </div>
              </div>
              <button className="w-full py-2 bg-surface-container-highest text-on-surface rounded-lg font-interactive text-interactive raised-card hover:bg-surface-dim transition-colors active:scale-[0.98]">
                View All Users
              </button>
            </div>

            {/* Popular Cities Card */}
            <div className="bg-surface rounded-xl p-6 raised-card flex flex-col h-full hover:scale-[1.01] transition-transform duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center inset-element">
                  <span className="material-symbols-outlined">location_city</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">Popular Cities</h3>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                <li className="flex justify-between items-center bg-surface-container-low p-3 rounded-lg inset-element">
                  <span className="font-interactive text-interactive text-on-surface">Tokyo, JP</span>
                  <span className="font-label-sm text-label-sm bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded-full">#1</span>
                </li>
              </ul>
            </div>
          </div>

          {/* User Trends Analytics */}
          <div className="bg-surface rounded-xl p-6 raised-card flex flex-col h-full lg:col-span-4 hover:scale-[1.01] transition-transform duration-300 mt-gutter">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center inset-element">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface">User Trends and Analytics</h3>
              </div>
            </div>
            <div className="h-64 bg-surface-container-low rounded-lg inset-element w-full relative flex items-end p-4 gap-2">
              <div className="flex-1 bg-primary/40 rounded-t-sm h-[50%] hover:bg-primary/60 transition-colors"></div>
              <div className="flex-1 bg-primary/70 rounded-t-sm h-[80%] hover:bg-primary/90 transition-colors"></div>
              <div className="flex-1 bg-primary rounded-t-sm h-[90%] hover:bg-primary-fixed-dim transition-colors"></div>
              <div className="flex-1 bg-primary/60 rounded-t-sm h-[60%] hover:bg-primary/80 transition-colors"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminPanel;
