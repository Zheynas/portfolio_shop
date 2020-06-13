import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './CategoryStyles';
import Routes from '../../routes/Routes';

interface Props {
  /**
   * Button text
   */
  text?: string;
  /**
   * Image path
   */
  imagePath: ImageSourcePropType;
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
const CategoryButton = ({text, imagePath, disabled, id}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={Styles.categoryButton}
      onPress={() => {
        navigate(Routes.SHOP, {categoryId: id});
      }}>
      <Image source={imagePath} style={Styles.categoryImage} />
      <View style={Styles.categoryTextWrapper}>
        <Text style={Styles.categoryText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryButton;
