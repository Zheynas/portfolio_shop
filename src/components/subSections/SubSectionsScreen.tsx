import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {
  GenericItemOrCollection,
  ResourcesItem,
  ResourcesList,
  FETCHING,
} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './SubSectionStyles';
import CategoryButton from '../sections/SectionButton';
import {NavigationParamList} from 'NavigationTypes';
import {ApplicationState} from '../../redux/types';
import {getOrFetchSubSections} from '../../redux/resources/subSections';
import {getItem} from '../../redux/resources/sections';
import {SubSection} from '../../models/subSection';
import {Section} from 'src/models/section';

/**
 * Adds typing to route.params for the correct route
 */
type SubSectionsScreenRouteProp = RouteProp<
  NavigationParamList,
  Routes.SUB_SECTIONS
>;

interface Props {
  /**
   * The react-navigation route containing passed parameters
   */
  route: SubSectionsScreenRouteProp;
  /**
   * Collection of sub sections
   */
  subSectionsCollection: ResourcesList<SubSection>;
  /**
   * Current section
   */
  currentSection: ResourcesItem<Section>;
}

const SubSectionsScreen = ({
  currentSection: {
    values: {bannerUrl},
  },
  subSectionsCollection: {
    items: subSections,
    status: {type},
  },
}: Props) => {
  const {navigate} = useNavigation();

  const isLoading = type === FETCHING;

  if (isLoading) {
    return (
      <View style={Styles.centerFlex}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={Styles.container}>
      <CategoryButton image={bannerUrl} disabled light />
      <ScrollView style={Styles.flexContainer}>
        {subSections.map(({values: {title, categories, id: subSectionId}}) => (
          <View
            style={Styles.categoryScrollContainer}
            key={`sect-${subSectionId}`}>
            <Text style={Styles.headerText}>{title}</Text>
            {categories.map(({id, title: catTitle}) => (
              <TouchableOpacity
                key={`cat-${id}`}
                style={Styles.centerContainer}
                onPress={() => {
                  navigate(Routes.PRODUCT_LIST, {id: id, title: catTitle});
                }}>
                <Text style={Styles.categoryText} key={`${subSectionId}-${id}`}>
                  {catTitle}
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
  {subSections, sections}: ApplicationState,
  {
    route: {
      params: {sectionId},
    },
  }: Props,
) => ({
  subSectionsCollection: getOrFetchSubSections(subSections, {
    id: sectionId,
    include: 'categories',
  }),
  currentSection: getItem(sections, sectionId),
});

export default connect(mapStateToProps)(SubSectionsScreen);
