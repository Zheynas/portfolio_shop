import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../routes/Routes';
// Components
import CheckoutNavBar from './nav/CheckoutNavBar';
// Styling
import DisplayAddresses from '../addresses/DisplayAddresses';

/**
 * Checkout shipping address screen
 */
const CheckoutScreen = () => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  return (
    <DisplayAddresses
      header={<CheckoutNavBar currentScreen={Routes.CHECKOUT} />}
      addressOnPress={(id: string) => {
        navigate(Routes.PAYMENT, {shippingAddressId: id});
      }}
    />
  );
};

export default CheckoutScreen;
