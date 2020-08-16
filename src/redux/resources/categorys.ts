import {resources} from 'redux-and-the-rest';

import {Category} from '../../models/category';

const url = '';

const {
  reducers: categoryReducer,
  getOrFetchCollection: getOrFetchCategorys,
  getOrFetchItem: getOrFetchCategory,
} = resources<Category>(
  {
    url,
    name: 'categorys',
  },
  ['index', 'show'],
);

export {
  categoryReducer,
  getOrFetchCategorys,
  getOrFetchCategory,
};
