import React from 'react';
import { useParams } from 'react-router-dom';

import AccountSettings from './AccountSettings';
import AppearanceSettings from './AppearanceSettings';
import PerformanceSettings from './PerformanceSettings';

export default function SettingsTab() {
    const { id } = useParams<string>();
    
    switch (id) {
        case 'account':
            return <AccountSettings anonymousUsage={false} displayName={'tsundere'} />;
        case 'appearance':
            return <AppearanceSettings language={'en'} theme={'dark'} tray={true} />;
        case 'performance':
            return <PerformanceSettings startup={true} lowPower={false} reducedMotion={false} />;
        default:
            return <AccountSettings anonymousUsage={false} displayName={'tsundere'} />;   
    }
}