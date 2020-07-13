import React from 'react';
import {TouchableOpacity, View, Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';

import {useNavigation} from '@react-navigation/native';
import {Colours} from '../../styles/Themes';
import {moderateScale} from 'react-native-size-matters';
import Styles from '../shared/SharedStyles';
import Routes from '../../routes/Routes';
/**
 * Shop header
 */
const ShopHeader = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView>
      <View style={Styles.shopHeaderContainer}>
        <TouchableOpacity
          onPress={() => {
            navigate(Routes.SECTIONS);
          }}>
          <Icon name="navicon" size={moderateScale(35)} color={Colours.coral} />
        </TouchableOpacity>
        <View style={Styles.shopHeaderTextContainer}>
          <Text style={Styles.shopHeaderText}>FASHION</Text>
        </View>

        <TouchableOpacity>
          <Icon name="search" size={moderateScale(35)} color={Colours.grey} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate(Routes.CART);
          }}>
          <Icon name="cart" size={moderateScale(35)} color={Colours.grey} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default ShopHeader;
