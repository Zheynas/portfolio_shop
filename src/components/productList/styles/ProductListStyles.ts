import { ViewStyle } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { Colours, Measurements } from '../../../styles/Themes';

export interface ProductListStyle {
  header: ViewStyle;
  productScrollContainer: ViewStyle;
  chevronWrapper: ViewStyle;
  orderTextContainer: ViewStyle;
  orderBar: ViewStyle;
}

const ProductListStyles: ProductListStyle = {
  header: {
    height: Measurements.headerHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: moderateScale(10),
  },
  productScrollContainer: {
    paddingTop: Measurements.padding,
    paddingHorizontal: Measurements.padding,
  },
  chevronWrapper: {
    width: moderateScale(40),
  },
  orderTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
  },
  orderBar: {
    height: moderateScale(50),
    borderBottomWidth: 1,
    borderColor: Colours.grey,
    flexDirection: 'row',
  },
};

export default ProductListStyles;
