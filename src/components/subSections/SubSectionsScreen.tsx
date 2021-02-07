import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
// Navigation
import { RouteProp } from '@react-navigation/native';
// Redux
import {
  ResourcesItem,
  ResourcesList,
  isSyncingWithRemote,
} from 'redux-and-the-rest';
import { connect } from 'react-redux';

// Navigation
import { NavigationParamList } from 'NavigationTypes';
import Routes from '../../routes/Routes';
// Redux
import { ApplicationState } from '../../redux/types';
import { getOrFetchSubSections } from '../../redux/resources/subSections';
import { getItem } from '../../redux/resources/sections';
// Components
import SectionButton from '../sections/SectionButton';
import SubSection from './SubSection';
// Util
import { Section } from '../../models/section';
import { SubSection as SubsectionModel } from '../../models/subSection';
// Styling
import Styles from './styles/SubSectionStyles';
import SharedStyles from '../shared/styles/SharedStyles';

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
  subSectionsCollection: ResourcesList<SubsectionModel>;
  /**
   * Current section
   */
  currentSection: ResourcesItem<Section>;
}

const SubSectionsScreen = ({
  subSectionsCollection,
  currentSection: {
    values: { bannerUrl },
  },
}: Props) => {
  /**
   * Subsection values
   */
  const { items: subSections } = subSectionsCollection;
  // TODO: Error handling
  const isLoading = isSyncingWithRemote(subSectionsCollection);

  /**
   * Content renderer
   */
  const renderContent = () => {
    // Loading
    if (isLoading) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ScrollView style={SharedStyles.flexContainer}>
        {subSections.map(({ values: { title, categories, id } }) => (
          <SubSection
            key={`subSection-${id}`}
            title={title}
            categories={categories}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={Styles.container}>
      <SectionButton image={bannerUrl} disabled light />
      {renderContent()}
    </View>
  );
};

const mapStateToProps = (
  { subSections, sections }: ApplicationState,
  {
    route: {
      params: { sectionId },
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
