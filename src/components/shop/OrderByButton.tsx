import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Styles from './ShopStyles';
import { Fonts} from '../../styles/Themes';

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
 * Small button
 */
const OrderByButton = ({onPress, text, selected}: Props) => {
  const fontFamily = selected ? Fonts.bold : Fonts.regular;

  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          Styles.orderText,
          {
            fontFamily,
          },
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default OrderByButton;
