import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {moderateScale} from 'react-native-size-matters';
import {GenericItemOrCollection, ResourcesCollection} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import {Colours} from '../../styles/Themes';
import CategoryButton from './CategoryButton';
import Styles from './CategoryStyles';
import {ApplicationState} from '../../redux/types';
import BOOTSTRAPPED from '../../redux/custom/statuses';
import {getOrFetchCategorys} from '../../redux/resources/categorys';
import {Category} from '../../models/category';

interface Props {
  /**
   * Collection of categories
   */
  categoryCollection: ResourcesCollection<Category>;
}

/**
 * Category screen
 */
const CategoryScreen = ({categoryCollection: {items: categories}}: Props) => {
  const {navigate} = useNavigation();
  console.log('categories', categories);
  return (
    <View style={Styles.flexColumn}>
      <SafeAreaView style={Styles.flexColumn}>
        <View style={Styles.categoryHeader}>
          <Text style={Styles.categoryHeaderText}>FASHION</Text>
          <TouchableOpacity
            style={Styles.profileButton}
            onPress={() => {
              navigate(Routes.MENU);
            }}>
            <Icon name="user" size={moderateScale(50)} color={Colours.grey} />
          </TouchableOpacity>
        </View>
        <ScrollView style={Styles.flexColumn}>
          {categories.map(({values: {id, imagePath, name}}) => (
            <CategoryButton
              text={name}
              key={id}
              id={id}
              imagePath={imagePath}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = ({categorys}: ApplicationState) => ({
  categoryCollection: getOrFetchCategorys(
    categorys,
    {},
    {
      forceFetch: ({projection: {type}}: GenericItemOrCollection) =>
        type === BOOTSTRAPPED,
    },
  ),
});

export default connect(mapStateToProps)(CategoryScreen);
