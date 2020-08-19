import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {Measurements} from '../../../styles/Themes';

export interface SubSectionStyle {
  container: ViewStyle;
  categoryMargin: TextStyle;
  categoryScrollContainer: ViewStyle;
}

const SubSectionStyles: SubSectionStyle = {
  container: {
    flex: 1,
    paddingTop: Measurements.shopHeaderHeight,
  },
  categoryMargin: {
    marginTop: moderateScale(15),
  },
  categoryScrollContainer: {
    flex: 1,
    alignItems: 'center',
    marginBottom: moderateScale(15),
  },
};

export default SubSectionStyles;
