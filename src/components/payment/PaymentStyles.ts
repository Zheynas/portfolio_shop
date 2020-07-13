import {ViewStyle, ImageStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface PaymentStyle {
  container: ViewStyle;
  flexContainer: ViewStyle;
  loginHeader: TextStyle;
  scrollContainer: ViewStyle;
}

const PaymentStyles: PaymentStyle = {
  container: {
    flex: 1,
    paddingTop: moderateScale(60),
  },
  flexContainer: {
    flex: 1,
  },
  loginHeader: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
    marginBottom: moderateScale(30),
  },
  scrollContainer: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: moderateScale(40)
  },
};

export default PaymentStyles;
