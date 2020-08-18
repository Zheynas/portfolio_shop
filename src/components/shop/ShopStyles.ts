import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface ShopStyle {
  container: ViewStyle;
  headerText: TextStyle;
  categoryText: TextStyle;
  categoryScrollContainer: ViewStyle;
  productHeaderText: TextStyle;
  priceContainer: ViewStyle;
  productInfoContainer: ViewStyle;
  priceText: TextStyle;
  productDescriptionText: TextStyle;
  orderText: TextStyle;
  productLengthText: TextStyle;
}

const ShopStyles: ShopStyle = {
  container: {
    flex: 1,
    paddingTop: Measurements.shopHeaderHeight,
  },
  headerText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
  },
  categoryText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.label,
    marginTop: moderateScale(15),
  },
  categoryScrollContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  productHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.subheader,
    marginBottom: moderateScale(10),
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: moderateScale(10),
    alignItems: 'center',
  },
  productInfoContainer: {
    height: moderateScale(200),
    padding: moderateScale(10),
  },
  priceText: {
    color: Colours.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.label,
    marginRight: moderateScale(20),
  },
  productDescriptionText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
  },



  orderText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
  },
  productLengthText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
    marginBottom: moderateScale(20),
  },

};

export default ShopStyles;
