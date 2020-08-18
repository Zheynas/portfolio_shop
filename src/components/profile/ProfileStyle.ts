import {ViewStyle} from 'react-native';

export interface ProfileStyle {
  buttonContainer: ViewStyle;
}

const ProfileStyles: ProfileStyle = {
  buttonContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
};

export default ProfileStyles;
