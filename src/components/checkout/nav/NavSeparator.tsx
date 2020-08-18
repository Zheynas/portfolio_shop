import React from 'react';
import {View} from 'react-native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Styling
import {Colours, Measurements} from '../../../styles/Themes';
import Styles from '../CheckoutStyles';

/**
 * Chevron nav menu separator
 */
const NavSeparator = () => {
  return (
    <View style={Styles.centerContainer}>
      <Icon
        name="chevron-right"
        size={Measurements.mediumIcon}
        color={Colours.grey}
      />
    </View>
  );
};

export default NavSeparator;