import {resources} from 'redux-and-the-rest';

import BOOTSTRAPPED from '../custom/statuses';
import {Category} from '../../models/category';

const url = '';

const {
  reducers: categoryReducer,
  getOrFetchCollection: getOrFetchCategorys,
  getOrFetchItem: getOrFetchCategory,
  buildInitialState,
} = resources<Category>(
  {
    url,
    name: 'categorys',
  },
  ['index', 'show'],
);

const initialCategorys = buildInitialState([
  {
    id: 'new-arrivals',
    name: 'NEW ARRIVALS',
    imagePath: require('../../../assets/images/mens-shoes.jpg'),
    subcategories: [
      {
        id: 'new-arrivals-main',
        header: 'NEW ARRIVALS',
        categories: [
          {id: 'new-tops', title: 'TOPS'},
          {id: 'new-dresses', title: 'DRESSES'},
          {id: 'new-loungewear', title: 'LOUNGEWEAR'},
          {id: 'new-jeans', title: 'JEANS'},
          {id: 'new-shorts', title: 'SHORTS'},
          {id: 'new-skirts', title: 'SKIRTS'},
          {id: 'new-hoodies', title: 'HOODIES'},
          {id: 'new-nightwear', title: 'NIGHTWEAR'},
        ],
      },
    ],
  },
  {
    id: 'best-sellers',
    name: 'BEST SELLERS',
    imagePath: require('../../../assets/images/handbags.jpg'),
    subcategories: [
      {
        id: 'best-sellers-main',
        header: 'BEST SELLERS',
        categories: [
          {id: 'best-tops', title: 'TOPS'},
          {id: 'best-dresses', title: 'DRESSES'},
          {id: 'best-loungewear', title: 'LOUNGEWEAR'},
          {id: 'best-jeans', title: 'JEANS'},
          {id: 'best-shorts', title: 'SHORTS'},
          {id: 'best-skirts', title: 'SKIRTS'},
          {id: 'best-hoodies', title: 'HOODIES'},
          {id: 'best-nightwear', title: 'NIGHTWEAR'},
        ],
      },
    ],
  },
  {
    id: 'women',
    name: 'WOMEN',
    imagePath: require('../../../assets/images/woman.png'),
    subcategories: [
      {
        id: 'women-main',
        header: 'WOMEN',
        categories: [
          {id: 'women-tops', title: 'TOPS'},
          {id: 'women-dresses', title: 'DRESSES'},
          {id: 'women-loungewear', title: 'LOUNGEWEAR'},
          {id: 'women-jeans', title: 'JEANS'},
          {id: 'women-shorts', title: 'SHORTS'},
          {id: 'women-skirts', title: 'SKIRTS'},
          {id: 'women-hoodies', title: 'HOODIES'},
          {id: 'women-nightwear', title: 'NIGHTWEAR'},
        ],
      },
      {
        id: 'women-accessories',
        header: 'ACCESSORIES',
        categories: [
          {id: 'women-belt', title: 'BELT'},
          {id: 'women-bag', title: 'BAGS'},
          {id: 'women-shoes', title: 'SHOES'},
          {id: 'women-sunglasses', title: 'SUNGLASSES'},
          {id: 'women-jewellery', title: 'JEWELLERY'},
        ],
      },
    ],
  },
  {
    id: 'men',
    name: 'MEN',
    imagePath: require('../../../assets/images/men.jpg'),
    subcategories: [
      {
        id: 'men-main',
        header: 'MEN',
        categories: [
          {id: 'men-tops', title: 'TOPS'},
          {id: 'men-loungewear', title: 'LOUNGEWEAR'},
          {id: 'men-jeans', title: 'JEANS'},
          {id: 'men-shorts', title: 'SHORTS'},
          {id: 'men-hoodies', title: 'HOODIES'},
          {id: 'men-jackets', title: 'JACKETS'},
        ],
      },
      {
        id: 'men-accessories',
        header: 'ACCESSORIES',
        categories: [
          {id: 'men-belt', title: 'BELT'},
          {id: 'men-bag', title: 'BAGS'},
          {id: 'men-shoes', title: 'SHOES'},
          {id: 'men-sunglasses', title: 'SUNGLASSES'},
          {id: 'men-socks', title: 'SOCKS'},
        ],
      },
    ],
  },
  {
    id: 'kids',
    name: 'KIDS',
    imagePath: require('../../../assets/images/girl-fashion.jpg'),
    subcategories: [
      {
        id: 'kids-main',
        header: 'KIDS',
        categories: [
          {id: 'kid-girl', title: 'GIRL | 5 - 14 YEARS'},
          {id: 'kid-boy', title: 'BOY | 5 - 14 YEARS'},
          {id: 'kid-baby-girl', title: 'BABY GIRL | 3 MONTHS - 4 YEARS'},
          {id: 'kid-baby-boy', title: 'BABY BOY | 3 MONTHS - 4 YEARS'},
        ],
      },
      {
        id: 'kids-accessories',
        header: 'ACCESSORIES',
        categories: [
          {id: 'kid-shoes', title: 'SHOES'},
          {id: 'kid-umbrellas', title: 'UMBRELLAS'},
          {id: 'kid-socks', title: 'SOCKS'},
          {id: 'kid-sunglasses', title: 'SUNGLASSES'},
        ],
      },
    ],
  },
])
  .setSyncedAt(Date.now())
  .setProjection({type: BOOTSTRAPPED})
  .build();

export {
  categoryReducer,
  getOrFetchCategorys,
  getOrFetchCategory,
  initialCategorys,
};
