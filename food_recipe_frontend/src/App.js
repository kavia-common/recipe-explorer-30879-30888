import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// Lazy import not used due to minimal setup; directly import component
import SignIn from './pages/SignIn';

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState('light');
  const [route, setRoute] = useState(() => {
    // Simple hash-based router fallback without adding dependencies.
    // If URL has hash like #/sign-in use it; otherwise default to root.
    const hash = window.location.hash || '#/';
    return hash;
  });

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Listen to hash changes for navigation
  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash || '#/');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Very small hash-router: map route to view
  const renderRoute = () => {
    if (route.startsWith('#/sign-in')) {
      return <SignIn />;
    }
    // default home view
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
          <a
            className="App-link"
            href="#/sign-in"
            rel="noopener noreferrer"
          >
            Go to Sign In
          </a>
        </header>
      </div>
    );
  };

  return renderRoute();
}

export default App;
