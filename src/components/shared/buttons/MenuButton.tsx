import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Components
import Icon from 'react-native-vector-icons/EvilIcons';
// Styling
import {moderateScale} from 'react-native-size-matters';

// Components
import ImageRenderer from '../images/ImageRenderer';
//Styling
import {Colours, Measurements} from '../../../styles/Themes';
import SharedStyles from '../styles/SharedStyles';
import Styles from './styles/ButtonStyles';

interface Props {
  /**
   * Button text
   */
  text: string;
  /**
   * Icon
   */
  icon?: string;
  /**
   * Route to navigate to
   */
  route?: string;
  /**
   * hide state
   */
  hide?: boolean;
  /**
   * params
   */
  params?: {[key: string]: string | number};
  /**
   * Image
   */
  image?: string;
  /**
   * On button press override
   */
  onPress?: () => void;
}

/**
 * Menu button
 */
const MenuButton = ({
  text,
  icon,
  route,
  hide,
  image,
  onPress,
  params = {},
}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  if (hide) {
    return null;
  }

  /**
   * Render icon if present
   */
  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <Icon
        name={icon}
        size={moderateScale(35)}
        color={Colours.grey}
        style={SharedStyles.rightMargin}
      />
    );
  };

  /**
   * Render image if present
   */
  const renderImage = () => {
    if (!image) {
      return null;
    }

    return (
      <ImageRenderer
        width={Measurements.largeIcon}
        height={Measurements.smallIcon}
        image={image}
        style={SharedStyles.rightMargin}
      />
    );
  };

  /**
   * On menu button press
   */
  const onButtonPress = () => {
    // Try and use onPress param
    if (onPress) {
      onPress();
      // if not, try and navigate using route param
    } else if (route) {
      navigate(route, params);
    }
  };

  return (
    <TouchableOpacity style={Styles.menuButton} onPress={onButtonPress}>
      {renderIcon()}
      {renderImage()}
      <View style={SharedStyles.flexContainer}>
        <Text style={SharedStyles.bodyText}>{text}</Text>
      </View>

      <Icon
        name="chevron-right"
        size={Measurements.mediumIcon}
        color={Colours.grey}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
