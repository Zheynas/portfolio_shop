import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

import {Colours} from '../../styles/Themes';
import Routes from '../../routes/Routes';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.bluePurple,
      }}>
      <Text>LoginScreen</Text>
      <Text>Email</Text>
      <Text>Password</Text>
      <TouchableOpacity
        style={{
          width: 100,
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
          position: 'absolute',
          bottom: 0,
        }}
        onPress={() => {
          navigate(Routes.REGISTER);
        }}>
        <Text>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
