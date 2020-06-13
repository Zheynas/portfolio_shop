import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface MenuStyle {
  flexColumn: ViewStyle;
  profileButton: ViewStyle;
  categoryButton: ViewStyle;
  categoryImage: StyleProp<ImageStyle>;
  categoryTextWrapper: ViewStyle;
  categoryText: TextStyle;
  categoryHeader: ViewStyle;
  categoryHeaderText: TextStyle;
}

const MenuStyles: MenuStyle = {
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  categoryHeader: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
  },
  categoryHeaderText: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
  },
  profileButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    height: moderateScale(150),
    marginBottom: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '101%',
    height: moderateScale(150),
    zIndex: 1,
  },
  categoryTextWrapper: {
    flex: 1,
    zIndex: 10,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.biggerLabel,
  },
};

export default MenuStyles;
