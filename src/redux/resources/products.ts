import { resources } from 'redux-and-the-rest';

import { Product } from '../../models/product';

const url = 'http://localhost:3000/api/v1/categories/:id/products';

const {
  reducers: productReducer,
  getOrFetchList: getOrFetchProducts,
  getOrFetchItem: getOrFetchProduct,
  getItem: getProduct,
} = resources<Product>(
  {
    url,
    name: 'products',
    localOnly: false,
    urlOnlyParams: ['include'],
    keyBy: ['id'],
  },
  { fetchList: true, show: true, index: true, create: true, fetchItem: true },
);

export { productReducer, getOrFetchProducts, getOrFetchProduct, getProduct };
