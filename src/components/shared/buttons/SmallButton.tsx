import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';

// Styling
import Styles from './styles/ButtonStyles';
import { Colours } from '../../../styles/Themes';

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
}

/**
 * Small button
 */
const SmallButton = ({ onPress, text, loading, disable }: Props) => (
  <TouchableOpacity
    style={Styles.smallButtonContainer}
    onPress={onPress}
    disabled={disable}
  >
    {!loading && <Text style={Styles.smallButtonText}>{text}</Text>}
    {loading && <ActivityIndicator size="large" color={Colours.white} />}
  </TouchableOpacity>
);

export default SmallButton;
