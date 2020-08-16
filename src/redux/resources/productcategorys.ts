import {resources} from 'redux-and-the-rest';

import {ProductCategory} from '../../models/productCategory';

const url = '';

const {
  reducers: productCategoryReducer,
  getOrFetchCollection: getOrFetchProductCategorys,
  getOrFetchItem: getOrFetchProductCategory,
} = resources<ProductCategory>(
  {
    url,
    name: 'products',
  },
  ['index', 'show'],
);

export {
  productCategoryReducer,
  getOrFetchProductCategorys,
  getOrFetchProductCategory,
};
