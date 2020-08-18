import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/buttons/BottomButton';
import TextField from '../shared/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';
import DetailsButton from './DetailsButton';
import CheckoutNav from '../../util/enums/CheckoutNav';
import {ApplicationState} from '../../redux/types';
import {getOrFetchShippingMethods} from '../../redux/resources/shippingMethods';

const PaymentScreen = () => {
  const {navigate} = useNavigation();
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [postcode, setPostcode] = React.useState('');

  return (
    <View style={Styles.container}>
      <CheckoutNavBar currentScreen={CheckoutNav.PAYMENT} />
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
          <DetailsButton
            text={['Robert smith', '23 Nene close', 'LS83DS', '2348383472']}
          />
          <DetailsButton
            text={[
              'Standard Delivery',
              'Saturday 27 - Tuesday 30',
              'Cost: $10',
            ]}
            onPress={() => {
              navigate(Routes.SHIPPING);
            }}
          />
          <Text
            style={{
              color: Colours.black,
              fontFamily: Fonts.bold,
              fontSize: FontSize.question,
              marginTop: moderateScale(20),
            }}>
            Payment Method
          </Text>
          <DetailsButton
            text={['Select a payment method']}
            onPress={() => {
              navigate(Routes.PAYMENT_SELECTION);
            }}
          />
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
          onPress={() => {
            navigate(Routes.HOME);
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({shippingMethods}: ApplicationState) => ({
  sectionsCollection: getOrFetchShippingMethods(shippingMethods, {}),
});

export default connect(mapStateToProps)(PaymentScreen);
