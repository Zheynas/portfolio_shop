import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';
// Styling
import {moderateScale} from 'react-native-size-matters';

// Styling
import Styles from './styles/ButtonStyles';
import {Colours} from '../../../styles/Themes';
import SharedStyles from '../styles/SharedStyles';

interface Props {
  /**
   * On press
   */
  onPress?: () => void;
  /**
   * Text
   */
  text: string[];
}

/**
 * Button that displays an array of text
 */
const DetailsButton = ({onPress, text}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.detailsButtonContainer}>
      <View style={SharedStyles.flexColumn}>{renderText(text)}</View>
      <View style={SharedStyles.centered}>
        <Icon
          name="chevron-right"
          size={moderateScale(40)}
          color={Colours.grey}
        />
      </View>
    </TouchableOpacity>
  );
};

/**
 * Helper function to determine how to render the text
 */
function renderText(textToDisplay: string[]) {
  const numberOfTexts = textToDisplay.length;
  if (numberOfTexts === 0) {
    return null;
  }

  if (textToDisplay.length === 1) {
    return <Text style={SharedStyles.bodyText}>{textToDisplay[0]}</Text>;
  }

  const extraText = textToDisplay.slice(1);
  return (
    <>
      <Text style={SharedStyles.boldBodyText}>{textToDisplay[0]}</Text>
      {extraText.map((text, index) => (
        <Text key={index} style={SharedStyles.smallSpacedText}>
          {text}
        </Text>
      ))}
    </>
  );
}

export default DetailsButton;
