import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../routes/Routes';
// Styling
import Styles from './styles/SectionStyles';

interface Props {
  /**
   * Button text
   */
  text: string;
  /**
   * Image path
   */
  image: string;
  /**
   * Disabled state
   */
  disabled?: boolean;
  /**
   * Id of section
   */
  id: string;
  /**
   * Light mode
   */
  light?: boolean;
}

/**
 * Section display button
 */
const SectionButton = ({text, image, disabled, id, light}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * Display logic
   */
  // TODO: fall back image
  const bannerImage = image ? {uri: image} : null;
  const backgroundColor = light ? 'transparent' : 'rgba(0,0,0,.3)';

  return (
    <TouchableOpacity
      disabled={disabled}
      style={Styles.sectionButton}
      onPress={() => {
        navigate(Routes.SUB_SECTIONS, {sectionId: id});
      }}>
      <Image source={bannerImage} style={Styles.sectionImage} />
      <View
        style={[Styles.sectionTextWrapper, {backgroundColor: backgroundColor}]}>
        <Text style={Styles.sectionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionButton;
