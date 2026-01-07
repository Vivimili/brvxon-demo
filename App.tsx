
import React, { useState, useEffect } from 'react';
import LandingPage from './views/LandingPage';
import DashboardPage from './views/DashboardPage';
import { AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>('landing');

  // Handle URL hash for basic routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#dashboard') {
        setView('dashboard');
      } else {
        setView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToDashboard = () => {
    window.location.hash = 'dashboard';
  };

  const navigateToLanding = () => {
    window.location.hash = '';
  };

  return (
    <div className="min-h-screen">
      {view === 'landing' ? (
        <LandingPage onLaunch={navigateToDashboard} />
      ) : (
        <DashboardPage onExit={navigateToLanding} />
      )}
    </div>
  );
};

export default App;
