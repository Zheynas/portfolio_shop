import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
// Redux
import { connect } from 'react-redux';
import { ResourcesList, isSyncingWithRemote } from 'redux-and-the-rest';
// Util
import _ from 'lodash';
// Styling
import { moderateScale } from 'react-native-size-matters';

// Redux
import { ApplicationState } from '../../redux/types';
import { getOrFetchProducts } from '../../redux/resources/products';
// Components
import GridView from './grid/GridView';
// Util
import OrderType from '../../util/enums/OrderType';
import Order from '../../util/enums/Order';
import { Product } from '../../models/product';
// Styling
import SharedStyles from '../shared/styles/SharedStyles';

interface Props {
  /**
   * Collection of products for current category (ordered)
   */
  productsCollection: ResourcesList<Product>;
  /**
   * Ordering type
   */
  selectedOrderType: OrderType;
  /**
   * Ascending or descending
   */
  selectedOrder: Order;
  /**
   * Category id that we want to view products from
   */
  categoryId: string;
}

/**
 * Displays a list of products
 */
const ProductList = ({ productsCollection }: Props) => {
  /**
   * Products values
   */
  const { items: products } = productsCollection;
  // TODO: Error handling
  const isLoading = isSyncingWithRemote(productsCollection);

  if (isLoading) {
    return (
      <View style={SharedStyles.centeredContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Divide products into chunks of 3
  const items = _.chunk(products, 3);

  return (
    <>
      <Text style={SharedStyles.bodyText}>{`${products.length} results`}</Text>
      <FlatList
        data={items}
        keyExtractor={(item, index) => `row-${index}`}
        contentContainerStyle={{ paddingBottom: moderateScale(150) }}
        renderItem={({ item }) => <GridView products={item} />}
      />
    </>
  );
};

// TODO: Alter endpoint to accept ordering type for the products
const mapStateToProps = (
  { products }: ApplicationState,
  { selectedOrderType, categoryId }: Props,
) => ({
  productsCollection: getOrFetchProducts(products, {
    id: categoryId,
    order: selectedOrderType,
  }),
});

export default connect(mapStateToProps)(ProductList);
