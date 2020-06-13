import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

import Styles from './HeaderStyles';
import {Colours, Measurements} from '../../styles/Themes';

/**
 * Common empty header with back button.
 */
const Header = () => {
  const {goBack} = useNavigation();

  return (
    <View style={{height: Measurements.headerHeight}}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
        style={Styles.backButton}>
        <Icon
          name="ios-arrow-round-back"
          size={Measurements.headerHeight}
          color={Colours.grey}
        />
      </TouchableOpacity>
    </View>
  );
};
export default Header;
