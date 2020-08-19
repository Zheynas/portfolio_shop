import React from 'react';
import {View} from 'react-native';

// Components
import DirectionButton from './DirectionButton';
// Util
import Order from '../../../../util/enums/Order';
// Styling
import Styles from '../../styles/ProductListStyles';

interface Props {
  /**
   * Currently selected direction
   */
  selectedOrder: Order;
  /**
   * Button onPress
   */
  onPress: (type: Order) => void;
}

/**
 * Container for order (direction) buttons for ordering products
 * // TODO: Rethink naming of ordering stuff
 */
const OrderChevrons = ({selectedOrder, onPress}: Props) => {
  return (
    <View style={Styles.chevronWrapper}>
      <DirectionButton
        onPress={onPress}
        direction={Order.ASCENDING}
        icon="chevron-up"
        selectedOrder={selectedOrder}
      />
      <DirectionButton
        onPress={onPress}
        direction={Order.DESCENDING}
        icon="chevron-down"
        selectedOrder={selectedOrder}
      />
    </View>
  );
};

export default OrderChevrons;
