import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../routes/Routes';

import Styles from './HomeScreenStyles';

/**
 * Home screen
 */
const HomeScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../../assets/images/sunshine.jpg')}
        style={Styles.background}>
        <View style={Styles.centerFlex}>
          <TouchableOpacity
            onPress={() => {
              navigate(Routes.CATEGORY);
            }}>
            <Text style={Styles.middleText}>ENTER SHOP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
