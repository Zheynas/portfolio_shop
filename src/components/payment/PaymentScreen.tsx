import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/BottomButton';
import TextField from '../shared/TextField';
import {Colours} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';

const PaymentScreen = () => {
  const {navigate} = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <CheckoutNavBar />
        <View style={Styles.scrollContainer}>
          <ScrollView style={Styles.flexContainer}>
            <View>
              <TextField label="Name" value={name} setValue={setName} />
              <TextField
                label="Phone Number"
                value={number}
                setValue={setNumber}
              />
              <TextField
                label="Address"
                value={address}
                setValue={setAddress}
              />
              <TextField
                label="Postcode"
                value={postcode}
                setValue={setPostcode}
              />
            </View>
          </ScrollView>
        </View>
        <BottomButton
          text="BUY"
          onPress={() => {
            navigate(Routes.HOME);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default PaymentScreen;
