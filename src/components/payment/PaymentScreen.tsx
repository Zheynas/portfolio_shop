import React from 'react';
import { View, Text } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Redux
import { connect } from 'react-redux';
import { ResourcesList } from 'redux-and-the-rest';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import { ApplicationState } from '../../redux/types';
import { getOrFetchShippingMethods } from '../../redux/resources/shippingMethods';
import { getOrFetchAddresses } from '../../redux/resources/shippingAddresses';
// Components
import CheckoutNavBar from '../checkout/nav/CheckoutNavBar';
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';
import Address from './items/Address';
import Payment from './items/Payment';
import Shipping from './items/Shipping';
// Util
import { ShippingAddress } from '../../models/shippingAddress';
import { ShippingMethod } from '../../models/shippingMethod';
import Payments from '../../util/data/Payments';
// Styling
import Styles from './styles/PaymentStyles';
import SharedStyles from '../shared/styles/SharedStyles';

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

/**
 * Payment details for order screen
 */
const PaymentScreen = ({
  shippingAddresses: { items: addresses },
  shippingMethods: { items: delivery },
}: Props) => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation();

  /**
   * Current order's values
   */
  // TODO: use values from order resource
  const selectedAddress = addresses[0];
  const selectedPayment = Payments[0];
  const selectedDelivery = delivery[0];

  /**
   * Buy button onPress
   */
  const onPress = () => {
    // TODO: submit order
    navigate(Routes.HOME);
  };

  return (
    <ScreenWrapper
      headerText="Complete your order"
      header={<CheckoutNavBar currentScreen={Routes.PAYMENT} />}
      topButtonOnPress={onPress}
      scroll
      topButtonText="BUY"
    >
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
