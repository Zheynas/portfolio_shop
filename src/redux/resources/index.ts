import {combineReducers} from 'redux';

import {productReducer} from './products';
import {categoryReducer} from './categorys';
import {productCategoryReducer} from './productcategorys';
import {sectionReducer} from './sections';
import {subSectionReducer} from './subSections';
import {shippingMethodReducer} from './shippingMethods';
import { userReducer } from './user';

export default combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  productcategorys: productCategoryReducer,
  sections: sectionReducer,
  subSections: subSectionReducer,
  shippingMethods: shippingMethodReducer,
  users: userReducer,
});
