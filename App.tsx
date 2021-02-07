import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import { store, persistor } from './src/redux/store';
import AppStack from './src/routes/AppStack';
import SharedStyles from './src/components/shared/styles/SharedStyles';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <SafeAreaProvider>
          <View style={SharedStyles.appContainer}>
            <SafeAreaView style={SharedStyles.flexContainer}>
              <AppStack />
            </SafeAreaView>
          </View>
        </SafeAreaProvider>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
