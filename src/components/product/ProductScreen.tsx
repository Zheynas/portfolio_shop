import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
// Navigation
import {RouteProp, useNavigation} from '@react-navigation/native';
// Redux
import {connect} from 'react-redux';
import {ResourcesItem} from 'redux-and-the-rest';
// Components
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcon from 'react-native-vector-icons/EvilIcons';

// Navigation
import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
// Redux
import {ApplicationState} from '../../redux/types';
import {getProduct} from '../../redux/resources/products';
// Components
import SmallButton from '../shared/buttons/SmallButton';
// Util
import {Product} from '../../models/product';
// Styling
import Styles from './styles/ProductStyles';
import {Measurements, Colours} from '../../styles/Themes';
import SharedStyles from '../shared/styles/SharedStyles';

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

/**
 * Screen to view a single product
 */
const ProductScreen = ({
  productItem: {
    values: {name, price, largePictureUrl, description},
  },
}: Props) => {
  /**
   * Navigation
   */
  const {goBack, navigate} = useNavigation();

  return (
    <View style={SharedStyles.flexColumn}>
      <TouchableOpacity style={Styles.backButton} onPress={goBack}>
        <Icon
          name="ios-arrow-round-back"
          size={Measurements.headerHeight}
          color={Colours.grey}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={Styles.cartButton}
        onPress={() => {
          navigate(Routes.CART);
        }}>
        <EvilIcon
          name="cart"
          size={Measurements.mediumIcon}
          color={Colours.grey}
        />
      </TouchableOpacity>

      <View style={SharedStyles.flexContainer}>
        <Image source={{uri: largePictureUrl}} style={Styles.image} />
      </View>

      <View style={Styles.infoContainer}>
        <Text style={SharedStyles.mediumText}>{name.toUpperCase()}</Text>

        <View style={Styles.priceContainer}>
          <Text
            style={[
              SharedStyles.boldBodyText,
              SharedStyles.rightMargin,
            ]}>{`£${price.toFixed(2)}`}</Text>
          <SmallButton text="ADD TO CART" />
        </View>

        <Text style={SharedStyles.bodyText}>{description}</Text>
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
  }: Props,
) => ({
  productItem: getProduct(products, {id: productId}),
});

export default connect(mapStateToProps)(ProductScreen);
