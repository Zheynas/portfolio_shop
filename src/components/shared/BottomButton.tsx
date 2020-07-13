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
  colour?: string;
  /**
   *
   */
  positionIsNotAbsolute?: boolean;
}

/**
 * Bottom button
 */
const BottomButton = ({
  onPress,
  text,
  loading,
  disable,
  colour,
  style,
  positionIsNotAbsolute,
}: Props) => {
  const buttonStyle = positionIsNotAbsolute
    ? Styles.bottomButtonContainer
    : Styles.absoluteBottomButtonContainer;

  return (
    <View style={buttonStyle}>
      <TouchableOpacity
        style={Styles.bottomButton}
        onPress={onPress}
        disabled={disable}>
        {!loading && <Text style={Styles.bottomButtonText}>{text}</Text>}
        {loading && <ActivityIndicator size="large" color={Colours.white} />}
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
