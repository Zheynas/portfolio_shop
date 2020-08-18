import {ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {Colours} from '../../styles/Themes';

export interface CheckoutStyle {
  centerContainer: ViewStyle;
  navBarContainer: ViewStyle;
}

const CheckoutStyles: CheckoutStyle = {
  centerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  navBarContainer: {
    height: moderateScale(50),
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: Colours.grey,
  },
};

export default CheckoutStyles;
