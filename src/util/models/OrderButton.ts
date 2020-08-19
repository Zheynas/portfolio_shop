import OrderType from '../enums/OrderType';

export interface OrderButton {
  text: string;
  type: OrderType;
  id: string;
}
