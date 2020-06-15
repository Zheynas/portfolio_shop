import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface ShopStyle {
  container: ViewStyle;
  headerText: TextStyle;
  categoryText: TextStyle;
  flexContainer: ViewStyle;
  categoryScrollContainer: ViewStyle;
  centerContainer: ViewStyle;
  columnContainer: ViewStyle;
  flexColumn: ViewStyle;
  flexRow: ViewStyle;
  spacerContainer: ViewStyle;
  gridContainer: ViewStyle;
  image: StyleProp<ImageStyle>;
  smallTextWrapper: ViewStyle;
  subheaderText: TextStyle;
  largeTextWrapper: ViewStyle;
  gridHeaderText: TextStyle;
  productHeaderText: TextStyle;
  priceContainer: ViewStyle;
  productInfoContainer: ViewStyle;
  priceText: TextStyle;
  productDescriptionText: TextStyle;
  orderBar: ViewStyle;
  orderIconWrapper: ViewStyle;
  orderTextContainer: ViewStyle;
  orderText: TextStyle;
  productScrollContainer: TextStyle;
  productLengthText: TextStyle;
  productListHeader: ViewStyle;
  centerFlex: ViewStyle;
  productListHeaderText: TextStyle;
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
  flexContainer: {
    flex: 1,
  },
  categoryScrollContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: moderateScale(20),
  },
  spacerContainer: {
    width: moderateScale(10),
  },
  gridContainer: {
    height: moderateScale(500),
    flexDirection: 'column',
  },
  smallTextWrapper: {
    height: moderateScale(50),
    flexDirection: 'column',
    paddingLeft: moderateScale(10),
  },
  gridHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.small,
  },
  subheaderText: {
    color: Colours.black,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.small,
  },
  largeTextWrapper: {
    height: moderateScale(50),
    flexDirection: 'column',
    alignItems: 'center',
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
  orderBar: {
    height: moderateScale(50),
    borderBottomWidth: 1,
    borderColor: Colours.grey,
    flexDirection: 'row',
  },
  orderIconWrapper: {
    width: moderateScale(40),
  },
  orderTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  orderText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
  },
  productScrollContainer: {
    flex: 1,
    paddingTop: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  productLengthText: {
    color: Colours.black,
    fontFamily: Fonts.regular,
    fontSize: FontSize.footer,
    marginBottom: moderateScale(20),
  },
  productListHeader: {
    height: Measurements.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productListHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.question,
  },
};

export default ShopStyles;
