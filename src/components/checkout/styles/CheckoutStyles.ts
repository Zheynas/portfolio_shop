import { ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { Colours } from '../../../styles/Themes';

export interface CheckoutStyle {
  navBarContainer: ViewStyle;
}

const CheckoutStyles: CheckoutStyle = {
  navBarContainer: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colours.grey,
  },
};

export default CheckoutStyles;
