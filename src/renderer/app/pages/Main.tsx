// import { Grid, Box, Paper, styled } from '@mui/material';
import React from 'react';

const DashboardContainer = () => {
  return (
    <>
      <div
        className="dashboard-container-grid"
        style={{
          display: 'grid',
          gridTemplate: '100% / 55% 45%',
          height: '100%',
        }}
      >
        <div
          className="dashboard-container-subcontainer-grid"
          style={{
            backgroundColor: 'blue',
            display: 'grid',
            gridTemplate: '3fr 1fr 4fr / 100%',
          }}
        >
          <div
            className="dashboard-container-subcontainer-subcontainer-grid"
            style={{
              display: 'grid',
              gridTemplate: '100% / 60% 40%',
            }}
          ></div>
        </div>
        <div
          className="dashboard-container-subcontainer-grid"
          style={{
            backgroundColor: 'cyan',
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
        <div style={{ backgroundColor: 'purple', height: '90%', width: '80%' }}>
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
