import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../routes/Routes';
import Styles from './RegisterStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';

const RegisterScreen = () => {
  const {navigate} = useNavigation();

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <ScrollView style={Styles.flexContainer}>
          <Text style={Styles.registerHeader}>Register</Text>
          <View>
            <TextField
              label="First Name"
              value={firstName}
              setValue={setFirstName}
            />
            <TextField
              label="Last Name"
              value={lastName}
              setValue={setLastName}
            />
            <TextField label="Email" value={email} setValue={setEmail} />
            <TextField
              label="Password"
              value={password}
              setValue={setPassword}
            />
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
            />
          </View>
        </ScrollView>
        <BottomButton
          text="REGISTER"
          onPress={() => {
            navigate(Routes.HOME);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
