import createTheme from '@mui/material/styles/createTheme';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#FFFFFF',
      default: '#D2ECEB',
      bell: '#E7E7E7',
    },
    primary: {
      main: '#7E79B9',
    },
    secondary: {
      main: '#7A798F',
    },
    error: {
      main: '#CC5555',
    },
    success: {
      main: '#69BA95', //#55CC55
    },
    text: {
      primary: '#000000',
      secondary: '#7E7E7E',
      flavor: '#A0A0AA',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#404040',
      default: '#161822',
      bell: '#474747',
    },
    primary: {
      main: '#7E79B9',
    },
    secondary: {
      main: '#C2BFDF',
    },
    error: {
      main: '#CC5555',
    },
    success: {
      main: '#69BA95', //#55CC55
    },
    text: {
      primary: '#C5C5C5',
      secondary: '#7E7E7E',
      flavor: '#A0A0AA',
    },
  },
});
