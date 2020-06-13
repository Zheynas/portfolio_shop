import {ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface HomeScreenStyle {
  container: ViewStyle;
  background: ImageStyle;
  middleText: TextStyle;
}

const HomeScreenStyles: HomeScreenStyle = {
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
  },
  middleText:{
    color: Colours.white,
    fontFamily: Fonts.medium,
    fontSize: FontSize.question,
    textDecorationLine: 'underline',
  }
};

export default HomeScreenStyles;
