import React from 'react';
import {View} from 'react-native';
// Redux
import {ResourcesItem} from 'redux-and-the-rest';

// Components
import ProductPreview from './ProductPreview';
// Util
import {Product} from '../../../models/product';
// Styling
import Styles from './styles/GridStyles';

interface Props {
  /**
   * A chunk of products to display
   */
  products: ResourcesItem<Product>[];
}

/**
 * Renders a chunk of products (0 - 3 size)
 */
const GridView = ({products}: Props) => {
  const productsLength = products ? products.length : 0;

  if (productsLength === 0) {
    return null;
  }

  return (
    <View style={Styles.gridContainer}>
      {renderSmallContent(products, productsLength)}
      {renderLargeContent(products, productsLength)}
    </View>
  );
};

/**
 * Render a large full width product preview
 */
function renderLargeContent(
  products: ResourcesItem<Product>[],
  productsLength: number,
) {
  // If there is two products to display then it should be displayed as two smaller previews with no large
  if (productsLength === 2) {
    return null;
  }

  // If there is 1 or 3 then a large preview will be required
  return (
    <View style={Styles.gridRow}>
      <ProductPreview item={products[productsLength - 1]} large />
    </View>
  );
}

/**
 * Render smaller half width product previews
 */
function renderSmallContent(
  products: ResourcesItem<Product>[],
  productsLength: number,
) {
  // If there is only one product to render then it should be a full size preview
  if (productsLength === 1) {
    return null;
  }

  // If there is two products then they should both be small ones, and if there are three then there will
  // still be two small previews
  return (
    <View style={Styles.gridRow}>
      <ProductPreview item={products[0]} style={Styles.rightMargin} />
      <ProductPreview item={products[1]} style={Styles.leftMargin} />
    </View>
  );
}

export default GridView;
