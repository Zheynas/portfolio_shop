import React from 'react';

// Navigation
import Routes from '../../routes/Routes';
//Components
import MenuButton from '../shared/buttons/MenuButton';
import ScreenWrapper from '../shared/ScreenWrapper';

/**
 * Settings selection screen
 */
const SettingsScreen = () => (
  <ScreenWrapper header="Settings" scroll>
    <>
      <MenuButton text="Notifications" route={Routes.SETTINGS} />
      <MenuButton text="Contact Preferences" route={Routes.SETTINGS} />
    </>
  </ScreenWrapper>
);

export default SettingsScreen;
