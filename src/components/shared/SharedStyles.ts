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
  absoluteBottomButtonContainer: ViewStyle;
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
    paddingTop: moderateScale(100),
  },
  standardTopMargin: {
    marginTop: Measurements.padding,
  },
  headerText: {
    ...headerText,
    marginBottom: Measurements.padding,
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
  absoluteBottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: moderateScale(20),
  },
  bottomButtonContainer: {
    height: moderateScale(50),
  },
  bottomButton: {
    flex: 1,
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe8080',
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
