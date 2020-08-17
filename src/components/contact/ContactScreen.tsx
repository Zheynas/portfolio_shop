import React from 'react';
import {View, Text} from 'react-native';

import Routes from '../../routes/Routes';
import MenuButton from '../menu/MenuButton';
import Styles from './ContactStyles';

const ContactScreen = () => {
  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.nameText}>Contact us</Text>
      </View>
    </View>
  );
};

export default ContactScreen;