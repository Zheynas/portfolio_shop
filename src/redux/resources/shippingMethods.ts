import {resources} from 'redux-and-the-rest';
import Jsona from 'jsona';

import {ShippingMethod} from '../../models/shippingMethod';

const dataFormatter = new Jsona();
const url = 'http://localhost:3000/api/v1/shipping_methods';

const {
  reducers: shippingMethodReducer,
  getOrFetchCollection: getOrFetchShippingMethods,
  getOrFetchItem: getOrFetchShippingMethod,
} = resources<ShippingMethod>(
  {
    url,
    name: 'shippingMethods',
    localOnly: false,
    requestAdaptor: (methods: any) => dataFormatter.serialize({stuff: methods}),
    urlOnlyParams: ['include'],
  },
  ['index', 'show'],
);

export {
  shippingMethodReducer,
  getOrFetchShippingMethods,
  getOrFetchShippingMethod,
};
