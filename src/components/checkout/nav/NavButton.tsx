import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../../routes/Routes';
// Styling
import SharedStyles from '../../shared/styles/SharedStyles';

interface Props {
  /**
   * Current screen
   */
  currentScreen: Routes;
  /**
   * Button destination
   */
  destination: Routes;
}

/**
 * Checkout nav button
 */
const NavButton = ({currentScreen, destination}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={SharedStyles.centeredContainer}
      onPress={() => {
        navigate(destination);
      }}>
      <Text style={getTextStyle(currentScreen, destination)}>
        {destination}
      </Text>
    </TouchableOpacity>
  );
};

/**
 * Helper function to get text style for button dependant on current screen
 */
function getTextStyle(currentScreen: Routes, buttonName: Routes) {
  return currentScreen === buttonName
    ? SharedStyles.boldNavText
    : SharedStyles.navText;
}

export default NavButton;
