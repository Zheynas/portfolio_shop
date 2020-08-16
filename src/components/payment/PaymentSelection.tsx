import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import {ResourcesCollection} from 'redux-and-the-rest';
import moment from 'moment';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/BottomButton';
import TextField from '../shared/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';
import DetailsButton from './DetailsButton';
import CheckoutNav from '../../util/enums/CheckoutNav';
import {ApplicationState} from '../../redux/types';
import {getOrFetchShippingMethods} from '../../redux/resources/shippingMethods';
import {ShippingMethod} from '../../models/shippingMethod';

const PaymentSelection = () => {
  const {goBack} = useNavigation();

  return (
    <SafeAreaView style={Styles.flexContainer}>
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
              Choose Payment Method
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentSelection;
