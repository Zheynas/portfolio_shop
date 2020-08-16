import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNav from '../../util/enums/CheckoutNav';

interface Props {
  currentScreen: CheckoutNav;
}
const CheckoutNavBar = ({currentScreen}: Props) => {
  const {navigate} = useNavigation();

  return (
    <View
      style={{
        height: moderateScale(50),
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: Colours.grey,
      }}>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          navigate(Routes.CART);
        }}>
        <Text style={getTextStyle(currentScreen, CheckoutNav.CART)}>CART</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="chevron-thin-right" size={moderateScale(16)} />
      </View>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          navigate(Routes.CHECKOUT);
        }}>
        <Text style={getTextStyle(currentScreen, CheckoutNav.CHECKOUT)}>
          CHECKOUT
        </Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="chevron-thin-right" size={moderateScale(16)} />
      </View>
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        onPress={() => {
          navigate(Routes.PAYMENT);
        }}>
        <Text style={getTextStyle(currentScreen, CheckoutNav.PAYMENT)}>
          PAYMENT
        </Text>
      </TouchableOpacity>
    </View>
  );
};

function getTextStyle(currentScreen: CheckoutNav, buttonName: CheckoutNav) {
  if (currentScreen === buttonName){
    return (
      {
        color: Colours.black,
        fontFamily: Fonts.bold,
        fontSize: FontSize.footer
      }
    )
  }

  return (
    {
      color: Colours.black,
      fontFamily: Fonts.regular,
      fontSize: FontSize.footer
    }
  )
  
}

export default CheckoutNavBar;
