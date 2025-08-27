import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');

  // PUBLIC_INTERFACE
  // State to hold lookup values (e.g., dropdown options) for the form.
  // Initialize with a sample JSON structure. You may replace with [] or {} based on your needs.
  // Example domain lookups: owners, roads, models, device types, etc.
  const [lookups, setLookups] = useState({
    owners: [
      { value: 'owner_1', label: 'Owner 1' },
      { value: 'owner_2', label: 'Owner 2' }
    ],
    roads: [
      { value: 'north_line', label: 'North Line' },
      { value: 'east_corridor', label: 'East Corridor' }
    ],
    models: [
      { value: 'EM1900', label: 'EM1900' },
      { value: 'EMCard', label: 'EMCard' },
      { value: 'HPEAP', label: 'HPEAP' }
    ],
    deviceTypes: [
      { value: 'CMU', label: 'CMU' },
      { value: 'LCV', label: 'LCV' },
      { value: 'eHPLIG', label: 'eHPLIG' }
    ]
  });

  // HOW TO USE:
  // - Static update at runtime:
  //   setLookups(prev => ({ ...prev, models: [...prev.models, { value: 'NewModel', label: 'New Model' }] }));
  //
  // - Fetch from an API (example):
  //   useEffect(() => {
  //     async function fetchLookups() {
  //       try {
  //         const res = await fetch(process.env.REACT_APP_LOOKUPS_API || '/api/lookups');
  //         if (!res.ok) throw new Error(`Failed to load lookups: ${res.status}`);
  //         const data = await res.json();
  //         // Expecting data in a structure similar to the initial state above
  //         setLookups(data);
  //       } catch (err) {
  //         console.error('Error fetching lookups', err);
  //       }
  //     }
  //     fetchLookups();
  //   }, []);
  //
  // - Note: Ensure REACT_APP_LOOKUPS_API is set in your .env if using a custom endpoint.

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="App">
      <header className="App-header">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>

        {/* Example usage in UI (read-only preview) */}
        <div style={{ textAlign: 'left', maxWidth: 640 }}>
          <p><strong>Lookup preview (owners):</strong></p>
          <ul>
            {Array.isArray(lookups?.owners) && lookups.owners.map(opt => (
              <li key={opt.value}>{opt.label}</li>
            ))}
          </ul>
        </div>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
