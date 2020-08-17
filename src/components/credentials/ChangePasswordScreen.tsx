import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {isSyncingWithRemote, ResourcesItem} from 'redux-and-the-rest';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

// Redux
import {getUser, updateUser} from '../../redux/resources/user';
import {ApplicationState} from '../../redux/types';
// Util
import FormItem from '../../util/enums/FormItem';
import {User} from '../../models/user';
// Components
import FormScreen from '../shared/form/FormScreen';

interface Props {
  /**
   * Update user API call
   */
  updateDetails: (newPassword: string) => void;
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
}

const ChangePasswordScreen = ({updateDetails, currentUserItem}: Props) => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  /**
   * State
   */
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  // TODO: Validation for password
  const [confirmPassword, setConfirmPassword] = React.useState('');

  /**
   * User values
   */
  const userIsLoading = isSyncingWithRemote(currentUserItem);

  /**
   * Fields for form screen
   */
  const formFields: FormItem[] = [
    {
      label: 'Current Password',
      value: currentPassword,
      setValue: setCurrentPassword,
      password: true,
    },
    {
      label: 'New Password',
      value: newPassword,
      setValue: setNewPassword,
      password: true,
    },
    {
      label: 'Confirm New Password',
      value: confirmPassword,
      setValue: setConfirmPassword,
      password: true,
    },
  ];

  /**
   * Save change button onPress
   */
  const onPress = () => {
    updateDetails(newPassword);
    // TODO: handle errors
    goBack();
  };

  return (
    <FormScreen
      header="Change Password"
      fields={formFields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onPress}
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
  updateDetails: (password: string) => {
    dispatch(
      updateUser({
        password,
        email: '',
        type: 'user',
      }),
    );
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePasswordScreen);
