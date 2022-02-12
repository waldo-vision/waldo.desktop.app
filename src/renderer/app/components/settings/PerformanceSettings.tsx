import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';


type Props = {
  startup: boolean;
  lowPower: boolean;
  reducedMotion: boolean;
};

export default function PerformanceSettings(props: Props) {
  const [ startupOnBoot, setStartupOnBoot ] = useState<boolean>(props.startup);
  const handleStartup = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setStartupOnBoot(true) : setStartupOnBoot(false);
    // Call the API to update the anonymous collection settings
  };
  const [ lowPowerMode, setLowPowerMode] = useState<boolean>(props.lowPower);
  const handleLowPowermode = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setLowPowerMode(true) : setLowPowerMode(false);
    // Call the API to update the anonymous collection settings
  };
  const [reducedMotion, setReducedMotion] = useState<boolean>(props.reducedMotion);
  const handleReducedMotion = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setReducedMotion(true) : setReducedMotion(false);
    // Call the API to update the anonymous collection settings
  };

  return (
    <Grid container direction="column">
      <Grid item marginBottom="2rem">
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Performance
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <FormControlLabel
              control={<Switch color="primary" onChange={handleStartup} checked={startupOnBoot} />}
              label="Open on startup"
              labelPlacement="start"
              sx={{ userSelect: 'none' }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch color="primary" onChange={handleLowPowermode} checked={lowPowerMode} />}
              label="Enable low power usage"
              labelPlacement="start"
              sx={{ userSelect: 'none' }}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch color="primary" onChange={handleReducedMotion} checked={reducedMotion} />}
              label="Reduce animations"
              labelPlacement="start"
              sx={{ userSelect: 'none' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}