import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './SectionStyles';
import Routes from '../../routes/Routes';
import getImage from '../../../assets/images';

interface Props {
  /**
   * Button text
   */
  text?: string;
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
  id?: string;
}

/**
 * Section button
 */
const SectionButton = ({text, image, disabled, id}: Props) => {
  const {navigate} = useNavigation();
  const imageSrc = getImage(image);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={Styles.sectionButton}
      onPress={() => {
        navigate(Routes.SUB_SECTIONS, {sectionId: id});
      }}>
      <Image source={imageSrc} style={Styles.sectionImage} />
      <View style={Styles.sectionTextWrapper}>
        <Text style={Styles.sectionText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SectionButton;
