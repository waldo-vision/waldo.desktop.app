import React, { useState } from 'react';
import Tabs, { TabsActions, TabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

type SettingsTabListTypes = {
  label: string;
  path: string;
}

const SettingsTabList: SettingsTabListTypes[] = [
  {
    label: 'Account',
    path: '/settings/account',
  },
  {
    label: 'Appearance',
    path: '/settings/appearance',
  },
  {
    label: 'Performance',
    path: '/settings/performance',
  }
]

export default function SettingsLeftNavigation() {
  const [windowPage, setWindowPage] = useState<number>(0);

  const handleChange = (_: any, newValue: React.SetStateAction<number>) => {
    setWindowPage(newValue);
  };
  return (
    <Tabs
      value={windowPage}
      orientation="vertical"
      variant="fullWidth"
      onChange={handleChange}
      
    >
      {SettingsTabList.map((tab, index) => (
        <Tab
          disableRipple
          key={index}
          component={Link}
          to={tab.path}
          label={
            <Typography 
              variant="body1" 
              sx={{ 
                textTransform: 'none',
                fontWeight: 'bold',
              }}
            >
                  {tab.label}
            </Typography>
          }
        />
      ))}
    </Tabs>
  );
}