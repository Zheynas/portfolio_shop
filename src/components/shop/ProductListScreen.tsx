import React from 'react';
import {View, ScrollView, Text, FlatList, TouchableOpacity} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {connect} from 'react-redux';
import {GenericItemOrCollection, ResourcesItem} from 'redux-and-the-rest';
import _ from 'lodash';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';

import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
import Styles from './ShopStyles';
import GridView from './grid/GridView';
import BOOTSTRAPPED from '../../redux/custom/statuses';
import {getOrFetchProductCategory} from '../../redux/resources/productcategorys';
import {ApplicationState} from '../../redux/types';
import {ProductCategory} from '../../models/productCategory';
import OrderByBar from './OrderByBar';
import OrderType from '../../util/enums/OrderType';
import Order from '../../util/enums/Order';
import {Product} from '../../models/product';
import {Measurements, Colours} from '../../styles/Themes';
import {moderateScale} from 'react-native-size-matters';

/**
 * Adds typing to route.params for the correct route
 */
type ProductListScreenRouteProp = RouteProp<
  NavigationParamList,
  Routes.PRODUCT_LIST
>;

interface Props {
  /**
   * The react-navigation route containing passed parameters
   */
  route: ProductListScreenRouteProp;
  /**
   * Product Category Item
   */
  productCategoryItem: ResourcesItem<ProductCategory>;
}

const ProductListScreen = ({
  productCategoryItem: {
    values: {products, title},
  },
}: Props) => {
  const [selectedOrderType, setSelectedOrderType] = React.useState(
    OrderType.LATEST,
  );
  const [selectedOrder, setSelectedOrder] = React.useState(Order.ASCENDING);
  const orderedProducts = orderItems(
    selectedOrderType,
    selectedOrder,
    products,
  );
  const items = _.chunk(orderedProducts, 3);

  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.productListHeader}>
        <TouchableOpacity>
          <Icon
            name="ios-arrow-round-back"
            size={Measurements.headerHeight}
            color={Colours.grey}
          />
        </TouchableOpacity>
        <View style={Styles.productListHeaderTextWrapper}>
          <Text style={Styles.productListHeaderText}>{title}</Text>
        </View>
        <TouchableOpacity>
          <FeatherIcon
            name="filter"
            size={moderateScale(30)}
            color={Colours.grey}
          />
        </TouchableOpacity>
      </View>
      <OrderByBar
        selectedOrderType={selectedOrderType}
        setSelectedOrderType={(type: OrderType) => {
          setSelectedOrderType(type);
        }}
        selectedOrder={selectedOrder}
        setSelectedOrder={(type: Order) => {
          setSelectedOrder(type);
        }}
      />
      <View style={Styles.productScrollContainer}>
        <ScrollView style={Styles.flexContainer}>
          <Text
            style={
              Styles.productLengthText
            }>{`${products.length} results`}</Text>
          <FlatList
            data={items}
            renderItem={({item}) => <GridView group={item} />}
          />
        </ScrollView>
      </View>
    </View>
  );
};

function sortByNumber(firstNumber: number, secondNumber: number, order: Order) {
  if (order === Order.ASCENDING) {
    return firstNumber < secondNumber ? 1 : -1;
  }
  return firstNumber > secondNumber ? 1 : -1;
}

function orderItems(orderType: OrderType, order: Order, items: Product[]) {
  switch (orderType) {
    case OrderType.LATEST:
      return items.sort((item_1, item_2) => {
        const {dateAdded} = item_1;
        const {dateAdded: secondDate} = item_2;
        return sortByNumber(dateAdded, secondDate, order);
      });
    case OrderType.PRICE:
      return items.sort((item_1, item_2) => {
        const {price} = item_1;
        const {price: secondPrice} = item_2;
        return sortByNumber(price, secondPrice, order);
      });
    case OrderType.BEST_SELLER:
      return items.sort((item_1, item_2) => {
        const {rating} = item_1;
        const {rating: secondRating} = item_2;
        return sortByNumber(rating, secondRating, order);
      });
  }
}

const mapStateToProps = (
  {productcategorys}: ApplicationState,
  {
    route: {
      params: {categoryId},
    },
  }: ProductListScreenRouteProp,
) => ({
  productCategoryItem: getOrFetchProductCategory(
    productcategorys,
    categoryId,
    {},
    {
      forceFetch: ({projection: {type}}: GenericItemOrCollection) =>
        type === BOOTSTRAPPED,
    },
  ),
});

export default connect(mapStateToProps)(ProductListScreen);
