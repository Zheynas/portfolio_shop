import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import Styles from './ShopStyles';
import {Colours} from '../../styles/Themes';
import {moderateScale} from 'react-native-size-matters';
import OrderByButton from './OrderByButton';
import OrderType from '../../util/enums/OrderType';
import Order from '../../util/enums/Order';

interface Props {
  selectedOrderType: OrderType;
  setSelectedOrderType: (type: OrderType) => void;
  selectedOrder: Order;
  setSelectedOrder: (type: Order) => void;
}


const OrderByBar = ({
  selectedOrderType,
  setSelectedOrderType,
  selectedOrder,
  setSelectedOrder,
}: Props) => {
  return (
    <View style={Styles.orderBar}>
      <View style={Styles.orderTextContainer}>
        <OrderByButton
          text="LATEST"
          onPress={() => {
            setSelectedOrderType(OrderType.LATEST);
          }}
          selected={isSelected(selectedOrderType, OrderType.LATEST)}
        />
        <OrderByButton
          text="BEST SELLER"
          onPress={() => {
            setSelectedOrderType(OrderType.BEST_SELLER);
          }}
          selected={isSelected(selectedOrderType, OrderType.BEST_SELLER)}
        />
        <OrderByButton
          text="PRICE"
          onPress={() => {
            setSelectedOrderType(OrderType.PRICE);
          }}
          selected={isSelected(selectedOrderType, OrderType.PRICE)}
        />
      </View>
      <View style={Styles.orderIconWrapper}>
        <TouchableOpacity
          onPress={() => {
            setSelectedOrder(Order.ASCENDING);
          }}>
          <Icon
            name="chevron-up"
            size={moderateScale(25)}
            color={chevronColour(selectedOrder, Order.ASCENDING)}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedOrder(Order.DESCENDING);
          }}>
          <Icon
            name="chevron-down"
            size={moderateScale(25)}
            color={chevronColour(selectedOrder, Order.DESCENDING)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

function chevronColour(selectedOption: string, thisOption: string) {
  return selectedOption === thisOption ? Colours.black : Colours.grey;
}

function isSelected(selectedOption: string, thisOption: string) {
  return selectedOption === thisOption;
}

export default OrderByBar;
