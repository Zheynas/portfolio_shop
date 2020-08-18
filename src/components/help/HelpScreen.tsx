import React from 'react';

// Navigation
import Routes from '../../routes/Routes';
// Components
import MenuButton from '../shared/buttons/MenuButton';
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';

const HelpScreen = () => (
  <ScreenWrapper header="Help" scroll>
    <>
      <MenuButton
        text="Buy Guide"
        route={Routes.HELP_INFO}
        params={{header: 'Buy Guide'}}
      />
      <MenuButton
        text="General Information"
        route={Routes.HELP_INFO}
        params={{header: 'General Information'}}
      />
      <MenuButton
        text="Payment"
        route={Routes.HELP_INFO}
        params={{header: 'Payment'}}
      />
      <MenuButton
        text="Shipping"
        route={Routes.HELP_INFO}
        params={{header: 'Shipping'}}
      />
      <MenuButton
        text="Return"
        route={Routes.HELP_INFO}
        params={{header: 'Return'}}
      />
      <MenuButton
        text="Exchanges"
        route={Routes.HELP_INFO}
        params={{header: 'Exchanges'}}
      />
      <MenuButton
        text="Recalled Items"
        route={Routes.HELP_INFO}
        params={{header: 'Recalled Items'}}
      />
    </>
  </ScreenWrapper>
);
export default HelpScreen;
