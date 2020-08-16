import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import { connect } from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/BottomButton';
import TextField from '../shared/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';
import PaymentButton from './PaymentButton';
import CheckoutNav from '../../util/enums/CheckoutNav';
import { ApplicationState } from '../../redux/types';
import {getOrFetchShippingMethods} from '../../redux/resources/shippingMethods'

const PaymentScreen = () => {
  const {navigate} = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <CheckoutNavBar currentScreen={CheckoutNav.PAYMENT}/>
        <View style={{flex: 1, padding: moderateScale(20)}}>
          <ScrollView style={{flex: 1}}>
            <Text
              style={{
                color: Colours.black,
                fontFamily: Fonts.bold,
                fontSize: FontSize.question,
              }}>
              Complete your order
            </Text>
            <PaymentButton text={["Robert smith", "23 Nene close", "LS83DS", "2348383472"]}/>
            <PaymentButton text={["Standard Delivery", "Saturday 27 - Tuesday 30", "Cost: $10"]} onPress={()=>{navigate(Routes.SHIPPING)}}/> 
            <Text
              style={{
                color: Colours.black,
                fontFamily: Fonts.bold,
                fontSize: FontSize.question,
                marginTop: moderateScale(20),
              }}>
              Payment Method
            </Text>
            <PaymentButton text={["Robert smith", "23 Nene close"]}/>
          </ScrollView>
          <View
            style={{
              height: moderateScale(60),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>Free shipping for orders over £250</Text>
          </View>
          <BottomButton
            text="BUY"
            positionIsNotAbsolute
            onPress={() => {
              navigate(Routes.HOME);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({shippingMethods}: ApplicationState) => ({
  sectionsCollection: getOrFetchShippingMethods(shippingMethods, {}),
});

export default connect(mapStateToProps)(PaymentScreen);
