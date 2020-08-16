import {resource} from 'redux-and-the-rest';

import {User} from '../../models/user';

const {
  reducers: userReducer,
  actionCreators: {
    createItem: createUser,
    destroyItem: destroyUser,
    fetchItem: fetchUser,
  },
  actions: userActions,
  getItem: getUser,
} = resource<User>(
  {
    url: 'http://localhost:3000/api/v1/users/session',
    name: 'users',
  },
  {
    createItem: true,
    fetchItem: true,
    fetch: true,
    destroyItem: true,
  },
);

export {userReducer, createUser, fetchUser, userActions, getUser, destroyUser};
