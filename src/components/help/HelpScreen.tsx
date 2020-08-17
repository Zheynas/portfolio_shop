import React from 'react';
import {View, Text} from 'react-native';

import Routes from '../../routes/Routes';
import MenuButton from '../menu/MenuButton';
import Styles from './HelpStyles';

const HelpScreen = () => {
  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.nameText}>Help</Text>
      </View>
      <View style={Styles.buttonContainer}>
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
      </View>
    </View>
  );
};

export default HelpScreen;
