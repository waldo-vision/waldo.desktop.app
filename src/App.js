import React, { useState } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
import { lightTheme, darkTheme } from './utils/theme';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import Results from './pages/Results';
import Settings from './pages/Settings';
import Loading from './pages/Loading';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  // eslint-disable-next-line no-unused-vars
  const changeTheme = (choice) => {
    setTheme(choice === 'light' ? lightTheme : darkTheme);
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/home" element={<Main />} />
            <Route exact path="/results" element={<Results />} />
            <Route exact path="/settings" element={<Settings />} />
            <Route exact path="/" element={<Loading />} />
            <Route path="/*" element={<Main />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
