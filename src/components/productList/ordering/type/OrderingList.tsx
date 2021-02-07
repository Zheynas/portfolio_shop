import React from 'react';
import { View } from 'react-native';

// Components
import OrderButton from './OrderButton';
// Util
import OrderType from '../../../../util/enums/OrderType';
import OrderTypes from '../../../../util/data/OrderTypes';
// Styling
import Styles from '../../styles/ProductListStyles';

interface Props {
  /**
   * Currently selected order type
   */
  selectedOrderType: OrderType;
  /**
   * Button onPress
   */
  onPress: (type: OrderType) => void;
}

/**
 * Menu for order type
 */
const OrderingList = ({ selectedOrderType, onPress }: Props) => (
  <View style={Styles.orderTextContainer}>
    {OrderTypes.map(({ text, type }, index: number) => (
      <OrderButton
        key={index}
        text={text}
        onPress={() => {
          onPress(type);
        }}
        selected={isSelected(selectedOrderType, type)}
      />
    ))}
  </View>
);

/**
 * Helper function for checking if a button is selected
 */
function isSelected(selectedOption: string, thisOption: string) {
  return selectedOption === thisOption;
}

export default OrderingList;
