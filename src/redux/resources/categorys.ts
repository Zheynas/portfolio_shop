import {resources} from 'redux-and-the-rest';

import {Category} from '../../models/category';

const url = '';

const {
  reducers: categoryReducer,
  getOrFetchList: getOrFetchCategorys,
  getOrFetchItem: getOrFetchCategory,
} = resources<Category>(
  {
    url,
    name: 'categorys',
  },
  {fetchList: true, show: true, index: true, create: true},
);

export {categoryReducer, getOrFetchCategorys, getOrFetchCategory};
