import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {Product} from '../../models/product';

const dataFormatter = new Jsona();
const url = 'http://localhost:8080/products';

const {
  reducers: productReducer,
  getOrFetchCollection: getOrFetchProducts,
  getOrFetchItem: getOrFetchProduct,
  actionCreators: {
    fetchProducts,
  },
} = resources<Product>(
  {
    url,
    name: 'products',
    localOnly: false,
    requestAdaptor: (products: any) => dataFormatter.serialize({ stuff: products }),
  },
  ['index', 'show'],
);

export {productReducer, getOrFetchProducts, getOrFetchProduct, fetchProducts};
