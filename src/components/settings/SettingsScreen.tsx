import React from 'react';
import {View, Text} from 'react-native';

import Routes from '../../routes/Routes';
import MenuButton from '../menu/MenuButton';
import Styles from './SettingsStyle';

const SettingsScreen = () => {
  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.nameText}>Settings</Text>
      </View>
      <View style={Styles.buttonContainer}>
        <MenuButton text="Notifications" route={Routes.SETTINGS} />
        <MenuButton text="Contact Preferences" route={Routes.SETTINGS} />
      </View>
    </View>
  );
};

export default SettingsScreen;
