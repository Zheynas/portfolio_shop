import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface SharedStyle {
  flexColumn: ViewStyle;
  shopHeaderContainer: ViewStyle;
  shopHeaderText: TextStyle;
  flexContainer: ViewStyle;
  shopHeaderTextContainer: ViewStyle;
  icon: TextStyle;
  smallButtonContainer: ViewStyle;
  smallButtonText: TextStyle;
}

const SharedStyles: SharedStyle = {
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  flexContainer: {
    flex: 1,
  },
  shopHeaderContainer: {
    height: Measurements.shopHeaderHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  shopHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
  },
  shopHeaderTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: moderateScale(5),
  },
  icon: {
    marginTop: -5
  },
  smallButtonContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    backgroundColor: Colours.coral,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButtonText: {
    color: Colours.white,
    fontFamily: Fonts.bold,
    fontSize: FontSize.small,
  },
};

export default SharedStyles;
