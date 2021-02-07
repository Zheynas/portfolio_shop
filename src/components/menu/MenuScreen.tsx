import React from 'react';
// Redux
import { ResourcesItem } from 'redux-and-the-rest';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import { ApplicationState } from '../../redux/types';
import { getUser, destroyUser } from '../../redux/resources/user';
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';
// Components
import MenuButton from '../shared/buttons/MenuButton';
// Util
import { User } from '../../models/user';

interface Props {
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
  /**
   * Logout API call
   */
  logout: () => void;
}

/**
 * User and company info menu screen
 */
const MenuScreen = ({ logout, currentUserItem: { values: user } }: Props) => {
  /**
   * Render logic
   */
  const loggedIn = Boolean(user && user.authenticationToken);
  const headerName = loggedIn
    ? `${user.firstName} ${user.lastName}`
    : 'Welcome!';

  return (
    <ScreenWrapper
      headerText={headerName}
      scroll
      bottomButtonText="LOGOUT"
      bottomButtonOnPress={logout}
      bottomButtonHide={!loggedIn}
    >
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
          route={Routes.ORDER_HISTORY}
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

const mapStoreDataToProps = ({ users }: ApplicationState) => ({
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
