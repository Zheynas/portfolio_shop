import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colours, Fonts, FontSize} from '../../styles/Themes';

export interface RegisterStyle {
  container: ViewStyle;
  flexContainer: ViewStyle;
  registerHeader: TextStyle;
}

const RegisterStyles: RegisterStyle = {
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: moderateScale(100),
  },
  flexContainer: {
    flex: 1,
  },
  registerHeader: {
    color: Colours.black,
    fontFamily: Fonts.bold,
    fontSize: FontSize.header,
    marginBottom: moderateScale(30),
  },
};

export default RegisterStyles;
