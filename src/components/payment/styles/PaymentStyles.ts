import { ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

export interface PaymentStyle {
  freeShippingContainer: ViewStyle;
}

const PaymentStyles: PaymentStyle = {
  freeShippingContainer: {
    marginTop: moderateScale(30),
  },
};

export default PaymentStyles;
