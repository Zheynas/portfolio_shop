import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../styles/Themes';

export interface HeaderStyle {
  backButton: ViewStyle;
}

const HeaderStyles: HeaderStyle = {
  backButton: {
    zIndex: 5,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    height: Measurements.headerHeight,
    width: Measurements.headerHeight,
  }
};

export default HeaderStyles;
