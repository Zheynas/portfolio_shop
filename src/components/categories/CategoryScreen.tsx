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
import {ResourcesCollection} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import {Colours} from '../../styles/Themes';
import CategoryButton from './CategoryButton';
import Styles from './CategoryStyles';
import {ApplicationState} from '../../redux/types';
import {getOrFetchSections} from '../../redux/resources/sections';
import {Section} from '../../models/section';

interface Props {
  /**
   * Collection of categories
   */
  sectionsCollection: ResourcesCollection<Section>;
}

/**
 * Category screen
 */
const CategoryScreen = ({sectionsCollection: {items: sections}}: Props) => {
  const {navigate} = useNavigation();
  console.log('sections', sections);
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
          {sections.map(({values: {id, image, title}}) => (
            <CategoryButton text={title} key={id} id={id} image={image} />
          ))}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const mapStateToProps = ({sections}: ApplicationState) => ({
  sectionsCollection: getOrFetchSections(sections, {include: 'subSections'}),
});

export default connect(mapStateToProps)(CategoryScreen);
