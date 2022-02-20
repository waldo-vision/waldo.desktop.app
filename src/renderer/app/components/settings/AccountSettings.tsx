import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';

import temporarySettings from './SettingsTab';

type Props = {
  anonymousUsage: boolean,
  displayName: string,
};

export default function AccountSettings(props: Props) {

  const [ allowAnonymous, setAllowAnonymous ] = useState<boolean>(props.anonymousUsage)
  const onAnonymousChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.checked ? setAllowAnonymous(true) : setAllowAnonymous(false)
    // Call the API to update the anonymous collection settings
  }

  const [ displayName, setDisplayName ] = useState<string>(props.displayName)
  const onDisplayNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Check if the display name is valid
    // Check the length 
    event.target.value.length !== 0 ? setDisplayName(event.target.value) : setDisplayName('')
    // Make sure to send the previous display name to the API

    // Call the API to update the disaply name settings

  }

  return (
    <Grid container direction="column">
      <Grid item marginBottom="2rem">
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Account
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item marginLeft="1rem" marginBottom="1rem">
            <TextField
              id="username"
              label={displayName.length > 0 ? 'Display Name' : 'Enter a valid name'}
              error={displayName.length === 0}
              type="text"
              inputProps={{ maxLength: 12 }}
              value={displayName}
              onChange={onDisplayNameChange}
              variant="outlined"
              sx={(theme) => ({
                borderColor: theme.palette.comp.settings.textField,
                minWidth: '300px',
              })}
            />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch color="primary" onChange={onAnonymousChange} checked={allowAnonymous} />}
              label="Allow WALDO to have access to your anonymous usage collection"
              labelPlacement="start"
              sx={{ userSelect: 'none' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}