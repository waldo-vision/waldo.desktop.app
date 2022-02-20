import React, {useState} from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Routes, Route, Link } from 'react-router-dom';
import SettingsTab from '../components/settings/SettingsTab';
import SettingsLeftNavigation from '../components/settings/SettingsLeftNavigation';

export default function Settings() {
  return (
    <Box width='90%' marginX='auto' marginY="5%" height='80%'>
      <Paper elevation={0} sx={(theme) => ({ background: theme.palette.comp.settings.bg, height: '70vh'})}>
        <Grid container width="100%" height="100%" direction='row' p='2rem'>
          <Grid item width="20%" pr='2rem'>
            <SettingsLeftNavigation />
          </Grid>
          <Grid item width="80%">
            <Paper sx={(theme) => ({ background: theme.palette.background.paper, height:'100%', p:'2rem' })}>
              <Routes>
                <Route path="/" element={<SettingsTab />} />
                <Route path="/:id" element={<SettingsTab />} />
              </Routes>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}