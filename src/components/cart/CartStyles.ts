import {
  ViewStyle,
  TextStyle,
  ImageProps,
  ImageStyle,
  StyleProp,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colours, Fonts, FontSize} from '../../styles/Themes';

export interface CartStyle {
  container: ViewStyle;
  flexContainer: ViewStyle;
  centerFlex: ViewStyle;
  noItems: TextStyle;
  image: StyleProp<ImageStyle>;
  totalContainer: ViewStyle;
  totalText: TextStyle;
  costText: TextStyle;
  productContainer: ViewStyle;
  editIconContainer: ViewStyle;
  cartItemContainer: ViewStyle;
  cartItemContentWrapper: ViewStyle;
  cartItemName: TextStyle;
  cartItemDetails: TextStyle;
  cartItemPrice: TextStyle;
  okText: TextStyle;
}

const CartStyles: CartStyle = {
  container: {
    flex: 1,
    padding: moderateScale(20),
  },
  productContainer: {
    flex: 1,
    paddingTop: moderateScale(60),
    paddingBottom: moderateScale(20),
  },
  flexContainer: {
    flex: 1,
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noItems: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
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
  totalText: {
    color: Colours.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.footer,
  },
  costText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.subheader,
  },
  editIconContainer: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
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
  cartItemName: {
    color: Colours.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.footer,
  },
  cartItemDetails: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.small,
    marginTop: moderateScale(10),
  },
  cartItemPrice: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.label,
  },
  okText: {
    color: Colours.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.label,
  },
};

export default CartStyles;
