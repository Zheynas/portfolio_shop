import React from 'react';

// Components
import DetailsButton from './DetailsButton';

interface Props {
  /**
   * Text to display
   */
  text: string;
  /**
   * On button press functionality
   */
  onPress: () => void;
}

/**
 * Wrapper for details button that accepts a single string
 */
const InfoButton = ({text, onPress}: Props) => {
  return <DetailsButton text={[text]} onPress={onPress} />;
};

export default InfoButton;
