import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colours} from '../../styles/Themes';
import Routes from '../../routes/Routes';

const RegisterScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colours.purple,
      }}>
      <Text>RegisterScreen</Text>
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
          navigate(Routes.HOME);
        }}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
