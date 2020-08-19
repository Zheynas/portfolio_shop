import React from 'react';
import {TouchableOpacity} from 'react-native';
// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styling
import Styles from './styles/CartStyles';
import {Colours, Measurements} from '../../styles/Themes';

interface Props {
  /**
   * Selected onPress
   */
  onPress: () => void;
  /**
   * Show selector state
   */
  show: boolean;
  /**
   * Selected state
   */
  selected: boolean;
}

/**
 * Cart selector
 */
const Selector = ({show, selected, onPress}: Props) => {
  if (!show) {
    return null;
  }

  /**
   * Display logic
   */
  const icon = selected
    ? 'checkbox-marked-circle'
    : 'checkbox-blank-circle-outline';
  const colour = selected ? Colours.coral : Colours.grey;

  return (
    <TouchableOpacity onPress={onPress} style={Styles.selector}>
      <Icon name={icon} size={Measurements.smallIcon} color={colour} />
    </TouchableOpacity>
  );
};

export default Selector;
