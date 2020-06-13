import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Styles from '../ShopStyles';
import {Product} from '../../../models/product';
import Routes from '../../../routes/Routes';

interface Props {
  item: Product;
}
/**
 * Menu button
 */
const SmallContainer = ({
  item: {name, smallPicture, price, id},
}: Props) => {
  const {navigate} = useNavigation();

  return (
    <TouchableOpacity
      style={Styles.flexColumn}
      onPress={() => {
        navigate(Routes.PRODUCT, {productId: id});
      }}>
      <View style={Styles.flexContainer}>
        <Image source={smallPicture} style={Styles.image} />
      </View>
      <View style={Styles.smallTextWrapper}>
        <Text style={Styles.gridHeaderText}>{name}</Text>
        <Text style={Styles.subheaderText}>{`£${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SmallContainer;
