import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './RegisterStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';
import {ThunkDispatch} from 'redux-thunk';

import {createUser} from '../../redux/resources/user';

const TEMP_QUESTION_ID = '0';

interface Props {
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => void;
}

const RegisterScreen = ({register}: Props) => {
  const {navigate} = useNavigation();

  const [firstName, setFirstName] = React.useState('Hey');
  const [lastName, setLastName] = React.useState('Hey');
  const [email, setEmail] = React.useState('sasdf@adsf.com');
  const [password, setPassword] = React.useState('Passw1');
  const [confirmPassword, setConfirmPassword] = React.useState('Passw1');

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
              secureTextEntry
            />
            <TextField
              label="Confirm Password"
              value={confirmPassword}
              setValue={setConfirmPassword}
              secureTextEntry
            />
          </View>
        </ScrollView>
        <BottomButton
          text="REGISTER"
          onPress={() => {
            register(email, password, firstName, lastName);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    dispatch(
      createUser(TEMP_QUESTION_ID, {
        email,
        password,
        firstName,
        lastName,
        type: 'user',
      }),
    );
  },
});

export default connect(null, mapDispatchToProps)(RegisterScreen);
