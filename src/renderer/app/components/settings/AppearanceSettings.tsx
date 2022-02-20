import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';


type Props = {
  language: string;
  theme: 'light' | 'dark';
  tray: boolean;
};

type Language = {
    value: string;
    label: string;
};

const AvailableLanguages: Language[] = [
    {
        value: 'en',
        label: 'English',
    },
    {
        value: 'fr',
        label: 'Français',
    },
    {
        value: 'de',
        label: 'Deutsch',
    },
    {
        value: 'es',
        label: 'Español',
    },
    {
        value: 'it',
        label: 'Italiano',
    },
    {
        value: 'ja',
        label: '日本語',
    },
    {
        value: 'ko',
        label: '한국어',
    }
]

export default function AppearanceSettings(props: Props) {
  const [language, setLanguage] = useState<string>(props.language);
  
  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as string);
    // Call the API to update the language settings
    
  };

  const [theme, setTheme] = useState<'light' | 'dark'>(props.theme);

  const handleThemeChange = (event: SelectChangeEvent) => {
    setTheme(event.target.value as 'light' | 'dark');
    // Call the API to update the theme settings

  };
const [tray, setTray] = useState<boolean>(props.tray);
const handleTrayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  event.target.checked ? setTray(true) : setTray(false);
  // Call the API to update the anonymous collection settings
};
  return (
    <Grid container direction="column">
      <Grid item marginBottom="2rem">
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Appearance
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item marginLeft="1rem" marginBottom="1rem">
            <FormControl sx={{ minWidth: '300px' }}>
              <InputLabel id="select-language">Select Language</InputLabel>
              <Select
                labelId="language-select-label"
                id="language-select"
                value={language}
                label="Select Language"
                onChange={handleLanguageChange}
              >
                {AvailableLanguages.map((language) => (
                  <MenuItem key={language.value} value={language.value}>
                    {language.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item marginLeft="1rem" marginBottom="1rem">
            <FormControl sx={{ minWidth: '100px' }}>
              <InputLabel id="select-theme">Select Theme</InputLabel>
              <Select
                labelId="theme-select-label"
                id="theme-select"
                value={theme}
                label="Select Theme"
                onChange={handleThemeChange}
              >
                <MenuItem value="light">Light</MenuItem>
                <MenuItem value="dark">Dark</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Switch color="primary" onChange={handleTrayChange} checked={tray} />}
              label="Minimise WALDO to system tray"
              labelPlacement="start"
              sx={{ userSelect: 'none' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
