import {ViewStyle, TextStyle, StyleProp, ImageStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import {FontSize, Fonts, Colours} from '../../styles/Themes';

export interface ContactStyle {
  flexColumn: ViewStyle;
  avatarContainer: ViewStyle;
  avatar: StyleProp<ImageStyle>;
  nameText: TextStyle;
  buttonContainer: ViewStyle;
  logoutContainer: ViewStyle;
  logoutButton: ViewStyle;
  logoutText: TextStyle;
}

const ContactStyles: ContactStyle = {
  flexColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  avatarContainer: {
    height: moderateScale(180),
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: moderateScale(150),
    height: moderateScale(150),
  },
  nameText: {
    fontFamily: Fonts.bold,
    fontSize: FontSize.question,
    marginTop: moderateScale(10),
  },
  buttonContainer: {
    flex: 1, 
    padding: moderateScale(10),
  },
  logoutContainer: {
    height: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoutButton: {
    width: '80%',
    height: moderateScale(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colours.grey,
  },
  logoutText: {
    fontFamily: Fonts.semiBold,
  }
};

export default ContactStyles;