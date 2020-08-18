import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ResourcesItem} from 'redux-and-the-rest';

import Styles from '../ShopStyles';
import {useNavigation} from '@react-navigation/native';
import {Product} from '../../../models/product';
import Routes from '../../../routes/Routes';
import getImage from '../../../../assets/images';
import SharedStyles from '../../shared/styles/SharedStyles';

interface Props {
  item: ResourcesItem<Product>;
  large?: boolean;
}

const GridContainer = ({
  item: {
    values: {name, largePictureUrl, smallPictureUrl, price, id},
  },
  large,
}: Props) => {
  const {navigate} = useNavigation();
  const bannerImage = getImageUrl(largePictureUrl, smallPictureUrl, large);
  const textWrapperStyle = large
    ? Styles.largeTextWrapper
    : Styles.smallTextWrapper;

  return (
    <TouchableOpacity
      style={SharedStyles.flexContainer}
      onPress={() => {
        navigate(Routes.PRODUCT, {productId: id});
      }}>
      <View style={SharedStyles.flexContainer}>
        <Image source={bannerImage} style={Styles.image} />
      </View>
      <View style={textWrapperStyle}>
        <Text style={Styles.gridHeaderText}>{name}</Text>
        <Text style={Styles.subheaderText}>{`£${price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

function getImageUrl(
  largePictureUrl: string,
  smallPictureUrl: string,
  large?: boolean,
) {
  if (large) {
    if (largePictureUrl) {
      return {uri: largePictureUrl};
    }
  } else {
    if (smallPictureUrl) {
      return {uri: smallPictureUrl};
    }
  }
  return null;
}

export default GridContainer;
