import React from 'react';

// Navigation
import Routes from '../../routes/Routes';
//Components
import MenuButton from '../shared/buttons/MenuButton';
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';

/**
 * Settings selection screen
 */
const SettingsScreen = () => (
  <ScreenWrapper headerText="Settings" scroll>
    <>
      <MenuButton text="Notifications" route={Routes.SETTINGS} />
      <MenuButton text="Contact Preferences" route={Routes.SETTINGS} />
    </>
  </ScreenWrapper>
);

export default SettingsScreen;
