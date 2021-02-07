import { resources } from 'redux-and-the-rest';

import { ShippingMethod } from '../../models/shippingMethod';

const url = 'http://localhost:3000/api/v1/shipping_methods';

const {
  reducers: shippingMethodReducer,
  getOrFetchList: getOrFetchShippingMethods,
  getOrFetchItem: getOrFetchShippingMethod,
} = resources<ShippingMethod>(
  {
    url,
    name: 'shippingMethods',
    localOnly: false,
    urlOnlyParams: ['include'],
  },
  { fetchList: true, show: true, index: true, create: true },
);

export {
  shippingMethodReducer,
  getOrFetchShippingMethods,
  getOrFetchShippingMethod,
};
