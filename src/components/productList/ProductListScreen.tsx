import React from 'react';
import { View } from 'react-native';
// Navigation
import { RouteProp } from '@react-navigation/native';

// Navigation
import { NavigationParamList } from 'NavigationTypes';
import Routes from '../../routes/Routes';
// Components
import OrderHeader from './ordering/OrderHeader';
import ProductList from './ProductList';
import Header from './Header';
// Util
import OrderType from '../../util/enums/OrderType';
import Order from '../../util/enums/Order';
// Styling
import Styles from './styles/ProductListStyles';
import SharedStyles from '../shared/styles/SharedStyles';

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
}

/**
 * Main screen to display a list of products
 */
const ProductListScreen = ({
  route: {
    params: { title, id },
  },
}: Props) => {
  /**
   * Ordering logic
   */
  const [selectedOrderType, setSelectedOrderType] = React.useState(
    OrderType.LATEST,
  );
  const [selectedOrder, setSelectedOrder] = React.useState(Order.ASCENDING);

  return (
    <View style={SharedStyles.flexColumn}>
      <Header title={title} />
      <OrderHeader
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
        <ProductList
          selectedOrderType={selectedOrderType}
          selectedOrder={selectedOrder}
          categoryId={id}
        />
      </View>
    </View>
  );
};

export default ProductListScreen;
