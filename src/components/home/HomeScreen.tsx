import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../routes/Routes';
// Styling
import SharedStyles from '../shared/styles/SharedStyles';

/**
 * Home screen
 */
const HomeScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={SharedStyles.centeredContainer}>
      <TouchableOpacity
        onPress={() => {
          navigate(Routes.SECTIONS);
        }}>
        <Text style={SharedStyles.headerText}>LET'S GO!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
