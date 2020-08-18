export interface ShippingMethod {
  id: string;
  name: string;
  minDays: number;
  maxDays: number;
  cost: number;
}
