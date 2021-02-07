import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';

// Styling
import Styles from './styles/CartStyles';
import { Colours, Measurements } from '../../styles/Themes';
import SharedStyles from '../shared/styles/SharedStyles';

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
   * Edit state
   */
  edit: boolean;
}

/**
 * Cart menu icon button
 */
const CartMenu = ({ onPress, show, edit }: Props) => {
  if (!show) {
    return null;
  }

  return (
    <TouchableOpacity style={Styles.editIconContainer} onPress={onPress}>
      {renderContent(edit)}
    </TouchableOpacity>
  );
};

/**
 * Helper function to render button content
 */
function renderContent(edit: boolean) {
  if (edit) {
    return <Text style={SharedStyles.boldBodyText}>OK</Text>;
  }

  // TODO: delete button and functionality

  return (
    <Icon name="pencil" size={Measurements.smallIcon} color={Colours.grey} />
  );
}

export default CartMenu;
