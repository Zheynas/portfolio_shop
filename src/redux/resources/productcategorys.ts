import {resources} from 'redux-and-the-rest';

import {ProductCategory} from '../../models/productCategory';

const url = '';

const {
  reducers: productCategoryReducer,
  getOrFetchList: getOrFetchProductCategorys,
  getOrFetchItem: getOrFetchProductCategory,
} = resources<ProductCategory>(
  {
    url,
    name: 'products',
  },
  {fetchList: true, show: true, index: true, create: true},
);

export {
  productCategoryReducer,
  getOrFetchProductCategorys,
  getOrFetchProductCategory,
};
