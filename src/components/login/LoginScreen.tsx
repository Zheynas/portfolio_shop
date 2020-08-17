import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {isSyncingWithRemote, ResourcesItem} from 'redux-and-the-rest';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import {createUser, getUser} from '../../redux/resources/user';
import FormItem from '../../util/enums/FormItem';
import {ApplicationState} from '../../redux/types';
import {User} from '../../models/user';
import FormScreen from '../shared/form/FormScreen';

interface Props {
  /**
   * Login API call
   */
  login: (email: string, password: string) => void;
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
}

/**
 * Login screen
 */
const LoginScreen = ({login, currentUserItem}: Props) => {
  /**
   * Navigation
   */
  const {goBack, navigate} = useNavigation();

  /**
   * State
   */
  const [email, setEmail] = React.useState('sasdf@adsfs.com');
  const [password, setPassword] = React.useState('Passw1');

  /**
   * Fetching state
   */
  const userIsLoading = isSyncingWithRemote(currentUserItem);

  /**
   * Fields for form screen
   */
  const formFields: FormItem[] = [
    {
      label: 'Email',
      value: email,
      setValue: setEmail,
    },
    {
      label: 'Password',
      value: password,
      setValue: setPassword,
    },
  ];

  return (
    <FormScreen
      header="Login"
      fields={formFields}
      buttonText="LOGIN"
      buttonOnPress={() => {
        login(email, password);
      }}
      bottomButtonText="REGISTER"
      bottomButtonOnPress={() => {
        navigate(Routes.REGISTER);
      }}
      loading={userIsLoading}
    />
  );
};

const mapStateToProps = ({users}: ApplicationState) => ({
  currentUserItem: getUser(users),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
