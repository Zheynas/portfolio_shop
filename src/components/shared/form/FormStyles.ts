import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colours, Fonts, FontSize} from '../../../styles/Themes';

export interface FormStyle {
  container: ViewStyle;
  bottomButton:ViewStyle;
}

const FormStyles: FormStyle = {
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: moderateScale(100),
  },
  bottomButton:{
    marginTop: moderateScale(20)
  }
};

export default FormStyles;
