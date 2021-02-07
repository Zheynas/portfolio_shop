import { ViewStyle, TextStyle, ImageStyle, StyleProp } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { Colours } from '../../../styles/Themes';
import SharedStyles from '../../shared/styles/SharedStyles';

export interface CartStyle {
  image: StyleProp<ImageStyle>;
  totalContainer: ViewStyle;
  productContainer: ViewStyle;
  editIconContainer: ViewStyle;
  cartItemContainer: ViewStyle;
  cartItemContentWrapper: ViewStyle;
  cartItemDetails: TextStyle;
  selector: ViewStyle;
}

const CartStyles: CartStyle = {
  productContainer: {
    flex: 1,
    paddingTop: moderateScale(60),
    paddingBottom: moderateScale(20),
  },
  image: {
    width: '30%',
    height: '100%',
  },
  totalContainer: {
    height: moderateScale(60),
    borderTopWidth: 1,
    borderColor: Colours.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editIconContainer: {
    position: 'absolute',
    top: moderateScale(20),
    right: moderateScale(15),
  },
  cartItemContainer: {
    height: moderateScale(200),
    borderColor: Colours.grey,
    flexDirection: 'row',
    padding: moderateScale(10),
  },
  cartItemContentWrapper: {
    flexDirection: 'column',
    flex: 1,
    padding: moderateScale(10),
    paddingLeft: moderateScale(20),
    justifyContent: 'space-between',
  },
  cartItemDetails: {
    ...SharedStyles.regularText,
    marginTop: moderateScale(10),
  },
  selector: {
    width: moderateScale(40),
    ...SharedStyles.centered,
  },
};

export default CartStyles;
