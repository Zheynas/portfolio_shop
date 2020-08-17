import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import {ResourcesList} from 'redux-and-the-rest';
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

interface Props {
  /**
   * Collection of sections
   */
  shippingCollection: ResourcesList<ShippingMethod>;
}

const ShippingSelection = ({shippingCollection: {items}}: Props) => {
  const {goBack} = useNavigation();

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
            Choose shipping methods
          </Text>
          {items.map(({values}) => {
            const {id} = values;
            return (
              <DetailsButton
                text={generateTextForMethod(values)}
                key={id}
                onPress={goBack}
              />
            );
          })}
        </ScrollView>
        <View
          style={{
            height: moderateScale(60),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Free shipping for orders over £250</Text>
        </View>
      </View>
    </View>
  );
};

function generateTextForMethod({name, minDays, maxDays, cost}: ShippingMethod) {
  const minDay = moment().add(minDays, 'days').format('Do MMM');
  const maxDay = moment().add(maxDays, 'days').format('Do MMM');
  const text = [name, `${minDay} - ${maxDay}`, `Cost: £${cost}`];

  return text;
}

const mapStateToProps = ({shippingMethods}: ApplicationState) => ({
  shippingCollection: getOrFetchShippingMethods(shippingMethods, {}),
});

export default connect(mapStateToProps)(ShippingSelection);
