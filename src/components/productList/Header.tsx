import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Components
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

// Styling
import Styles from './styles/ProductListStyles';
import { Measurements, Colours } from '../../styles/Themes';
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Title to display
   */
  title: string;
}

/**
 * Product list header
 */
const Header = ({ title }: Props) => {
  /**
   * Navigation
   */
  const { goBack } = useNavigation();

  /**
   * Filter onPress
   */
  const filterOnPress = () => {
    // TODO: Make filter work
    console.log('filter pressed');
  };

  return (
    <View style={Styles.header}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <Icon
          name="ios-arrow-round-back"
          size={Measurements.headerHeight}
          color={Colours.grey}
        />
      </TouchableOpacity>
      <View style={SharedStyles.centeredContainer}>
        <Text style={SharedStyles.headerText}>{title}</Text>
      </View>
      <TouchableOpacity onPress={filterOnPress}>
        <FeatherIcon
          name="filter"
          size={Measurements.smallIcon}
          color={Colours.grey}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
