import React from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
// Redux
import { ResourcesList, isSyncingWithRemote } from 'redux-and-the-rest';
import { connect } from 'react-redux';

// Redux
import { ApplicationState } from '../../redux/types';
import { getOrFetchSections } from '../../redux/resources/sections';
// Util
import { Section } from '../../models/section';
// Components
import SectionButton from './SectionButton';
import SectionHeader from './SectionHeader';
// Styling
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Collection of sections
   */
  sectionsCollection: ResourcesList<Section>;
}

/**
 * Section screen
 */
const SectionScreen = ({ sectionsCollection }: Props) => {
  /**
   * Sections state
   */
  const { items: sections } = sectionsCollection;
  // TODO: Handle errors
  const isLoading = isSyncingWithRemote(sectionsCollection);

  /**
   * Content renderer
   */
  const renderSections = () => {
    // Loading
    if (isLoading) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    return (
      <ScrollView style={SharedStyles.flexColumn}>
        {sections.map(({ values: { id, bannerUrl, title } }) => (
          <SectionButton text={title} key={id} id={id} image={bannerUrl} />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={SharedStyles.flexColumn}>
      <SectionHeader />
      {renderSections()}
    </View>
  );
};

// TODO: Move initial fetch to app launch as we will always hit this page
const mapStateToProps = ({ sections }: ApplicationState) => ({
  sectionsCollection: getOrFetchSections(sections, {}),
});

export default connect(mapStateToProps)(SectionScreen);
