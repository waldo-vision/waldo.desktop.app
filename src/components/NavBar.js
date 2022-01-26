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

const electron = window.require('electron');
const { ipcRenderer } = electron;

function TabProps(label) {
  return {
    sx: { p: 3.5 },
    disableRipple: true,
    label: (
      <Typography
        variant="body1"
        sx={(theme) => ({
          color: theme.palette.text.primary,
          textTransform: 'none',
          transition: 'opacity 0.2s ease-in-out',
          fontWeight: 600,
          userSelect: 'none',
          '&:hover': {
            opacity: 0.9,
          },
        })}
        className="not-draggable"
      >
        {label}
      </Typography>
    ),
  };
}

export default function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const minHandler = () => {
    ipcRenderer.send('minimize-window');
  };
  const maxHandler = () => {
    ipcRenderer.send('maximize-window');
  };
  const closeHandler = () => {
    ipcRenderer.send('close-window');
  };

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
              <Tabs
                variant="scrollable"
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ sx: { background: '#000' } }}
              >
                <Tab
                  label="Home"
                  {...TabProps('Home')}
                  component={Link}
                  to="./home"
                />
                <Tab
                  {...TabProps('My Scans')}
                  component={Link}
                  to="./results"
                />
                <Tab
                  {...TabProps('Settings')}
                  component={Link}
                  to="./settings"
                />
              </Tabs>
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
        <Grid
          container
          alignItems="center"
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={minHandler}
            sx={{
              py: 1.5,
              borderRadius: '0',
              '&:hover': {
                background: '#d9d9d9',
              },
            }}
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.59998C1.96884 1.59998 11.857 1.59998 16.68 1.59998"
                stroke="#1C242F"
                strokeWidth="1.568"
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <Button
            onClick={maxHandler}
            sx={{
              py: 1.5,
              borderRadius: '0',
              '&:hover': {
                background: '#d9d9d9',
              },
            }}
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.783938 2.11201C0.783938 1.67901 1.13495 1.32801 1.56794 1.32801H8.62393H15.6799C16.1129 1.32801 16.4639 1.67901 16.4639 2.112V13.2448C16.4639 13.6778 16.1129 14.0288 15.6799 14.0288H1.56794C1.13495 14.0288 0.783938 13.6778 0.783938 13.2448V2.11201Z"
                stroke="#1C242F"
                strokeWidth="1.568"
                strokeLinejoin="round"
              />
              <path
                d="M16.2687 2.896H1.99994"
                stroke="#1C242F"
                strokeWidth="1.568"
                strokeLinecap="round"
              />
            </svg>
          </Button>
          <Button
            onClick={closeHandler}
            sx={{
              py: 1.5,
              borderRadius: '0',
              '&:hover': {
                background: '#ff7569',
              },
            }}
          >
            <svg
              width="18"
              height="15"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.08337 12.1437C1.76845 11.4586 8.76043 4.46662 12.1708 1.05626"
                stroke="#1C242F"
                strokeWidth="1.568"
                strokeLinecap="round"
              />
              <path
                d="M1.13904 1.112C1.82411 1.79708 8.8161 8.78906 12.2265 12.1994"
                stroke="#1C242F"
                strokeWidth="1.568"
                strokeLinecap="round"
              />
            </svg>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
