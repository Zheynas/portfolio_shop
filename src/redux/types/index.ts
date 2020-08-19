import {ResourcesReduxState} from 'redux-and-the-rest';

import {Product} from '../../models/product';
import {Category} from '../../models/category';
import {Section} from '../../models/section';
import {SubSection} from '../../models/subSection';
import {ShippingMethod} from '../../models/shippingMethod';
import {User} from '../../models/user';
import {ShippingAddress} from '../../models/shippingAddress';

export type ApplicationState = {
  products: ResourcesReduxState<Product>;
  categorys: ResourcesReduxState<Category>;
  sections: ResourcesReduxState<Section>;
  subSections: ResourcesReduxState<SubSection>;
  shippingMethods: ResourcesReduxState<ShippingMethod>;
  users: ResourcesReduxState<User>;
  shippingAddresses: ResourcesReduxState<ShippingAddress>;
};
