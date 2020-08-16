import React from 'react';
import {
  View,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  GenericItemOrCollection,
  ResourcesItem,
  ResourcesList,
  FETCHING,
} from 'redux-and-the-rest';
import _ from 'lodash';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';

import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
import Styles from './ShopStyles';
import GridView from './grid/GridView';
import {ApplicationState} from '../../redux/types';
import OrderByBar from './OrderByBar';
import OrderType from '../../util/enums/OrderType';
import Order from '../../util/enums/Order';
import {Product} from '../../models/product';
import {Measurements, Colours} from '../../styles/Themes';
import {getOrFetchProducts} from '../../redux/resources/products';

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
   * Collection of products for current category
   */
  productsCollection: ResourcesList<Product>;
}

const ProductListScreen = ({
  productsCollection: {
    items: products,
    status: {type},
  },
  route: {
    params: {title},
  },
}: Props) => {
  const {goBack} = useNavigation();

  const [selectedOrderType, setSelectedOrderType] = React.useState(
    OrderType.LATEST,
  );
  const [selectedOrder, setSelectedOrder] = React.useState(Order.ASCENDING);

  const isLoading = type === FETCHING;

  if (isLoading) {
    return (
      <View style={Styles.centerFlex}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  console.log('products', products);

  const orderedProducts = orderItems(
    selectedOrderType,
    selectedOrder,
    products,
  );

  console.log('orderedProducts', orderedProducts);

  const items = _.chunk(orderedProducts, 3);

  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.productListHeader}>
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}>
          <Icon
            name="ios-arrow-round-back"
            size={Measurements.headerHeight}
            color={Colours.grey}
          />
        </TouchableOpacity>
        <View style={Styles.centerFlex}>
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
        setSelectedOrderType={(orderType: OrderType) => {
          setSelectedOrderType(orderType);
        }}
        selectedOrder={selectedOrder}
        setSelectedOrder={(orderType: Order) => {
          setSelectedOrder(orderType);
        }}
      />
      <View style={Styles.productScrollContainer}>
        <Text
          style={Styles.productLengthText}>{`${products.length} results`}</Text>
        <FlatList
          data={items}
          keyExtractor={(item, index)=> `row-${index}`}
          contentContainerStyle={{ paddingBottom: moderateScale(150)}}
          renderItem={({item}) => <GridView group={item} />}
        />
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

function orderItems(
  orderType: OrderType,
  order: Order,
  items: ResourcesItem<Product>[],
) {
  switch (orderType) {
    case OrderType.LATEST:
      return items.sort((item_1, item_2) => {
        const {
          values: {createdAt},
        } = item_1;
        const {
          values: {createdAt: secondDate},
        } = item_2;
        return sortByNumber(
          new Date(createdAt).getTime(),
          new Date(secondDate).getTime(),
          order,
        );
      });
    case OrderType.PRICE:
      return items.sort((item_1, item_2) => {
        const {
          values: {price},
        } = item_1;
        const {
          values: {price: secondPrice},
        } = item_2;
        return sortByNumber(price, secondPrice, order);
      });
    case OrderType.BEST_SELLER:
      return items.sort((item_1, item_2) => {
        const {
          values: {rating},
        } = item_1;
        const {
          values: {rating: secondRating},
        } = item_2;
        return sortByNumber(rating, secondRating, order);
      });
  }
}

const mapStateToProps = (
  {products}: ApplicationState,
  {
    route: {
      params: {id},
    },
  }: Props,
) => ({
  productsCollection: getOrFetchProducts(products, {
    id: id,
  }),
});

export default connect(mapStateToProps)(ProductListScreen);
