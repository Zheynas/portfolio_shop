import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Navigation
import Routes from '../../routes/Routes';
// Styling
import {Colours, Measurements} from '../../styles/Themes';
import Styles from '../shared/styles/SharedStyles';

/**
 * Shop header
 */
const ShopHeader = () => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  return (
    <View style={Styles.shopHeaderContainer}>
      <TouchableOpacity
        onPress={() => {
          navigate(Routes.SECTIONS);
        }}>
        <Icon
          name="navicon"
          size={Measurements.mediumIcon}
          color={Colours.coral}
        />
      </TouchableOpacity>

      <View style={Styles.shopHeaderTextContainer}>
        <Text style={Styles.shopHeaderText}>FASHION</Text>
      </View>

      <TouchableOpacity>
        <Icon
          name="search"
          size={Measurements.mediumIcon}
          color={Colours.grey}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigate(Routes.CART);
        }}>
        <Icon name="cart" size={Measurements.mediumIcon} color={Colours.grey} />
      </TouchableOpacity>
    </View>
  );
};
export default ShopHeader;
