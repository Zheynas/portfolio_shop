import {ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface HomeScreenStyle {
  container: ViewStyle;
  background: ImageStyle;
  middleText: TextStyle;
  centerFlex: ViewStyle;
}

const HomeScreenStyles: HomeScreenStyle = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    paddingLeft: moderateScale(20),
  },
  centerFlex:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
  middleText:{
    color: Colours.white,
    fontFamily: Fonts.medium,
    fontSize: FontSize.question,
    textDecorationLine: 'underline',
  }
};

export default HomeScreenStyles;
