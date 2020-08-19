import React from 'react';
import {View} from 'react-native';

// Navigation
import Routes from '../../../routes/Routes';
// Components
import NavSeparator from './NavSeparator';
import NavButton from './NavButton';
// Styling
import Styles from '../styles/CheckoutStyles';

interface Props {
  /**
   * Current screen
   */
  currentScreen: Routes;
}

/**
 * Checkout navigation header
 */
const CheckoutNavBar = ({currentScreen}: Props) => (
  <View style={Styles.navBarContainer}>
    <NavButton destination={Routes.CART} currentScreen={currentScreen} />
    <NavSeparator />
    <NavButton destination={Routes.CHECKOUT} currentScreen={currentScreen} />
    <NavSeparator />
    <NavButton destination={Routes.PAYMENT} currentScreen={currentScreen} />
  </View>
);

export default CheckoutNavBar;
