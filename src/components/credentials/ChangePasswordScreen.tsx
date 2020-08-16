import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './CredentialsStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';
import {createUser} from '../../redux/resources/user';

interface Props {
  login: (email: string, password: string) => void;
}

const ChangePasswordScreen = ({login}: Props) => {
  const {goBack} = useNavigation();
  const [email, setEmail] = React.useState('sasdf@adsfs.com');
  const [password, setPassword] = React.useState('Passw1');

  const onPress = () => {
    login(email, password);
    goBack();
  };

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <ScrollView style={Styles.flexContainer}>
          <Text style={Styles.loginHeader}>Change Password</Text>
          <View>
            <TextField
              label="Current Password"
              value={password}
              setValue={setPassword}
            />
            <TextField
              label="New Password"
              value={password}
              setValue={setPassword}
            />
            <TextField
              label="Confirm Password"
              value={password}
              setValue={setPassword}
            />
          </View>
        </ScrollView>
        <BottomButton text="SAVE CHANGE" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  login: (email: string, password: string) => {
    dispatch(
      createUser({
        email,
        password,
        type: 'user',
      }),
    );
  },
});

export default connect(null, mapDispatchToProps)(ChangePasswordScreen);
