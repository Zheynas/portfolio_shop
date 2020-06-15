import {Product} from './product';

export interface Category {
  id: string;
  name: string;
  title: string;
  products: Product[];
}
