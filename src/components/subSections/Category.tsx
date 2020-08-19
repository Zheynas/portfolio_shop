import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../routes/Routes';
// Styling
import Styles from './styles/SubSectionStyles';
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Category id
   */
  id: string;
  /**
   * Category title
   */
  title: string;
}

/**
 * Category display
 */
const Category = ({id, title}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={SharedStyles.centeredContainer}
      onPress={() => {
        navigate(Routes.PRODUCT_LIST, {id, title});
      }}>
      <Text
        style={[SharedStyles.categoryText, Styles.categoryMargin]}
        key={`${title}-${id}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Category;
