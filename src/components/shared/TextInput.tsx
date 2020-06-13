import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardType, ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { moderateScale } from 'react-native-size-matters';

import Styles from './SharedStyles';
import { Colours } from '../../styles/Themes';
import ErrorText from './ErrorText';

interface Props {
  /**
   * Text above the input
   */
  label?: string;
  /**
   * Text below the input
   */
  footer?: string;
  /**
   * Value of the input
   */
  value: string;
  /**
   * Callback for when the text changes in the input
   * @param {string} textChange The changed text
   * @returns {void}
   */
  onSetValue: (textChange: string) => void;
  /**
   * Validation boolean
   */
  valid: boolean;
  /**
   * Icon to show on right hand side of input
   */
  icon?: string;
  /**
   * Callback for when the icon is pressed
   * @returns {void}
   */
  onPress?: () => void;
  /**
   * Keyboard type
   */
  keyboardType: KeyboardType;
  /**
   * Placeholder text
   */
  placeholder?: string;
  /**
   * Hide / show inputted text
   */
  secureTextEntry?: boolean;
  /**
   * Max length of value
   */
  maxLength?: number;
  /**
   * Callback for the user finishes editing
   * @returns {void}
   */
  onEndEditing?: () => void;
  /**
   * Error text
   */
  errorText?: string;
  /**
   * Extra styling on container
   */
  style?: ViewStyle;
  /**
   * Callback for the focusing text field
   * @returns {void}
   */
  onFocus?: () => void;
}

/**
 * Text input with optional icon
 */
const TextField = ({
  label, value, onSetValue, footer, valid, icon, onPress, keyboardType, placeholder, secureTextEntry, maxLength,
  onEndEditing, errorText, style, onFocus,
}: Props) => {
  const inputStyle = valid ? Styles.valid : Styles.invalid;
  const labelColour = valid ? Colours.primary : Colours.error;

  return (
    <View style={[Styles.inputContainer, style]}>
      {renderLabel(labelColour, label)}
      <View style={inputStyle.codeInputWrapper}>
        <TextInput
          style={inputStyle.codeInput}
          value={value}
          keyboardType={keyboardType}
          placeholder={placeholder}
          onChangeText={(textChange) => onSetValue(textChange)}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          onEndEditing={onEndEditing}
          onFocus={onFocus}
        />
        {renderIcon(icon, onPress)}
      </View>

      <ErrorText valid={valid} text={errorText} />

      {renderFooter(footer)}
    </View>
  );
};


function renderLabel(colour: string, text?: string) {
  if (text) {
    return (
      <Text style={[Styles.inputLabel, { color: colour }]}>
        {text}
      </Text>
    );
  }
  return null;
}

function renderFooter(text?: string) {
  if (text) {
    return (
      <View style={Styles.inputFooterWrapper}>
        <Text style={Styles.inputFooter}>
          {text}
        </Text>
      </View>
    );
  }
  return null;
}

function renderIcon(icon?: string, onPress?: () => void) {
  if (icon && onPress) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name={icon} size={moderateScale(35)} color={Colours.primary} />
      </TouchableOpacity>
    );
  }
  return null;
}

export default TextField;
