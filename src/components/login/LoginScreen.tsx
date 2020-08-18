import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {isSyncingWithRemote, ResourcesItem} from 'redux-and-the-rest';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import {createUser, getUser} from '../../redux/resources/user';
import {ApplicationState} from '../../redux/types';
// Util
import {FormItem} from '../../util/models/FormItem';
import {User} from '../../models/user';
// Components
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
  const {navigate} = useNavigation();

  /**
   * State
   */
  // TODO: Remove temp details
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
      password: true,
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
