import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';
import SharedStyles from '../shared/styles/SharedStyles';

export interface HeaderStyle {
  backButton: ViewStyle;
  container: ViewStyle;
  title: TextStyle;
}

const HeaderStyles: HeaderStyle = {
  backButton: {
    zIndex: 5,
    position: 'absolute',
    top: moderateScale(15),
    ...SharedStyles.centered,
    left: moderateScale(10),
    height: Measurements.headerHeight,
    flexDirection: 'row',
  },
  container: {
    height: Measurements.headerHeight,
  },
  title: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.question,
    marginLeft: moderateScale(20),
    lineHeight: Measurements.headerHeight,
  },
};

export default HeaderStyles;
