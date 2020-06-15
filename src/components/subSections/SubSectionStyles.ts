import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface SubSectionStyle {
  container: ViewStyle;
  headerText: TextStyle;
  categoryText: TextStyle;
  flexContainer: ViewStyle;
  categoryScrollContainer: ViewStyle;
  centerContainer: ViewStyle;
  centerFlex: ViewStyle;
}

const SubSectionStyles: SubSectionStyle = {
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
  centerFlex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default SubSectionStyles;
