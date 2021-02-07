import React from 'react';
import { View } from 'react-native';

// Components
import OrderChevrons from './direction/OrderChevrons';
// Util
import OrderType from '../../../util/enums/OrderType';
import Order from '../../../util/enums/Order';
import OrderingList from './type/OrderingList';
// Styling
import Styles from '../styles/ProductListStyles';

interface Props {
  /**
   * Currently selected order type
   */
  selectedOrderType: OrderType;
  /**
   * Set order type
   */
  setSelectedOrderType: (type: OrderType) => void;
  /**
   * Currently selected direction
   */
  selectedOrder: Order;
  /**
   * Set order direction
   */
  setSelectedOrder: (type: Order) => void;
}

/**
 * Product order header
 */
const OrderHeader = ({
  selectedOrderType,
  setSelectedOrderType,
  selectedOrder,
  setSelectedOrder,
}: Props) => (
  <View style={Styles.orderBar}>
    <OrderingList
      selectedOrderType={selectedOrderType}
      onPress={setSelectedOrderType}
    />
    <OrderChevrons onPress={setSelectedOrder} selectedOrder={selectedOrder} />
  </View>
);

export default OrderHeader;
