import {resources} from 'redux-and-the-rest';

import {User} from '../../models/user';

const registrationUrl = 'http://localhost:3000/api/v1/users/registration';
const url = 'http://localhost:3000/api/v1/users/';

const {
  reducers: userReducer,
  actionCreators: {createItem: createUser, fetchItem: fetchUser},
  actions: userActions,
} = resources<User>(
  {
    url: url,
    name: 'users',
  },
  {
    createItem: {
      url: registrationUrl,
    },
    fetchItem: true,
  },
);

export {userReducer, createUser, fetchUser, userActions};
