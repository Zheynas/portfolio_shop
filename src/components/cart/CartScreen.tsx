import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {connect} from 'react-redux';
import {ResourcesList, isSyncingWithRemote} from 'redux-and-the-rest';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import {getOrFetchProducts} from '../../redux/resources/products';
import {ApplicationState} from '../../redux/types';
// Components
import BottomButton from '../shared/buttons/BottomButton';
import CartItem from './CartItem';
import CartMenu from './CartMenu';
// Util
import {Product} from '../../models/product';
// Styling
import Styles from './styles/CartStyles';
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Collection of products for current category
   */
  productsCollection: ResourcesList<Product>;
}

/**
 * Screen to display current cart
 */
const CartScreen = ({productsCollection}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * State
   */
  const [edit, setEdit] = React.useState(false);

  /**
   * Fetching state
   */
  const {items: products} = productsCollection;
  // TODO: handle errors
  const productsAreLoading = isSyncingWithRemote(productsCollection);

  /**
   * Display logic
   */
  const showMenuButton = products.length !== 0;

  /**
   * Cart content renderer
   */
  const renderContent = () => {
    // Loading
    if (productsAreLoading) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    // No items found
    if (products.length === 0) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <Text style={SharedStyles.bodyText}>Nothing here</Text>
        </View>
      );
    }

    // TODO: Calculate total from items
    return (
      <View style={SharedStyles.flexContainer}>
        <View style={Styles.productContainer}>
          <FlatList
            data={products}
            renderItem={({item, index}) => (
              <CartItem
                cartItem={item}
                lastItem={index === products.length - 1}
                edit={edit}
              />
            )}
          />
        </View>
        <View style={Styles.totalContainer}>
          <Text style={SharedStyles.subheaderText}>Total</Text>
          <Text style={SharedStyles.subheaderText}>$204.50</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={SharedStyles.containerNoHeader}>
      <CartMenu
        show={showMenuButton}
        onPress={() => {
          setEdit(!edit);
        }}
        edit={edit}
      />

      {renderContent()}
      <View style={SharedStyles.standardBottomMargin}>
        <BottomButton
          text="CHECKOUT"
          onPress={() => {
            navigate(Routes.CHECKOUT);
          }}
        />
      </View>
    </View>
  );
};

// TODO: get products from cart endpoint when made instead of spoofing with a category's products
const mapStateToProps = ({products}: ApplicationState) => ({
  productsCollection: getOrFetchProducts(products, {
    id: 1,
  }),
});

export default connect(mapStateToProps)(CartScreen);
