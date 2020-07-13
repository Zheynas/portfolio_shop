import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './CheckoutStyles';
import BottomButton from '../shared/BottomButton';
import TextField from '../shared/TextField';
import { Colours } from '../../styles/Themes';

const CheckoutNavBar = () => {
  const {navigate} = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  return (
    <View
      style={{
        height: moderateScale(50),
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth:1,
        borderColor: Colours.grey
      }}>
      <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigate(Routes.CART)}}>
        <Text>CART</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="chevron-thin-right" size={moderateScale(16)} />
      </View>
      <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigate(Routes.CHECKOUT)}}>
        <Text>CHECKOUT</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon name="chevron-thin-right" size={moderateScale(16)} />
      </View>
      <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} onPress={()=>{navigate(Routes.PAYMENT)}}>
        <Text>PAYMENT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutNavBar;
