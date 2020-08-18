import {ViewStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export interface ProductStyle {
  backButton: ViewStyle;
  cartButton: ViewStyle;
  image: StyleProp<ImageStyle>;
  infoContainer: ViewStyle;
  priceContainer: ViewStyle;
}

const ProductStyles: ProductStyle = {
  infoContainer:{
    height: moderateScale(200),
    padding: moderateScale(10),
  },
  backButton: {
    position: 'absolute',
    top: 0,
    left: moderateScale(10),
    zIndex: 4,
  },
  cartButton: {
    position: 'absolute',
    top: moderateScale(10),
    right: moderateScale(10),
    zIndex: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  priceContainer: {
    flexDirection: 'row',
    marginVertical: moderateScale(10),
    alignItems: 'center',
  },
};

export default ProductStyles;
