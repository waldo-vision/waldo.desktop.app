import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import BellIcon from '@mui/icons-material/NotificationsNone';
import DownArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import './NavBar.css';
import { Link } from 'react-router-dom';

import MinimiseIcon from '../assets/img/icons/MinimiseIcon';
import MaximiseIcon from '../assets/img/icons/MaximiseIcon';
import CloseIcon from '../assets/img/icons/CloseIcon';

const electron = window.require('electron');
const { ipcRenderer } = electron;

const tabs = [
  {
    label: 'Home',
    to: './home',
  },
  {
    label: 'My Scans',
    to: './results',
  },
  {
    label: 'Settings',
    to: './settings',
  },
];

function RenderTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Tabs
      variant="scrollable"
      value={value}
      onChange={handleChange}
      TabIndicatorProps={{ sx: { background: '#000' } }}
    >
      {tabs.map((tab, i) => (
        <Tab
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          sx={{ p: 3.5 }}
          disableRipple
          label={(
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: theme.palette.text.primary,
                textTransform: 'none',
                transition: 'opacity 0.2s ease-in-out',
                fontWeight: 600,
                '&:hover': {
                  opacity: 0.9,
                },
              })}
              className="not-draggable"
            >
              {tab.label}
            </Typography>
          )}
          component={Link}
          to={tab.to}
        />
      ))}
    </Tabs>
  );
}

const minHandler = () => {
  ipcRenderer.send('minimize-window');
};
const maxHandler = () => {
  ipcRenderer.send('maximize-window');
};
const closeHandler = () => {
  ipcRenderer.send('close-window');
};

const windowControls = [
  {
    icon: <MinimiseIcon />,
    handler: minHandler,
    background: (theme) => theme.palette.background.windowControls.secondary,
  },
  {
    icon: <MaximiseIcon />,
    handler: maxHandler,
    background: (theme) => theme.palette.background.windowControls.secondary,
  },
  {
    icon: <CloseIcon />,
    handler: closeHandler,
    background: (theme) => theme.palette.background.windowControls.primary,
  },
];

function RenderWindowControls() {
  return (
    <Grid
      container
      alignItems="center"
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      {windowControls.map((control, i) => (
        <Button
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          onClick={control.handler}
          sx={{
            py: 1.5,
            borderRadius: '0',
            '&:hover': {
              background: control.background,
            },
          }}
        >
          {control.icon}
        </Button>
      ))}
    </Grid>
  );
}

export default function NavBar() {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="top"
      sx={{ m: '0 auto' }}
    >
      <Grid item alignContent="center" sx={{ width: '17.5%' }}>
        <Typography
          variant="h5"
          sx={(theme) => ({
            color: theme.palette.text.primary,
            textTransform: 'none',
            transition: 'opacity 0.2s ease-in-out',
            fontWeight: 600,
            textAlign: 'center',
            userSelect: 'none',
            draggable: false,
            p: 3,
          })}
        >
          WALDO
        </Typography>
      </Grid>
      <Box sx={{ minWidth: '550px', width: '65%', m: '0 auto' }}>
        <Paper
          sx={{
            borderColor: 'divider',
            borderRadius: ' 0px 0px 10px 10px',
            boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
            px: 3,
          }}
          className="draggable"
        >
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={6}>
              <RenderTabs />
            </Grid>
            <Grid item xs="auto" alignContent="center">
              <Box sx={{ minWidth: '250px', textAlign: 'right' }}>
                <Button
                  color="success"
                  variant="contained"
                  sx={{
                    color: 'white',
                    borderRadius: '10px',
                    textTransform: 'none',
                    fontWeight: 400,
                    px: 3,
                    py: 1,
                  }}
                  className="not-draggable"
                >
                  Process Clip
                </Button>
                <IconButton
                  size="large"
                  sx={(theme) => ({
                    background: theme.palette.background.bell,
                    ml: 3,
                    p: 1,
                  })}
                  className="not-draggable"
                >
                  <BellIcon
                    fontSize="inherit"
                    sx={{
                      p: 0.2,
                    }}
                  />
                </IconButton>
                <DownArrowIcon
                  sx={(theme) => ({ color: theme.palette.background.bell })}
                  className="not-draggable"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Grid
        item
        alignContent="center"
        sx={{
          width: '17.5%',
        }}
      >
        <RenderWindowControls />
      </Grid>
    </Grid>
  );
}
