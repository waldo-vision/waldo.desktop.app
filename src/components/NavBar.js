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
    sx: { p: 2.5 },
    disableRipple: true,
    label: (
      <Typography
        variant='body1'
        sx={(theme) => ({
          color: theme.palette.text.primary,
          textTransform: 'none',
          fontWeight: 600,
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
    <Box sx={{ minWidth: '550px', width: '60%', m: '0 auto' }}>
      <Paper
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          borderRadius: ' 0px 0px 10px 10px',
          pl: 1,
        }}
      >
        <Grid container justifyContent='space-between' alignItems='baseline'>
          <Grid item xs={6}>
            <Tabs variant='scrollable' value={value} onChange={handleChange}>
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
                }}
              >
                Process Clip
              </Button>
              <IconButton size='large' sx={{ ml: 2 }}>
                <BellIcon fontSize='inherit' />
              </IconButton>
              <DownArrowIcon sx={{ mr: 1 }} />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
