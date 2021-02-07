import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import Styles from './HeaderStyles';
import { Colours, Measurements } from '../../styles/Themes';

interface Props {
  /**
   * Optional title
   */
  title?: string;
}

/**
 * Common empty header with back button.
 */
const Header = ({ title }: Props) => {
  const { goBack } = useNavigation();

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
        style={Styles.backButton}
      >
        <Icon
          name="ios-arrow-round-back"
          size={Measurements.headerHeight}
          color={Colours.grey}
        />
        {renderTitle(title)}
      </TouchableOpacity>
    </View>
  );
};

function renderTitle(title?: string) {
  if (!title) {
    return null;
  }
  return <Text style={Styles.title}>{title}</Text>;
}
export default Header;
