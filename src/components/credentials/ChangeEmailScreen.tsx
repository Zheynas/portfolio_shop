import React from 'react';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Redux
import { isSyncingWithRemote, ResourcesItem } from 'redux-and-the-rest';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';

// Redux
import { getUser, updateUser } from '../../redux/resources/user';
import { ApplicationState } from '../../redux/types';
// Util
import { FormItem } from '../../util/models/FormItem';
import { User } from '../../models/user';
// Components
import FormScreen from '../shared/form/FormScreen';

interface Props {
  /**
   * Update user API call
   */
  updateDetails: (email: string) => void;
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
}

/**
 * Change email screen
 */
const ChangeEmailScreen = ({ updateDetails, currentUserItem }: Props) => {
  /**
   * Navigation
   */
  const { goBack } = useNavigation();

  /**
   * State
   */
  const [newEmail, setNewEmail] = React.useState('');

  /**
   * User values
   */
  const {
    values: { email },
  } = currentUserItem;
  const userIsLoading = isSyncingWithRemote(currentUserItem);

  /**
   * Fields for form screen
   */
  const formFields: FormItem[] = [
    {
      label: 'Current Email',
      value: email,
    },
    {
      label: 'New Email',
      value: newEmail,
      setValue: setNewEmail,
    },
  ];

  /**
   * Save change button onPress
   */
  const onPress = () => {
    updateDetails(email);
    // TODO: handle errors
    goBack();
  };

  return (
    <FormScreen
      header="Change Email"
      fields={formFields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onPress}
      loading={userIsLoading}
    />
  );
};

const mapStateToProps = ({ users }: ApplicationState) => ({
  currentUserItem: getUser(users),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  updateDetails: (email: string) => {
    dispatch(
      updateUser({
        email,
        password: '',
        type: 'user',
      }),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeEmailScreen);
