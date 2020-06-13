import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
console.disableYellowBox = true;
import {store, persistor} from './src/redux/store';
import AppStack from './src/routes/AppStack';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
