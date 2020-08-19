import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours, Measurements} from '../../../styles/Themes';
import SharedStyles from '../../shared/styles/SharedStyles';

export interface SectionStyle {
  sectionButton: ViewStyle;
  sectionImage: StyleProp<ImageStyle>;
  sectionTextWrapper: ViewStyle;
  sectionText: TextStyle;
  sectionHeader: ViewStyle;
}

const SectionStyles: SectionStyle = {
  sectionHeader: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: Measurements.padding,
  },
  sectionButton: {
    height: moderateScale(150),
    marginBottom: moderateScale(10),
    ...SharedStyles.centered,
  },
  sectionImage: {
    width: '101%',
    height: moderateScale(150),
    zIndex: 1,
  },
  sectionTextWrapper: {
    flex: 1,
    zIndex: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    ...SharedStyles.centered,
  },
  sectionText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.biggerLabel,
  },
};

export default SectionStyles;
