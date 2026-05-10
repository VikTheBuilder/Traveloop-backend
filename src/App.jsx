import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Login from './components/Login';
import Registration from './components/Registration';
import AdminPanel from './components/AdminPanel';
import ActivitySearch from './components/ActivitySearch';
import CreateTrip from './components/CreateTrip';
import BuildItinerary from './components/BuildItinerary';
import ItineraryView from './components/ItineraryView';
import ExpenseInvoice from './components/ExpenseInvoice';
import PackingChecklist from './components/PackingChecklist';
import TripNotes from './components/TripNotes';
import CommunityTab from './components/CommunityTab';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-background text-on-background">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/activity-search" element={<ActivitySearch />} />
            <Route path="/create-trip" element={<CreateTrip />} />
            <Route path="/build-itinerary" element={<BuildItinerary />} />
            <Route path="/itinerary-view" element={<ItineraryView />} />
            <Route path="/expense-invoice" element={<ExpenseInvoice />} />
            <Route path="/packing-checklist" element={<PackingChecklist />} />
            <Route path="/trip-notes" element={<TripNotes />} />
            <Route path="/community-tab" element={<CommunityTab />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/user-trips" element={<Dashboard />} />
            <Route path="/admin-panel" element={<AdminPanel />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <footer className="bg-surface-container-low dark:bg-surface-dim border-t border-outline-variant/30 py-8">
          <div className="max-w-container_max mx-auto px-margin_mobile md:px-margin_desktop flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-h3 text-primary font-bold">Traveloop</div>
            <div className="text-on-surface-variant text-sm">© 2024 Traveloop Design System. All rights reserved.</div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-colors">language</span>
              <span className="material-symbols-outlined text-secondary cursor-pointer hover:text-primary transition-colors">help</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
