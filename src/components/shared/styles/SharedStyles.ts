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
  headerText: TextStyle;
  container: ViewStyle;
  topMargin: ViewStyle;
  centeredContainer: ViewStyle;
  mediumText: TextStyle;
  bodyText: TextStyle;
  subheaderText: TextStyle;
  row: ViewStyle;
  containerNoHeader: ViewStyle;
  bottomMargin: ViewStyle;
  regularText: TextStyle;
  boldBodyText: TextStyle;
  navText: TextStyle;
  boldNavText: TextStyle;
  centered: ViewStyle;
  smallSpacedText: TextStyle;
  rightMargin: ViewStyle;
  categoryText: TextStyle;
  header: TextStyle;
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

const categoryText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.regular,
  fontSize: FontSize.label,
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

const navText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.regular,
  fontSize: FontSize.nav,
};

const smallText: TextStyle = {
  color: Colours.black,
  fontFamily: Fonts.regular,
  fontSize: FontSize.small,
};

const standardContainer: ViewStyle = {
  flex: 1,
  padding: Measurements.padding,
};

const centered: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
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
    paddingTop: moderateScale(70),
  },
  containerNoHeader: {
    ...standardContainer,
  },
  topMargin: {
    marginTop: Measurements.padding,
  },
  bottomMargin: {
    marginBottom: Measurements.padding,
  },
  rightMargin: {
    marginRight: Measurements.padding,
  },
  header: {
    ...headerText,
    marginBottom: moderateScale(30),
  },
  headerText: {
    ...headerText,
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
  centeredContainer: {
    flex: 1,
    ...centered,
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
  smallSpacedText: {
    ...smallText,
    lineHeight: FontSize.question,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  boldNavText: {
    ...navText,
    fontFamily: Fonts.bold,
  },
  navText: {
    ...navText,
  },
  centered: {
    ...centered,
  },
  categoryText: {
    ...categoryText,
  },
};

export default SharedStyles;
