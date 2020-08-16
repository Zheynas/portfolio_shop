import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {NavigationParamList} from 'NavigationTypes';
import Routes from './Routes';
import HomeScreen from '../components/home/HomeScreen';
import LoginScreen from '../components/login/LoginScreen';
import RegisterScreen from '../components/onboarding/RegisterScreen';
import MenuScreen from '../components/menu/MenuScreen';
import Header from '../components/headers/Header';
import SectionScreen from '../components/sections/SectionScreen';
import SubSectionsScreen from '../components/subSections/SubSectionsScreen';
import ShopScreen from '../components/shop/ProductCategoryScreen';
import ShopHeader from '../components/headers/ShopHeader';
import ProductListScreen from '../components/shop/ProductListScreen';
import ProductScreen from '../components/shop/ProductScreen';
import CartScreen from '../components/cart/CartScreen';
import CheckoutScreen from '../components/checkout/CheckoutScreen';
import PaymentScreen from '../components/payment/PaymentScreen';
import ShippingSelection from '../components/payment/ShippingSelection';

const RootStack = createStackNavigator<NavigationParamList>();
const DEFAULT_ROOT = Routes.HOME;

const QboxStack = () => (
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
    <RootStack.Screen name={Routes.LOGIN} component={LoginScreen} />
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
    <RootStack.Screen name={Routes.REGISTER} component={RegisterScreen} />
    <RootStack.Screen name={Routes.MENU} component={MenuScreen} />
    <RootStack.Screen name={Routes.CHECKOUT} component={CheckoutScreen} />
    <RootStack.Screen name={Routes.PAYMENT} component={PaymentScreen} />
    <RootStack.Screen name={Routes.SHIPPING} component={ShippingSelection} />
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

export default QboxStack;
