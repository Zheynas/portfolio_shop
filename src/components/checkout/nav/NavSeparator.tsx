import React from 'react';
import { View } from 'react-native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Styling
import { Colours, Measurements } from '../../../styles/Themes';
import SharedStyles from '../../shared/styles/SharedStyles';

/**
 * Chevron nav menu separator
 */
const NavSeparator = () => (
  <View style={SharedStyles.centered}>
    <Icon
      name="chevron-right"
      size={Measurements.navChevrons}
      color={Colours.grey}
    />
  </View>
);

export default NavSeparator;
