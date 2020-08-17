import {resources} from 'redux-and-the-rest';

import {ShippingAddress} from '../../models/shippingAddress';
// TODO: Make dependant on user (clear this resource when user destroyed)
const {
  reducers: addressReducer,
  actionCreators: {
    createItem: createAddress,
    destroyItem: destroyAddress,
    updateItem: updateAddress,
  },
  getItem: getAddress,
  getOrFetchList: getOrFetchAddresses,
} = resources<ShippingAddress>(
  {
    url: 'http://localhost:3000/api/v1/shipping_addresses',
    name: 'shippingAddresses',
    keyBy:['id']
  },
  {
    createItem: true,
    fetch: true,
    destroyItem: {
      url: 'http://localhost:3000/api/v1/shipping_address',
    },
    updateItem: {
      url: 'http://localhost:3000/api/v1/shipping_address',
    },
    fetchList: true,
    show: true,
    index: true,
    create: true,
    fetchItem: true,
  },
);

export {
  addressReducer,
  createAddress,
  destroyAddress,
  updateAddress,
  getAddress,
  getOrFetchAddresses,
};
