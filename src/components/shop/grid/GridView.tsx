import React from 'react';
import {View} from 'react-native';

import Styles from '../ShopStyles';
import SmallContainer from './SmallContainer';
import LargeContainer from './LargeContainer';
import { ProductCategory } from '../../../models/productCategory';

interface Props {
  /**
   * group of items
   */
  group: ProductCategory[];
}

const GridView = ({group}: Props) => (
  <View style={Styles.gridContainer}>{renderContent(group)}</View>
);

function renderContent(group) {
  console.log('group',group)
  const groupLength = group.length;

  return (
    <>
      {renderSmallContent(group)}
      <LargeContainer item={group[groupLength - 1]} />
    </>
  );
}

function renderSmallContent(group) {
  const groupLength = group.length;

  if (groupLength === 1) {
    return null;
  }
  
  return (
    <View style={Styles.flexRow}>
      <SmallContainer item={group[0]} />
      <View style={Styles.spacerContainer} />
      <SmallContainer item={group[1]} />
    </View>
  );
}

export default GridView;
