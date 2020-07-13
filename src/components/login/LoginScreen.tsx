import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../routes/Routes';
import Styles from './LoginStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';

const LoginScreen = () => {
  const {navigate} = useNavigation();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <ScrollView style={Styles.flexContainer}>
          <Text style={Styles.loginHeader}>Login</Text>
          <View>
            <TextField label="Email" value={email} setValue={setEmail} />
            <TextField
              label="Password"
              value={password}
              setValue={setPassword}
            />
          </View>
        </ScrollView>
        <BottomButton
          text="LOGIN"
          onPress={() => {
            navigate(Routes.HOME);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
