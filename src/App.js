import React, { useState } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';

import { lightTheme, darkTheme } from './utils/theme';
import NavBar from './components/NavBar';

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (choice) => {
    setTheme(choice === 'light' ? lightTheme : darkTheme);
  };

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        {/* <div className=' justify-center flex flex-col h-screen items-center font-bold text-6xl'>
        <h1 className=' font-open-sans font-bold'>WALDO Desktop</h1>
      </div> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
