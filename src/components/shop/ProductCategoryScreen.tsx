import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {GenericItemOrCollection, ResourcesItem} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './ShopStyles';
import CategoryButton from '../sections/SectionButton';
import {NavigationParamList} from 'NavigationTypes';
import {ApplicationState} from '../../redux/types';
import {getOrFetchCategory} from '../../redux/resources/categorys';
import BOOTSTRAPPED from '../../redux/custom/statuses';
import {Category} from '../../models/category';

/**
 * Adds typing to route.params for the correct route
 */
type ShopScreenRouteProp = RouteProp<NavigationParamList, Routes.SHOP>;

interface Props {
  /**
   * The react-navigation route containing passed parameters
   */
  route: ShopScreenRouteProp;
  /**
   * Collection of categories
   */
  categoryItem: ResourcesItem<Category>;
}

const ShopScreen = ({
  categoryItem: {
    values: {imagePath, subcategories},
  },
}: Props) => {
  const {navigate} = useNavigation();

  return (
    <View style={Styles.container}>
      <CategoryButton imagePath={imagePath} disabled />
      <ScrollView style={Styles.flexContainer}>
        {subcategories.map(({header, categories, id: subcategoryId}) => (
          <View style={Styles.categoryScrollContainer}>
            <Text style={Styles.headerText}>{header}</Text>
            {categories.map(({id, title}) => (
              <TouchableOpacity
                style={Styles.centerContainer}
                onPress={() => {
                  navigate(Routes.PRODUCT_LIST, {categoryId: id});
                }}>
                <Text
                  style={Styles.categoryText}
                  key={`${subcategoryId}-${id}`}>
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (
  {categorys}: ApplicationState,
  {
    route: {
      params: {categoryId},
    },
  }: ShopScreenRouteProp,
) => ({
  categoryItem: getOrFetchCategory(
    categorys,
    categoryId,
    {},
    {
      forceFetch: ({projection: {type}}: GenericItemOrCollection) =>
        type === BOOTSTRAPPED,
    },
  ),
});

export default connect(mapStateToProps)(ShopScreen);
