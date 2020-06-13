import {resources} from 'redux-and-the-rest';

import BOOTSTRAPPED from '../custom/statuses';
import {ProductCategory} from '../../models/productCategory';

const url = '';

const {
  reducers: productCategoryReducer,
  getOrFetchCollection: getOrFetchProductCategorys,
  getOrFetchItem: getOrFetchProductCategory,
  buildInitialState,
} = resources<ProductCategory>(
  {
    url,
    name: 'products',
  },
  ['index', 'show'],
);

const initialProductCategorys = buildInitialState([
  {
    id: 'new-dresses',
    title: 'Dresses',
    products: [
      {
        id: 'naanaa-white-floral-ruched-bodycon-dress',
        name: 'NaaNaa White Floral Ruched Bodycon Dress',
        price: 32.00,
        smallPicture: require('../../../assets/images/floral-small.jpg'),
        largePicture: require('../../../assets/images/floral-large.jpg'),
        description:
          'NaaNaa. Make a striking statement at parties in this floral bodycon dress. Wear with stilettos for a chic finish.',
        dateAdded: 1580716611,
        rating: 1.41,
      },
      {
        id: 'white-spot-button-front-playsuit',
        name: 'White Spot Button Front Playsuit',
        price: 25.99,
        smallPicture: require('../../../assets/images/white-spot-button-front-playsuit-1.jpg'),
        largePicture: require('../../../assets/images/white-spot-button-front-playsuit.jpg'),
        description:
          'Add a playful touch to your warm-weather wardrobe with this white spot playsuit. Wear with chunky flatforms for a cute finish.',
        dateAdded: 1588492611,
        rating: 9.0,
      },
      {
        id: 'black-floral-strappy-mini-sundress',
        name: 'Black Floral Strappy Mini Sundress',
        price: 15.99,
        smallPicture: require('../../../assets/images/black-floral-strappy-mini-sundress-1.jpg'),
        largePicture: require('../../../assets/images/black-floral-strappy-mini-sundress.jpg'),
        description:
          'Let your style bloom in this floral mini sundress. To toughen it up, wear with a denim jacket and biker boots.',
        dateAdded: 1578038211,
        rating: 3.4,
      },
      {
        id: 'black-floral-puff-sleeve-mini-dress',
        name: 'Black Floral Puff Sleeve Mini Dress',
        price: 25.99,
        smallPicture: require('../../../assets/images/black-floral-puff-sleeve-mini-dress-1.jpg'),
        largePicture: require('../../../assets/images/black-floral-puff-sleeve-mini-dress.jpg'),
        description:
          'Bring your style into bloom with this floral mini dress. Wear with strappy stilettos to lift the look.',
        dateAdded: 1583222211,
        rating: 3.6,
      },
      {
        id: 'apricot-rust-crinkle-shirt-swing-dress',
        name: 'Apricot Rust Crinkle Shirt Swing Dress',
        price: 26.00,
        smallPicture: require('../../../assets/images/apricot-rust-crinkle-shirt-swing-dress-1.jpg'),
        largePicture: require('../../../assets/images/apricot-rust-crinkle-shirt-swing-dress.jpg'),
        description:
          'Apricot. Rock rust in this crinkle swing dress. Wear with boots for a statement finish.',
        dateAdded: 1583229211,
        rating: 3.6,
      },
    ],
  },
])
  .setSyncedAt(Date.now())
  .setProjection({type: BOOTSTRAPPED})
  .build();

export {
  productCategoryReducer,
  getOrFetchProductCategorys,
  getOrFetchProductCategory,
  initialProductCategorys,
};
