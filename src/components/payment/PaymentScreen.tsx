import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import {ResourcesList} from 'redux-and-the-rest';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/buttons/BottomButton';
import TextField from '../shared/inputs/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/nav/CheckoutNavBar';
import DetailsButton from '../shared/buttons/DetailsButton';
import {ApplicationState} from '../../redux/types';
import {getOrFetchShippingMethods} from '../../redux/resources/shippingMethods';
import {getOrFetchAddresses} from '../../redux/resources/shippingAddresses';
import AddressButton from '../shared/buttons/AddressButton';
import {ShippingAddress} from '../../models/shippingAddress';
import SharedStyles from '../shared/styles/SharedStyles';
import {ShippingMethod} from 'src/models/shippingMethod';
import DeliveryButton from '../shared/buttons/DeliveryButton';
import InfoButton from '../shared/buttons/InfoButton';
import Payments from '../../util/Payments';
import MenuButton from '../shared/buttons/MenuButton';
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';
import Address from './items/Address';
import Payment from './items/Payment';
import Shipping from './items/Shipping';

interface Props {
  /**
   * User's shipping addresses
   */
  shippingAddresses: ResourcesList<ShippingAddress>;
  /**
   * Avaliable shipping methods
   */
  shippingMethods: ResourcesList<ShippingMethod>;
}

const PaymentScreen = ({
  shippingAddresses: {items: addresses},
  shippingMethods: {items: delivery},
}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * Current order's values
   */
  // TODO: use values from order resource
  const selectedAddress = addresses[0];
  const selectedPayment = Payments[0];
  const selectedDelivery = delivery[0];

  return (
    <ScreenWrapper
      headerText="Complete your order"
      header={<CheckoutNavBar currentScreen={Routes.PAYMENT} />}
      topButtonOnPress={() => {
        navigate(Routes.HOME);
      }}
      scroll
      topButtonText="BUY">
      <>
        <Address address={selectedAddress} />
        <Shipping shipping={selectedDelivery} />
        <Payment payment={selectedPayment} />
        <View style={Styles.freeShippingContainer}>
          <Text style={SharedStyles.bodyText}>
            Free shipping for orders over £250
          </Text>
        </View>
      </>
    </ScreenWrapper>
  );
};

const mapStateToProps = ({
  shippingAddresses,
  shippingMethods,
}: ApplicationState) => ({
  shippingAddresses: getOrFetchAddresses(shippingAddresses),
  shippingMethods: getOrFetchShippingMethods(shippingMethods, {}),
});

export default connect(mapStateToProps)(PaymentScreen);
