import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';
import { moderateScale } from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './LoginStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';
import {createUser} from '../../redux/resources/user';

interface Props {
  login: (email: string, password: string) => void;
}

const LoginScreen = ({login}: Props) => {
  const {goBack, navigate} = useNavigation();
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
            positionIsNotAbsolute
            onPress={onPress}
          />
          <BottomButton
            text="REGISTER"
            positionIsNotAbsolute
            grey
            style={{marginTop: moderateScale(20)}}
            onPress={() => {
              navigate(Routes.REGISTER);
            }}
          />
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

export default connect(null, mapDispatchToProps)(LoginScreen);
