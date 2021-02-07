import { createStore, applyMiddleware, compose, Middleware } from 'redux';
import Thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { configure } from 'redux-and-the-rest';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import reducers from './resources';
import deserializeResponse from './utils/deserializeResponse';
import serializeRequest from './utils/serializeRequest';
import setGlobalConfig from './middleware/setGlobalConfig';

const middleWare: Middleware[] = [
  // Middleware to handle asyncronous actions in Redux
  Thunk,
  setGlobalConfig,
  createLogger(),
];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  compose(applyMiddleware(...middleWare)),
);

const persistor = persistStore(store);

configure({
  store,
  responseAdaptor: deserializeResponse,
  requestAdaptor: serializeRequest,
  contentType: 'application/vnd.api+json',
});

export { store, persistor };
