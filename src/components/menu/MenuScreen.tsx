import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem, ResourcesList} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import MenuButton from '../shared/buttons/MenuButton';
import Styles from './MenuStyle';
import {User} from '../../models/user';
import {ApplicationState} from '../../redux/types';
import {getUser, destroyUser} from '../../redux/resources/user';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {ShippingAddress} from '../../models/shippingAddress';
import ScreenWrapper from '../shared/ScreenWrapper';

interface Props {
  // Current user in state
  currentUserItem: ResourcesItem<User>;
  logout: () => void;
}

const MenuScreen = ({logout, currentUserItem: {values: user}}: Props) => {
  const loggedIn = Boolean(user && user.authenticationToken);
  const headerName = loggedIn
    ? `${user.firstName} ${user.lastName}`
    : 'Welcome!';

  return (
    <ScreenWrapper
      header={headerName}
      scroll
      topButtonText="LOGOUT"
      topButtonOnPress={logout}
      topButtonHide={!loggedIn}>
      <>
        <MenuButton
          text="Login / Register"
          icon="user"
          route={Routes.LOGIN}
          hide={loggedIn}
        />
        <MenuButton
          text="My Profile"
          icon="user"
          route={Routes.PROFILE}
          hide={!loggedIn}
        />
        <MenuButton
          text="Order Histories"
          icon="credit-card"
          route={Routes.HOME}
          hide={!loggedIn}
        />
        <MenuButton text="Help" icon="question" route={Routes.HELP} />
        <MenuButton
          text="Contact us"
          icon="envelope"
          route={Routes.CONTACT_US}
        />
        <MenuButton
          text="Settings"
          icon="gear"
          route={Routes.SETTINGS}
          hide={!loggedIn}
        />
      </>
    </ScreenWrapper>
  );
};

const mapStoreDataToProps = ({users}: ApplicationState) => ({
  currentUserItem: getUser(users),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  logout: () => {
    dispatch(destroyUser());
  },
});

export default connect(mapStoreDataToProps, mapDispatchToProps)(MenuScreen);
