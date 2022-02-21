// import { Grid, Box, Paper, styled } from '@mui/material';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

const DashboardContainer = () => {
  return (
    <>
      <div
        className="dashboard-container-grid"
        style={{
          display: 'grid',
          gridTemplate: '100% / 60% 40%',
          height: '100%',
        }}
      >
        <div
          className="dashboard-container-subcontainer-grid"
          style={{
            // backgroundColor: 'blue',
            display: 'grid',
            gridTemplate: '3fr 5fr / 100%',
            paddingBottom: '1em',
          }}
        >
          <div
            className="dashboard-container-subcontainer-subcontainer-grid"
            style={{
              display: 'grid',
              gridTemplate: '100% / 60% 40%',
            }}
          >
            <div>
              <Typography
                variant="h4"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                Welcome back,
              </Typography>
              <Typography
                variant="h5"
                sx={(theme) => ({
                  color: theme.palette.text.secondary,
                })}
              >
                Leqitside
              </Typography>
              <Typography
                variant="h6"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                })}
              >
                This is the Waldo dashboard. It helps you get a quick overview of your current scans, analytics, and
                more.
              </Typography>
            </div>
            <div
              style={{
                marginLeft: '1em',
                // marginRight: '',
              }}
            >
              <Paper
                sx={(theme) => ({
                  background: theme.palette.background.paper,
                  height: '100%',
                  borderRadius: '10px',
                })}
              >
                <Box></Box>
              </Paper>
            </div>
          </div>
          <div
            style={{
              // backgroundColor: 'pink',
              marginTop: '1em',
            }}
          >
            <Paper
              sx={(theme) => ({
                background: theme.palette.background.paper,
                height: '100%',
                borderRadius: '10px',
              })}
            >
              <Box></Box>
            </Paper>
          </div>
        </div>
        <div
          className="dashboard-container-subcontainer-grid"
          style={{
            // backgroundColor: 'cyan',
            display: 'grid',
            gridTemplate: '55% 45% / 100%',
          }}
        >
          <div />
          <div
            className="dashboard-container-subcontainer-subcontainer-grid"
            style={{
              display: 'grid',
              gridTemplate: '100% / 50% 50%',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplate: ' 50% 50% / 100%',
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

const Container = () => {
  return (
    <>
      <div
        className="container-layer-0"
        style={{
          display: 'flex',
          flex: '1 1 auto',
          padding: '2em',

          // backgroundColor: 'pink',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // gridTemplate: '85% 15% / 100%',
        }}
      >
        <div
          style={{
            // backgroundColor: 'purple',
            height: '90%',
            width: '80%',
          }}
        >
          <DashboardContainer />
        </div>
        <div style={{ backgroundColor: 'white', height: '10%', width: '100%', opacity: '0.2' }} />
      </div>
    </>
  );
};

export default function Main() {
  return (
    <>
      <Container />
    </>
  );
}
