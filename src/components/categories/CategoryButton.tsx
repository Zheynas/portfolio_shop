import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './CategoryStyles';
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
   * Id of category
   */
  id?: string;
}

/**
 * Category button
 */
const CategoryButton = ({text, image, disabled, id}: Props) => {
  const {navigate} = useNavigation();
  const imageSrc = getImage(image);
  return (
    <TouchableOpacity
      disabled={disabled}
      style={Styles.categoryButton}
      onPress={() => {
        navigate(Routes.SHOP, {categoryId: id});
      }}>
      <Image source={imageSrc} style={Styles.categoryImage} />
      <View style={Styles.categoryTextWrapper}>
        <Text style={Styles.categoryText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;
