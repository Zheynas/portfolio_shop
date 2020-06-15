import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {Product} from '../../models/product';

const dataFormatter = new Jsona();
const url = 'http://localhost:3000/api/v1/categories/:id/products';

const {
  reducers: productReducer,
  getOrFetchCollection: getOrFetchProducts,
  getOrFetchItem: getOrFetchProduct,
  getItem,
} = resources<Product>(
  {
    url,
    name: 'products',
    localOnly: false,
    requestAdaptor: (products: any) => dataFormatter.serialize({ stuff: products }),
    urlOnlyParams: ['include']
  },
  ['index', 'show'],
);

export {productReducer, getOrFetchProducts, getOrFetchProduct, getItem};
