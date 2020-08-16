import {ViewStyle, TextStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colours, Fonts, FontSize} from '../../styles/Themes';

export interface CredentialsStyle {
  container: ViewStyle;
  flexContainer: ViewStyle;
  loginHeader: TextStyle;
}

const CredentialsStyles: CredentialsStyle = {
  container: {
    flex: 1,
    padding: moderateScale(20),
    paddingTop: moderateScale(100),
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

export default CredentialsStyles;
