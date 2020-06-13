import {ResourcesReduxState} from 'redux-and-the-rest';

import {Product} from '../../models/product';
import {Category} from '../../models/category';
import { ProductCategory } from '../../models/productCategory';

export type ApplicationState = {
  products: ResourcesReduxState<Product>;
  categorys: ResourcesReduxState<Category>;
  productcategorys: ResourcesReduxState<ProductCategory>;
};
