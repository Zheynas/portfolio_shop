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
import ShopScreen from '../components/shop/ProductCategoryScreen';
import ShopHeader from '../components/headers/ShopHeader';
import ProductListScreen from '../components/shop/ProductListScreen';
import ProductScreen from '../components/shop/ProductScreen';

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
    <RootStack.Screen
      name={Routes.SECTIONS}
      component={SectionScreen}
      options={{
        header: () => null,
      }}
    />
  </RootStack.Navigator>
);

export default QboxStack;
