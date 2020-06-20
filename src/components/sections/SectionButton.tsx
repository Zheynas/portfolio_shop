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
  /**
   * Light mode
   */
  light?: boolean;
}

/**
 * Section button
 */
const SectionButton = ({text, image, disabled, id, light}: Props) => {
  const {navigate} = useNavigation();
  const bannerImage = image ? {uri: image} : getImage('HANDBAG');
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
