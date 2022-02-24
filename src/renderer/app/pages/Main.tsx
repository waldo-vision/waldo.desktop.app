// import { Grid, Box, Paper, styled } from '@mui/material';
import { Box, Paper, Typography, Grid } from '@mui/material';
import React from 'react';

const DashboardContainer = () => {
  return (
    <>
      <Grid
        className="dashboard-container-grid"
        style={{
          display: 'grid',
          gridTemplate: '100% / 60% 40%',
          height: '100%',
        }}
      >
        <Grid
          className="dashboard-container-subcontainer-grid"
          style={{
            // backgroundColor: 'blue',
            display: 'grid',
            gridTemplate: '3fr 5fr / 100%',
            paddingBottom: '1em',
          }}
        >
          <Grid
            className="dashboard-container-subcontainer-subcontainer-grid"
            style={{
              display: 'grid',
              gridTemplate: '100% / 60% 40%',
            }}
          >
            <Grid>
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
                Username
              </Typography>
              <Typography
                variant="body1"
                sx={(theme) => ({
                  color: theme.palette.text.primary,
                  mt: '2em',
                })}
              >
                This is the Waldo dashboard. It helps you get a quick overview of your current scans, analytics, and
                more.
              </Typography>
            </Grid>
            <Grid
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
                <Box
                  sx={(theme) => ({
                    height: '100%',
                  })}
                >
                  <Grid
                    style={{
                      display: 'grid',
                      gridTemplate: '1fr 5fr / 100%',
                      height: '100%',
                      padding: '1em',
                    }}
                  >
                    <Grid>
                      <Typography>Pending Scans</Typography>
                      {/* <Typography>Up to 4 pending videos at a time</Typography> */}
                    </Grid>
                    <Grid></Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <Grid
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
          </Grid>
        </Grid>
        <Grid
          className="dashboard-container-subcontainer-grid"
          style={{
            // backgroundColor: 'cyan',
            display: 'grid',
            gridTemplate: '55% 45% / 100%',
          }}
        >
          <Grid />
          <Grid
            className="dashboard-container-subcontainer-subcontainer-grid"
            style={{
              display: 'grid',
              gridTemplate: '100% / 50% 50%',
            }}
          >
            <Grid
              style={{
                display: 'grid',
                gridTemplate: ' 50% 50% / 100%',
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const Container = () => {
  return (
    <>
      <Grid
        className="container-layer-0"
        style={{
          display: 'flex',
          flex: '1 1 auto',
          padding: '4rem',

          // backgroundColor: 'pink',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
          // gridTemplate: '85% 15% / 100%',
        }}
      >
        <Grid
          style={{
            // backgroundColor: 'purple',
            height: '90%',
            width: '85%',
          }}
        >
          <DashboardContainer />
        </Grid>
        <Grid container height='10%' width='100%' >
          <Paper sx={(theme) => ({ height: '100%', width: '100%', backgroundColor: theme.palette.background.paper})}>
          </Paper>
        </Grid>
      </Grid>
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
