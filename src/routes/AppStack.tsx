import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ResourcesItem, isSuccessfullyFetched} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import {NavigationParamList} from 'NavigationTypes';
import Routes from './Routes';
import HomeScreen from '../components/home/HomeScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/register/RegisterScreen';
import MenuScreen from '../components/menu/MenuScreen';
import Header from '../components/headers/Header';
import SectionScreen from '../components/sections/SectionScreen';
import SubSectionsScreen from '../components/subSections/SubSectionsScreen';
import ShopScreen from '../components/shop/ProductCategoryScreen';
import ShopHeader from '../components/headers/ShopHeader';
import ProductListScreen from '../components/productList/ProductListScreen';
import ProductScreen from '../components/shop/ProductScreen';
import CartScreen from '../components/cart/CartScreen';
import CheckoutScreen from '../components/checkout/CheckoutScreen';
import PaymentScreen from '../components/payment/PaymentScreen';
import ShippingSelection from '../components/payment/selection/SelectDelivery';
import PaymentSelection from '../components/payment/selection/SelectPayment';
import ProfileScreen from '../components/profile/ProfileScreen';
import ChangeEmailScreen from '../components/credentials/ChangeEmailScreen';
import ChangePasswordScreen from '../components/credentials/ChangePasswordScreen';
import ShippingAddressesScreen from '../components/addresses/AddressBook';
import EditAddress from '../components/addresses/EditAddress';
import NewAddress from '../components/addresses/NewAddress';
import HelpScreen from '../components/help/HelpScreen';
import InformationScreen from '../components/help/InformationScreen';
import SettingsScreen from '../components/settings/SettingsScreen';
import ContactScreen from '../components/contact/ContactScreen';
import {getUser} from '../redux/resources/user';
import {ApplicationState} from '../redux/types';
import {User} from '../models/user';
import OrderHistory from '../components/history/OrderHistory';
import SelectAddress from '../components/payment/selection/SelectAddress';
import SelectDelivery from '../components/payment/selection/SelectDelivery';

const RootStack = createStackNavigator<NavigationParamList>();
const DEFAULT_ROOT = Routes.HOME;

interface Props {
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
}

const AppStack = ({currentUserItem}: Props) => {
  const isLoggedIn = isSuccessfullyFetched(currentUserItem);

  return (
    <RootStack.Navigator
      initialRouteName={DEFAULT_ROOT}
      screenOptions={() => ({
        headerTransparent: true,
        animationEnabled: false,
        header: () => <Header />,
      })}>
      <RootStack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          header: () => null,
        }}
      />
      {!isLoggedIn && (
        <>
          <RootStack.Screen name={Routes.LOGIN} component={LoginScreen} />
          <RootStack.Screen name={Routes.REGISTER} component={RegisterScreen} />
        </>
      )}

      {isLoggedIn && (
        <>
          <RootStack.Screen name={Routes.SETTINGS} component={SettingsScreen} />
          <RootStack.Screen name={Routes.PROFILE} component={ProfileScreen} />
          <RootStack.Screen
            name={Routes.CHANGE_EMAIL}
            component={ChangeEmailScreen}
          />
          <RootStack.Screen
            name={Routes.CHANGE_PASSWORD}
            component={ChangePasswordScreen}
          />
          <RootStack.Screen
            name={Routes.SHIPPING_ADDRESSES}
            component={ShippingAddressesScreen}
          />
          <RootStack.Screen
            name={Routes.EDIT_ADDRESS}
            component={EditAddress}
          />
          <RootStack.Screen name={Routes.NEW_ADDRESS} component={NewAddress} />
          <RootStack.Screen
            name={Routes.ORDER_HISTORY}
            component={OrderHistory}
          />
          <RootStack.Screen
            name={Routes.CHANGE_ADDRESS}
            component={SelectAddress}
          />
        </>
      )}

      <RootStack.Screen
        name={Routes.SHOP}
        component={ShopScreen}
        options={{
          header: () => <ShopHeader />,
        }}
      />
      <RootStack.Screen
        name={Routes.PRODUCT_LIST}
        component={ProductListScreen}
        options={{
          header: () => null,
        }}
      />
      <RootStack.Screen
        name={Routes.PRODUCT}
        component={ProductScreen}
        options={{
          header: () => null,
        }}
      />
      <RootStack.Screen name={Routes.CONTACT_US} component={ContactScreen} />
      <RootStack.Screen name={Routes.HELP_INFO} component={InformationScreen} />

      <RootStack.Screen name={Routes.HELP} component={HelpScreen} />

      <RootStack.Screen name={Routes.MENU} component={MenuScreen} />
      <RootStack.Screen name={Routes.CHECKOUT} component={CheckoutScreen} />
      <RootStack.Screen name={Routes.PAYMENT} component={PaymentScreen} />
      <RootStack.Screen name={Routes.SHIPPING} component={SelectDelivery} />

      <RootStack.Screen
        name={Routes.PAYMENT_SELECTION}
        component={PaymentSelection}
      />
      <RootStack.Screen
        name={Routes.CART}
        component={CartScreen}
        options={{
          header: () => <Header title="Cart" />,
        }}
      />
      <RootStack.Screen
        name={Routes.SECTIONS}
        component={SectionScreen}
        options={{
          header: () => null,
        }}
      />
      <RootStack.Screen
        name={Routes.SUB_SECTIONS}
        component={SubSectionsScreen}
        options={{
          header: () => <ShopHeader />,
        }}
      />
    </RootStack.Navigator>
  );
};

const mapStateToProps = ({users}: ApplicationState) => ({
  currentUserItem: getUser(users),
});

export default connect(mapStateToProps)(AppStack);
