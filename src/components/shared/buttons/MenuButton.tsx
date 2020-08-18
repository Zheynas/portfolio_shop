import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles/ConfirmButtonStyles';
import {Colours, Fonts} from '../../../styles/Themes';

import ImageRenderer from '../images/ImageRenderer';

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
  const {navigate} = useNavigation();

  if (hide) {
    return null;
  }

  const renderIcon = () => {
    if (!icon) {
      return null;
    }

    return (
      <Icon
        name={icon}
        size={moderateScale(35)}
        color={Colours.grey}
        style={{marginRight: moderateScale(10)}}
      />
    );
  };

  const renderImage = () => {
    if (!image) {
      return null;
    }

    return (
      <ImageRenderer
        width={moderateScale(40)}
        height={moderateScale(30)}
        image={image}
        style={{marginRight: 20}}
      />
    );
  };

  const onButtonPress = () => {
    if (onPress) {
      onPress();
    } else if (route) {
      navigate(route, params);
    }
  };

  return (
    <TouchableOpacity
      style={{
        height: 50,
        borderBottomWidth: 1,
        borderColor: Colours.grey,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={onButtonPress}>
      {renderIcon()}
      {renderImage()}
      <View style={{flex: 1}}>
        <Text style={{fontFamily: Fonts.regular}}>{text}</Text>
      </View>

      <Icon
        name="chevron-right"
        size={moderateScale(35)}
        color={Colours.grey}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
