import {Middleware} from 'redux';
import {SUCCESS} from 'redux-and-the-rest';

import {userActions} from '../resources/user';
import configureRequestAuthToken from '../utils/configureRequestAuthToken';

/**
 * Middleware to set the authentication token to RATR global config
 */
const setGlobalConfig: Middleware = () => (next) => (action) => {
  const {type, status} = action;

  if (type === userActions.fetchItem && status === SUCCESS) {
    const {
      item: {
        values: {authenticationToken},
      },
    } = action;

    configureRequestAuthToken(authenticationToken);
  }

  next(action);
};

export default setGlobalConfig;
