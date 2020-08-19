import {combineReducers} from 'redux';

import {productReducer} from './products';
import {categoryReducer} from './categorys';
import {sectionReducer} from './sections';
import {subSectionReducer} from './subSections';
import {shippingMethodReducer} from './shippingMethods';
import {userReducer} from './user';
import {addressReducer} from './shippingAddresses';

export default combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  sections: sectionReducer,
  subSections: subSectionReducer,
  shippingMethods: shippingMethodReducer,
  users: userReducer,
  shippingAddresses: addressReducer,
});
