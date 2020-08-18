import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Navigation
import Routes from '../../routes/Routes';
// Styling
import {Colours, Measurements} from '../../styles/Themes';
import Styles from './SectionStyles';
import SharedStyles from '../shared/styles/SharedStyles';

/**
 * Section header
 */
const SectionHeader = () => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  return (
    <View style={Styles.sectionHeader}>
      <Text style={SharedStyles.subheaderText}>FASHION</Text>

      <TouchableOpacity
        onPress={() => {
          navigate(Routes.MENU);
        }}>
        <Icon name="user" size={Measurements.largeIcon} color={Colours.grey} />
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;
