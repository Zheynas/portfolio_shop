import React from 'react';
import { Text, View } from 'react-native';

// Components
import Category from './Category';
// Util
import { Category as CategoryModel } from '../../models/category';
// Styling
import Styles from './styles/SubSectionStyles';
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Subsection title
   */
  title: string;
  /**
   * Categories in sub section
   */
  categories: CategoryModel[];
}

/**
 * Subsection display
 */
const SubSection = ({ title, categories }: Props) => (
  <View style={Styles.categoryScrollContainer}>
    <Text style={SharedStyles.headerText}>{title}</Text>

    {categories.map(({ id: categoryId, title: categoryTitle }) => (
      <Category
        title={categoryTitle}
        id={categoryId}
        key={`category-${categoryId}`}
      />
    ))}
  </View>
);

export default SubSection;
