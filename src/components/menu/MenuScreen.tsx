import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import MenuButton from './MenuButton';
import Styles from './MenuStyle';
import {User} from '../../models/user';
import {ApplicationState} from '../../redux/types';
import {getUser, destroyUser} from '../../redux/resources/user';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

interface Props {
  // Current user in state
  currentUserItem: ResourcesItem<User>;
  logout: () => void;
}

const MenuScreen = ({logout, currentUserItem: {values: user}}: Props) => {
  const {navigate} = useNavigation();

  const loggedIn = Boolean(user && user.authenticationToken);
  const headerName = loggedIn
    ? `${user.firstName} ${user.lastName}`
    : 'Welcome!';

  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Text style={Styles.nameText}>{headerName}</Text>
      </View>
      <View style={Styles.buttonContainer}>
        <MenuButton
          text="Login"
          icon="user"
          route={Routes.LOGIN}
          show={!loggedIn}
        />
        <MenuButton
          text="Register"
          icon="user"
          route={Routes.REGISTER}
          show={!loggedIn}
        />
        <MenuButton
          text="My Profile"
          icon="user"
          route={Routes.PROFILE}
          show={loggedIn}
        />
        <MenuButton text="Cart" icon="cart" route={Routes.CART} show />
        <MenuButton
          text="Order Histories"
          icon="credit-card"
          route={Routes.HOME}
          show={loggedIn}
        />
        <MenuButton text="Help" icon="question" route={Routes.HOME} show />
        <MenuButton
          text="Contact us"
          icon="envelope"
          route={Routes.HOME}
          show
        />
        <MenuButton text="Settings" icon="gear" route={Routes.HOME} show />
      </View>
      {loggedIn && (
        <View style={Styles.logoutContainer}>
          <TouchableOpacity
            style={Styles.logoutButton}
            onPress={() => {
              logout();
            }}>
            <Text style={Styles.logoutText}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
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
