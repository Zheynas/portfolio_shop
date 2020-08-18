import React from 'react';
import {Text, View} from 'react-native';

// Components
import ScreenWrapper from '../shared/wrappers/ScreenWrapper';
// Styling
import SharedStyles from '../shared/styles/SharedStyles';

/**
 * Order history
 */
const OrderHistory = () => (
  <ScreenWrapper header="Order History" scroll>
    <View style={SharedStyles.centeredContainer}>
      <Text style={SharedStyles.mediumText}>Coming Soon...</Text>
    </View>
  </ScreenWrapper>
);

export default OrderHistory;
