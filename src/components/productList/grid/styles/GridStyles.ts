import {ViewStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export interface GridStyle {
  gridContainer: ViewStyle;
  gridRow: ViewStyle;
  rightMargin: ViewStyle;
  leftMargin: ViewStyle;
  image: StyleProp<ImageStyle>;
  largeTextWrapper: ViewStyle;
  smallTextWrapper: ViewStyle;
}

const GridStyles: GridStyle = {
  gridContainer: {
    flexDirection: 'column',
  },
  gridRow: {
    flexDirection: 'row',
    height: moderateScale(300),
  },
  rightMargin: {
    marginRight: moderateScale(5),
  },
  leftMargin: {
    marginLeft: moderateScale(5),
  },
  image: {
    width: '100%',
    height: '100%',
  },
  smallTextWrapper: {
    height: moderateScale(50),
    flexDirection: 'column',
    paddingLeft: moderateScale(10),
  },
  largeTextWrapper: {
    height: moderateScale(50),
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export default GridStyles;
