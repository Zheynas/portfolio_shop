import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {
  FontSize,
  Fonts,
  Colours,
  Measurements,
} from '../../../../styles/Themes';
import SharedStyles from '../../styles/SharedStyles';

export interface ButtonStyle {
  detailsButtonContainer: ViewStyle;
  bottomButton: ViewStyle;
  bottomButtonText: TextStyle;
  bottomButtonContainer: ViewStyle;
  bottomButtonMargin: ViewStyle;
  coralFill: ViewStyle;
  greyButton: ViewStyle;
  menuButton: ViewStyle;
  smallButtonContainer: ViewStyle;
  smallButtonText: TextStyle;
}

const ButtonStyles: ButtonStyle = {
  detailsButtonContainer: {
    borderBottomWidth: 1,
    borderColor: Colours.grey,
    paddingVertical: moderateScale(20),
    flexDirection: 'row',
  },
  bottomButton: {
    height: moderateScale(50),
    width: '100%',
    ...SharedStyles.centered,
  },
  bottomButtonContainer: {
    height: moderateScale(50),
  },
  bottomButtonText: {
    color: Colours.white,
    fontFamily: Fonts.semiBold,
  },
  bottomButtonMargin: {
    marginTop: Measurements.padding,
  },
  coralFill: {
    backgroundColor: Colours.coral,
  },
  greyButton: {
    borderColor: Colours.grey,
    borderWidth: 1,
    backgroundColor: 'transparent',
  },
  menuButton:{
    height: 50,
    borderBottomWidth: 1,
    borderColor: Colours.grey,
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallButtonContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    backgroundColor: Colours.coral,
    ...centered,
  },
  smallButtonText: {
    color: Colours.white,
    fontFamily: Fonts.bold,
    fontSize: FontSize.small,
  },
};

export default ButtonStyles;
