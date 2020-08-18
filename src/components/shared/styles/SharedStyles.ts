import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../../styles/Themes';

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
  mediumText: TextStyle;
  bodyText: TextStyle;
  subheaderText: TextStyle;
  row: ViewStyle;
  containerNoHeader: ViewStyle;
  standardBottomMargin: ViewStyle;
  regularText: TextStyle;
  boldBodyText: TextStyle;
  bottomButtonMargin: ViewStyle;
}

const headerText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.bold,
  fontSize: FontSize.header,
};

const subheaderText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.bold,
  fontSize: FontSize.subheader,
};

const mediumText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.semiBold,
  fontSize: FontSize.subheader,
};

const bodyText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.regular,
  fontSize: FontSize.footer,
};

const regularText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.regular,
  fontSize: FontSize.small,
};

const standardContainer: ViewStyle = {
  flex: 1,
  padding: Measurements.padding,
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
    ...standardContainer,
    paddingTop: moderateScale(80),
  },
  containerNoHeader: {
    ...standardContainer,
  },
  standardTopMargin: {
    marginTop: Measurements.padding,
  },
  standardBottomMargin: {
    marginBottom: Measurements.padding,
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
  },
  bottomButtonText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
  },
  bottomButtonMargin:{
    marginTop: Measurements.padding
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subheaderText: {
    ...subheaderText,
  },
  mediumText: {
    ...mediumText,
  },
  bodyText: {
    ...bodyText,
  },
  regularText: {
    ...regularText,
  },
  boldBodyText: {
    ...bodyText,
    fontFamily: Fonts.bold,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
};

export default SharedStyles;
