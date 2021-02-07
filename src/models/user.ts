import { ShippingAddress } from './shippingAddress';

export interface User {
  id?: string;
  authenticationToken?: string;
  password?: string;
  type: string;
  firstName?: string;
  lastName?: string;
  email: string;
  shippingAddresses?: ShippingAddress[];
}
