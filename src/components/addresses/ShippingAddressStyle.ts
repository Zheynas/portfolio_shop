import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colours, Fonts, FontSize} from '../../styles/Themes';

export interface ShippingAddressStyle {
  container: ViewStyle;
  flexContainer: ViewStyle;
  loginHeader: TextStyle;
}

const ShippingAddressStyles: ShippingAddressStyle = {
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: moderateScale(100),
    paddingBottom: moderateScale(80),
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
};

export default ShippingAddressStyles;
