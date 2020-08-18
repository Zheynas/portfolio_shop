import React from 'react';
// Redux
import {AnyAction} from 'redux';
import {connect} from 'react-redux';
import {ThunkDispatch} from 'redux-thunk';
import {ResourcesItem, isSyncingWithRemote} from 'redux-and-the-rest';

// Redux
import {ApplicationState} from '../../redux/types';
import {createUser, getUser} from '../../redux/resources/user';
// Util
import {User} from '../../models/user';
import FormItem from '../../models/formItem';
// Components
import FormScreen from '../shared/form/FormScreen';

interface Props {
  /**
   * Register API call
   */
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => void;
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
}

/**
 * Register screen
 */
const RegisterScreen = ({register, currentUserItem}: Props) => {
  /**
   * State
   */
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  /**
   * Fetching state
   */
  const userIsLoading = isSyncingWithRemote(currentUserItem);

  /**
   * Fields for form screen
   */
  const formFields: FormItem[] = [
    {
      label: 'First Name',
      value: firstName,
      setValue: setFirstName,
    },
    {
      label: 'Last Name',
      value: lastName,
      setValue: setLastName,
    },
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
    {
      label: 'Confirm Password',
      value: confirmPassword,
      setValue: setConfirmPassword,
      password: true,
    },
  ];

  return (
    <FormScreen
      header="Register"
      fields={formFields}
      buttonText="REGISTER"
      buttonOnPress={() => {
        register(email, password, firstName, lastName);
      }}
      loading={userIsLoading}
    />
  );
};

const mapStateToProps = ({users}: ApplicationState) => ({
  currentUserItem: getUser(users),
});

// TODO: Fix RATR register url issue
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
      createUser({
        email,
        password,
        firstName,
        lastName,
        type: 'user',
      }),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
