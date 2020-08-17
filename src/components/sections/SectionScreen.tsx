import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {moderateScale} from 'react-native-size-matters';
import {ResourcesList, FETCHING} from 'redux-and-the-rest';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import {Colours} from '../../styles/Themes';
import SectionButton from './SectionButton';
import Styles from './SectionStyles';
import {ApplicationState} from '../../redux/types';
import {getOrFetchSections} from '../../redux/resources/sections';
import {Section} from '../../models/section';

interface Props {
  /**
   * Collection of sections
   */
  sectionsCollection: ResourcesList<Section>;
}

/**
 * Section screen
 */
const SectionScreen = ({
  sectionsCollection: {
    items: sections,
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
    <View style={Styles.flexColumn}>
      <View style={Styles.sectionHeader}>
        <Text style={Styles.sectionHeaderText}>FASHION</Text>
        <TouchableOpacity
          style={Styles.profileButton}
          onPress={() => {
            navigate(Routes.MENU);
          }}>
          <Icon name="user" size={moderateScale(50)} color={Colours.grey} />
        </TouchableOpacity>
      </View>
      <ScrollView style={Styles.flexColumn}>
        {sections.map(({values: {id, bannerUrl, title}}) => (
          <SectionButton text={title} key={id} id={id} image={bannerUrl} />
        ))}
      </ScrollView>
    </View>
  );
};

const mapStateToProps = ({sections}: ApplicationState) => ({
  sectionsCollection: getOrFetchSections(sections, {}),
});

export default connect(mapStateToProps)(SectionScreen);
