import React from 'react';
// Navigation
import { useNavigation } from '@react-navigation/native';

// Navigation
import Routes from '../../routes/Routes';
// Components
import CheckoutNavBar from './nav/CheckoutNavBar';
import DisplayAddresses from '../shared/addresses/DisplayAddresses';

/**
 * Checkout shipping address screen
 */
const CheckoutScreen = () => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation();

  // TODO: Stop users that are not logged in from progressing
  return (
    <DisplayAddresses
      headerText="Select Address"
      header={<CheckoutNavBar currentScreen={Routes.CHECKOUT} />}
      addressOnPress={(id: string) => {
        // TODO: Save id on current order resource
        navigate(Routes.PAYMENT);
      }}
    />
  );
};

export default CheckoutScreen;
