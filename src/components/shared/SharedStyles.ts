import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface SharedStyle {
  appContainer: ViewStyle;
  flexColumn: ViewStyle;
  shopHeaderContainer: ViewStyle;
  shopHeaderText: TextStyle;
  flexContainer: ViewStyle;
  shopHeaderTextContainer: ViewStyle;
  icon: TextStyle;
  smallButtonContainer: ViewStyle;
  smallButtonText: TextStyle;
  bottomButton: ViewStyle;
  bottomButtonText: TextStyle;
  bottomButtonContainer: ViewStyle;
  headerText: TextStyle;
  container: ViewStyle;
  standardTopMargin: ViewStyle;
  centeredContainer: ViewStyle;
}

const headerText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.bold,
  fontSize: FontSize.header,
};

const SharedStyles: SharedStyle = {
  appContainer: {
    flex: 1,
    backgroundColor: Colours.backgroundLight,
  },
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: Measurements.padding,
    paddingTop: moderateScale(80),
  },
  standardTopMargin: {
    marginTop: Measurements.padding,
  },
  headerText: {
    ...headerText,
    marginBottom: moderateScale(30),
  },
  shopHeaderContainer: {
    height: Measurements.shopHeaderHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(5),
  },
  shopHeaderText: {
    ...headerText,
  },
  shopHeaderTextContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: moderateScale(5),
  },
  icon: {
    marginTop: -5,
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
  bottomButtonContainer: {
    height: moderateScale(50),
  },
  bottomButton: {
    height: moderateScale(50),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Measurements.padding,
  },
  bottomButtonText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default SharedStyles;
