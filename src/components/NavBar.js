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

const TabProps = (label) => {
  return {
    sx: { p: 3.5 },
    disableRipple: true,
    label: (
      <Typography
        variant='body1'
        sx={(theme) => ({
          color: theme.palette.text.primary,
          textTransform: 'none',
          transition: 'opacity 0.2s ease-in-out',
          fontWeight: 600,
          '&:hover': {  
            opacity: 0.8,
          },
        })}
      >
        {label}
      </Typography>
    ),
  };
};

export default function NavBar() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: '550px', width: '65%', m: '0 auto' }}>
      <Paper
        sx={{
          borderColor: 'divider',
          borderRadius: ' 0px 0px 10px 10px',
          boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.1)',
          pl: 2,
          pr: 2,
        }}
      >
        <Grid container justifyContent='space-between' alignItems='baseline'>
          <Grid item xs={6}>
            <Tabs variant='scrollable' value={value} onChange={handleChange} TabIndicatorProps={{sx: {background:'#000'}}}>
              <Tab label='Home' {...TabProps('Home')} />
              <Tab {...TabProps('My Scans')} />
              <Tab {...TabProps('Settings')} />
            </Tabs>
          </Grid>
          <Grid item xs='auto' alignContent='center'>
            <Box sx={{ minWidth: '250px', textAlign: 'right' }}>
              <Button
                color='success'
                variant='contained'
                sx={{
                  color: 'white',
                  borderRadius: '10px',
                  textTransform: 'none',
                  fontWeight: 400,
                  px: 3,
                  py: 1,
                }}
              >
                Process Clip
              </Button>
              <IconButton size='large' sx={{ ml: 3, background:'#E7E7E7', p:1}}>
                <BellIcon fontSize='inherit' sx={{
                  p: 0.2
                }}/>
              </IconButton>
              <DownArrowIcon sx={{
                color: '#00000054',
              }} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
