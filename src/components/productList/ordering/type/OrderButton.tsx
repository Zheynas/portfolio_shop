import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Styling
import SharedStyles from '../../../shared/styles/SharedStyles';

interface Props {
  /**
   * Callback for when the button is pressed
   * @returns {void}
   */
  onPress: () => void;
  /**
   * Button text
   */
  text: string;
  /**
   * Selected state
   */
  selected: boolean;
}

/**
 * Order type button
 */
const OrderButton = ({ onPress, text, selected }: Props) => {
  const textStyle = selected
    ? SharedStyles.boldBodyText
    : SharedStyles.bodyText;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OrderButton;
