import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

import Styles from './SharedStyles';
import {Colours} from '../../styles/Themes';

interface Props {
  /**
   * Callback for when the button is pressed
   * @returns {void}
   */
  onPress?: () => void;
  /**
   * Button text
   */
  text: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Disable state
   */
  disable?: boolean;
  /**
   * Extra button styling
   */
  style?: ViewStyle;
  /**
   * Colour for button
   */
  grey?: boolean;
}

/**
 * Bottom button
 */
const BottomButton = ({
  onPress,
  text,
  loading,
  disable,
  grey,
  style = {},
}: Props) => {
  const extraStyles = grey
    ? {
        borderColor: Colours.grey,
        borderWidth: 1,
        backgroundColor: 'transparent',
      }
    : {backgroundColor: Colours.coral};

  const indicatorColor = grey ? Colours.grey : Colours.white;
  const textColor = grey ? Colours.black : Colours.white;

  return (
    <View style={[Styles.bottomButtonContainer, style]}>
      <TouchableOpacity
        style={[Styles.bottomButton, {...extraStyles}]}
        onPress={onPress}
        disabled={disable}>
        {!loading && (
          <Text style={[Styles.bottomButtonText, {color: textColor}]}>
            {text}
          </Text>
        )}
        {loading && <ActivityIndicator size="large" color={indicatorColor} />}
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
