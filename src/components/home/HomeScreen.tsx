import React from 'react';
import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import {fetchProducts} from '../../redux/resources/products';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';

import Styles from './HomeScreenStyles';

interface Props {
  getThemes: () => void;
}

/**
 * Home screen
 */
const HomeScreen = ({getThemes}: Props) => {
  getThemes();
  const {navigate} = useNavigation();

  return (
    <View style={Styles.container}>
      <ImageBackground
        source={require('../../../assets/images/sunshine.jpg')}
        style={Styles.background}>
        <TouchableOpacity
          onPress={() => {
            navigate(Routes.CATEGORY);
          }}>
          <Text style={Styles.middleText}>ENTER SHOP</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  getThemes: () => dispatch(fetchProducts()),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
