import { Grid, Box, Paper, styled } from '@mui/material';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Main() {
  return (
    <>
      <div
        style={{
          flex: '1 1 auto',
          margin: '1em',
          // backgroundColor: 'blue',
          // flexDirection: 'row',
          // height: '80%'
        }}
      >
        <div
          className="block-1"
          style={{
            height: '100%',
            backgroundColor: 'pink',
            display: 'grid',
            gridTemplate: '85% 15% / 100%',

            // flex: '1 1 auto',
            // flexGrow: '3',
            // height: '80%'
          }}
        >
          <div
            style={{
              // height: '100%',
              backgroundColor: 'purple',
              display: 'grid',
              gridTemplate: '100% / 6fr 4fr',
            }}
          >
            <div
              style={{
                backgroundColor: 'white',
                display: 'grid',
                gridTemplate: '100% / 1fr 7fr',
              }}
            >
              <div className="left-spacer" style={{ backgroundColor: 'grey' }} />
              <div
                style={{
                  backgroundColor: 'cyan',
                  margin: '1em',
                  display: 'grid',
                  gridTemplate: '3fr 1fr 4fr / 100%',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'purple',
                    display: 'grid',
                    gridTemplate: '100% / 3fr 1fr',
                  }}
                >
                  <div style={{ backgroundColor: 'red' }} />
                  <div style={{ backgroundColor: 'cyan' }}></div>
                </div>
                <div style={{ backgroundColor: 'pink' }} />
                <div
                  style={{
                    backgroundColor: 'grey',
                    display: 'grid',
                    gridTemplate: ' repeat(4, 1fr) / 100% ',
                    paddingTop: '1em',
                  }}
                >
                  <div style={{ backgroundColor: 'purple' }}></div>
                  <div style={{ backgroundColor: 'pink' }}></div>
                  <div style={{ backgroundColor: 'purple' }}></div>
                  <div style={{ backgroundColor: 'pink' }}></div>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: 'yellow',
                display: 'grid',
                gridTemplate: '100%/ 7fr 1fr',
              }}
            >
              <div
                className="right-block-container"
                style={{
                  backgroundColor: 'pink',
                  margin: '1em',
                  display: 'grid',
                  gridTemplate: '65% 35% / 100%',
                }}
              >
                <div className="right-block-top-container" style={{ backgroundColor: 'purple' }}></div>
                <div
                  className="right-block-bot-container"
                  style={{
                    backgroundColor: 'red',
                    display: 'grid',
                    gridTemplate: '100% / repeat(2, 50%)',
                  }}
                >
                  <div
                    className="right-block-bot-left-container"
                    style={{
                      backgroundColor: 'grey',
                      display: 'grid',
                      gridTemplate: 'repeat(2, 50%) / 100%',
                    }}
                  >
                    <div className="right-block-bot-left-container-item" style={{ backgroundColor: 'cyan' }}></div>
                    <div className="right-block-bot-left-container-item" style={{ background: 'green' }}></div>
                  </div>
                  <div
                    className="right-block-bot-right-container"
                    style={{
                      backgroundColor: 'blue',
                    }}
                  ></div>
                </div>
              </div>
              <div
                className="right-spacer"
                style={{
                  backgroundColor: 'grey',
                }}
              ></div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'blue',
            }}
          />
        </div>
      </div>
    </>
  );
}
