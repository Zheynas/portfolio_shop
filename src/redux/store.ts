import {createStore, applyMiddleware, compose} from 'redux';
import Thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {configure} from 'redux-and-the-rest';

import resources from './resources';
import deserializeJsonApiData from './deserializeJsonApiData';
import {initialCategorys} from './resources/categorys';
import {initialProductCategorys} from './resources/productcategorys';

const middleWare = [
  // Middleware to handle asyncronous actions in Redux
  Thunk,

  // Redux-logger to help see the current state of the store in a debugging tool
  createLogger(),
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, resources);

const store = createStore(
  persistedReducer,
  {
    categorys: initialCategorys,
    productcategorys: initialProductCategorys,
  },
  compose(applyMiddleware(...middleWare)),
);

const persistor = persistStore(store);

configure({store, responseAdaptor: deserializeJsonApiData});
export {store, persistor};
