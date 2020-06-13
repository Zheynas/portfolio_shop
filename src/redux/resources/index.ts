import {combineReducers} from 'redux';

import {productReducer} from './products';
import {categoryReducer} from './categorys';
import {productCategoryReducer} from './productcategorys';

export default combineReducers({
  products: productReducer,
  categorys: categoryReducer,
  productcategorys: productCategoryReducer,
});
