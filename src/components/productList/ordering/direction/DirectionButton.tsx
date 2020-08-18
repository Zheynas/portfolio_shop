import React from 'react';
import {TouchableOpacity} from 'react-native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Styling
import {Colours, Measurements} from '../../../../styles/Themes';
import Order from '../../../../util/enums/Order';

interface Props {
  /**
   * Currently selected direction
   */
  selectedOrder: Order;
  /**
   * Button onPress
   */
  onPress: (direction: Order) => void;
  /**
   * Icon to render
   */
  icon: string;
  /**
   * Button direction
   */
  direction: Order;
}

/**
 * Order Direction button
 */
const DirectionButton = ({selectedOrder, onPress, icon, direction}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(direction);
      }}>
      <Icon
        name={icon}
        size={Measurements.smallIcon}
        color={chevronColour(selectedOrder, direction)}
      />
    </TouchableOpacity>
  );
};

/**
 * Helper function to determine button colour
 */
function chevronColour(selectedOption: string, thisOption: string) {
  return selectedOption === thisOption ? Colours.black : Colours.grey;
}

export default DirectionButton;
