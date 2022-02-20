import React, { useState } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { lightTheme, darkTheme } from './utils/theme';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Results from './pages/Results';
import Settings from './pages/Settings';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeTheme = (choice: string) => {
    setTheme(choice === 'light' ? lightTheme : darkTheme);
  };

  return (
    <div className="App" style={{ height: '100vh' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <NavBar />
            <div style={{ display: 'flex', flex: '1 1 auto' }}>
              <Routes>
                <Route path="/home" element={<Main />} />
                <Route path="/results" element={<Results />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
