import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {User} from '../../models/user';

const dataFormatter = new Jsona();
const registrationUrl = 'http://localhost:3000/api/v1/users/registration';

const {
  reducers: userReducer,
  actionCreators: {createUser},
} = resources<User>(
  {
    url: registrationUrl,
    name: 'users',
    requestAdaptor: (user: any) => dataFormatter.serialize({ stuff: user }),
  },
  ['create', 'show'],
);

export {userReducer, createUser};
