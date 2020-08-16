import {StackNavigationProp} from '@react-navigation/stack';
import { ImageSourcePropType } from 'react-native';

import Routes from './src/routes/Routes';

export type StackNavigationList = StackNavigationProp<NavigationParamList>;

export interface NavigationProperties {
  /**
   * Standard navigation used by components
   */
  navigation: StackNavigationList;
}

/**
 * Any route parameters need to be added to this file to be typed with react-navigation.
 */
export type NavigationParamList = {
  [Routes.HOME]: undefined;
  [Routes.LOGIN]: undefined;
  [Routes.REGISTER]: undefined;
  [Routes.SHOP]: {
    categoryId: string;
  };
  [Routes.SECTIONS]: undefined;
  [Routes.MENU]: undefined;
  [Routes.PRODUCT_LIST]: {
    id: string;
    title: string;
  };
  [Routes.PRODUCT]: {
    productId: string;
  };
  [Routes.SUB_SECTIONS]: {
    sectionId: string;
  };
  [Routes.CART]: undefined;
  [Routes.CHECKOUT]: undefined;
  [Routes.PAYMENT]: undefined;
  [Routes.SHIPPING]: undefined;
};
