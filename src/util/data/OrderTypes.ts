import OrderType from '../enums/OrderType';
import {OrderButton} from '../models/OrderButton';

const OrderTypes: OrderButton[] = [
  {
    text: 'LATEST',
    type: OrderType.LATEST,
    id: '0',
  },
  {
    text: 'BEST SELLER',
    type: OrderType.BEST_SELLER,
    id: '1',
  },
  {
    text: 'PRICE',
    type: OrderType.PRICE,
    id: '2',
  },
];

export default OrderTypes;
