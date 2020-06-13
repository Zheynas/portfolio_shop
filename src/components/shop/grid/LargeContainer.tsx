import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import Styles from '../ShopStyles';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../models/product';
import Routes from '../../../routes/Routes';

interface Props {
  item: Product;
}

const LargeContainer = ({item: {name, largePicture, price, id}}: Props) => {
  const {navigate} = useNavigation();
  return (
    <TouchableOpacity
      style={Styles.flexContainer}
      onPress={() => {
        navigate(Routes.PRODUCT, {productId: id});
      }}>
      <View style={Styles.flexContainer}>
        <Image source={largePicture} style={Styles.image} />
      </View>
      <View style={Styles.largeTextWrapper}>
        <Text style={Styles.gridHeaderText}>{name}</Text>
        <Text style={Styles.subheaderText}>{`£${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LargeContainer;
