import { Product } from "./product";

export interface ProductCategory {
  id: string;
  title: string;
  products: Product[];
}
