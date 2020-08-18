import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './CheckoutStyles';
import BottomButton from '../shared/buttons/BottomButton';
import TextField from '../shared/inputs/TextField';
import {Colours} from '../../styles/Themes';
import CheckoutNavBar from './CheckoutNavBar';
import CheckoutNav from '../../util/enums/CheckoutNav';

const CheckoutScreen = () => {
  const {navigate} = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  return (
    <View style={Styles.container}>
      <CheckoutNavBar currentScreen={CheckoutNav.CHECKOUT} />
      <View style={Styles.scrollContainer}>
        <ScrollView style={Styles.flexContainer}>
          <View>
            <TextField label="Name" value={name} setValue={setName} />
            <TextField
              label="Phone Number"
              value={number}
              setValue={setNumber}
            />
            <TextField label="Address" value={address} setValue={setAddress} />
            <TextField
              label="Postcode"
              value={postcode}
              setValue={setPostcode}
            />
          </View>
        </ScrollView>
      </View>
      <BottomButton
        text="PAYMENT"
        onPress={() => {
          navigate(Routes.PAYMENT);
        }}
      />
    </View>
  );
};

export default CheckoutScreen;
