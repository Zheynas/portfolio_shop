import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {GenericItemOrCollection, ResourcesItem} from 'redux-and-the-rest';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
import Styles from './ShopStyles';
import BOOTSTRAPPED from '../../redux/custom/statuses';
import {ApplicationState} from '../../redux/types';
import {getOrFetchProduct} from '../../redux/resources/products';
import {Product} from '../../models/product';
import SmallButton from '../shared/SmallButton';
import {Measurements, Colours} from '../../styles/Themes';

/**
 * Adds typing to route.params for the correct route
 */
type ProductScreenRouteProp = RouteProp<NavigationParamList, Routes.PRODUCT>;

interface Props {
  /**
   * The react-navigation route containing passed parameters
   */
  route: ProductScreenRouteProp;
  /**
   * Product Category Item
   */
  productItem: ResourcesItem<Product>;
}

const ProductScreen = ({
  productItem: {
    values: {name, smallPicture, price, id, largePicture, description},
  },
}: Props) => {
  const {goBack} = useNavigation();
  return (
    <View style={Styles.columnContainer}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 0,
          left: moderateScale(10),
          zIndex: 4,
        }}
        onPress={goBack}>
        <Icon
          name="ios-arrow-round-back"
          size={Measurements.headerHeight}
          color={Colours.grey}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: moderateScale(10),
          right: moderateScale(10),
          zIndex: 4,
        }}>
        <EvilIcon name="cart" size={moderateScale(35)} color={Colours.grey} />
      </TouchableOpacity>
      <View style={Styles.flexContainer}>
        <Image source={largePicture} style={Styles.image} />
      </View>
      <View style={Styles.productInfoContainer}>
        <Text style={Styles.productHeaderText}>{name.toUpperCase()}</Text>
        <View style={Styles.priceContainer}>
          <Text style={Styles.priceText}>{`£${price}`}</Text>
          <SmallButton text="ADD TO CART" />
        </View>
        <Text style={Styles.productDescriptionText}>{description}</Text>
      </View>
    </View>
  );
};

const mapStateToProps = (
  {products}: ApplicationState,
  {
    route: {
      params: {productId},
    },
  }: ProductScreenRouteProp,
) => ({
  productItem: getOrFetchProduct(
    products,
    productId,
    {},
    {
      forceFetch: ({projection: {type}}: GenericItemOrCollection) =>
        type === BOOTSTRAPPED,
    },
  ),
});

export default connect(mapStateToProps)(ProductScreen);
