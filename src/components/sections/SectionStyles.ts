import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface SectionStyle {
  flexColumn: ViewStyle;
  profileButton: ViewStyle;
  sectionButton: ViewStyle;
  sectionImage: StyleProp<ImageStyle>;
  sectionTextWrapper: ViewStyle;
  sectionText: TextStyle;
  sectionHeader: ViewStyle;
  sectionHeaderText: TextStyle;
  centerFlex: ViewStyle;
}

const SectionStyles: SectionStyle = {
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  sectionHeader: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
  },
  sectionHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionButton: {
    height: moderateScale(150),
    marginBottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  sectionText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.biggerLabel,
  },
  centerFlex: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
};

export default SectionStyles;
