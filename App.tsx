import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ReportForm from './components/ReportForm';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import { ReportData, LocationCoords } from './types';

type Theme = 'light' | 'dark';
type View = 'form' | 'dashboard' | 'login';

// --- Malicious Reporter DB Simulation ---
const getMaliciousDb = (): Record<string, number> => {
  try {
    const db = localStorage.getItem('maliciousReporterDb');
    return db ? JSON.parse(db) : {};
  } catch (e) {
    return {};
  }
};

const updateMaliciousDb = (reporterId: string) => {
  const db = getMaliciousDb();
  db[reporterId] = (db[reporterId] || 0) + 1;
  localStorage.setItem('maliciousReporterDb', JSON.stringify(db));
};
// ---

const App: React.FC = () => {
  const [view, setView] = useState<View>('form');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [reports, setReports] = useState<ReportData[]>([]);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedPrefs = window.localStorage.getItem('theme');
      if (storedPrefs) {
        return storedPrefs as Theme;
      }
    }
    return 'light';
  });

  const [isGeoBlocked, setIsGeoBlocked] = useState<boolean | null>(null);
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [ipCoords, setIpCoords] = useState<LocationCoords | null>(null);
  const [maliciousReporterDb, setMaliciousReporterDb] = useState(getMaliciousDb());

  useEffect(() => {
    // Geo-fencing and IP address check
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => {
        if (data.country_code !== 'IN') {
          setIsGeoBlocked(true);
        } else {
          setIsGeoBlocked(false);
        }
        setIpAddress(data.ip || 'N/A');
        if (data.latitude && data.longitude) {
          setIpCoords({ latitude: data.latitude, longitude: data.longitude });
        }
      })
      .catch(() => {
        // If API fails, default to allowing submission
        setIsGeoBlocked(false);
        setIpAddress('N/A');
        setIpCoords(null);
        console.warn("Could not verify user's country or IP. Allowing submission by default.");
      });
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleAddReport = (report: ReportData) => {
    setReports(prev => [...prev, report]);
  };
  
  const handleMarkAsFalse = (report: ReportData) => {
    const reporterId = report.reporter.phoneHash || report.reporter.deviceFingerprint;
    updateMaliciousDb(reporterId);
    setMaliciousReporterDb(getMaliciousDb()); // Re-sync state

    setReports(prevReports => prevReports.map(r => 
        r.caseId === report.caseId ? { ...r, reportStatus: 'False Alarm' } : r
    ));
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  const handleLogin = (user: string, pass: string): boolean => {
    // In a real application, this would be an API call to an authentication service.
    if (user === 'ngo_user' && pass === 'password123') {
      setIsAuthenticated(true);
      setView('dashboard');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('form');
  };

  const renderContent = () => {
    switch (view) {
      case 'form':
        return <ReportForm 
                  onReportSubmit={handleAddReport} 
                  isGeoBlocked={isGeoBlocked}
                  maliciousReporterDb={maliciousReporterDb}
                  ipAddress={ipAddress}
                  ipCoords={ipCoords}
                />;
      case 'login':
        return <LoginPage onLogin={handleLogin} />;
      case 'dashboard':
        return isAuthenticated 
          ? <Dashboard reports={reports} onMarkAsFalse={handleMarkAsFalse} />
          : <LoginPage onLogin={handleLogin} />;
      default:
        return <ReportForm 
                  onReportSubmit={handleAddReport} 
                  isGeoBlocked={isGeoBlocked}
                  maliciousReporterDb={maliciousReporterDb}
                  ipAddress={ipAddress}
                  ipCoords={ipCoords}
                />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
      <Header 
        view={view} 
        setView={setView} 
        theme={theme} 
        toggleTheme={toggleTheme}
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
      />
      <main className="container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <footer className="text-center py-6 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Suspect Reporting System. All rights reserved.</p>
        <p className="mt-1">Assisting authorities in maintaining national security.</p>
      </footer>
    </div>
  );
};

export default App;