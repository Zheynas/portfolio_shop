import React from 'react';
import {View} from 'react-native';
import {ResourcesItem} from 'redux-and-the-rest';

import Styles from '../ShopStyles';
import GridContainer from './GridContainer';
import {Product} from '../../../models/product';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  /**
   * group of items
   */
  group: ResourcesItem<Product>[];
}

const GridView = ({group}: Props) => {
  return (
    <View style={Styles.gridContainer}>
      {renderSmallContent(group)}
      {renderLargeContent(group)}
    </View>
  );
};

function renderLargeContent(group: ResourcesItem<Product>[]) {
  const groupLength = group.length;
  console.log('groupLength', groupLength);

  if (groupLength !== 2) {
    return (
      <View style={{height: moderateScale(300)}}>
        <GridContainer item={group[groupLength - 1]} large />
      </View>
    );
  }
}

function renderSmallContent(group: ResourcesItem<Product>[]) {
  const groupLength = group.length;

  if (groupLength === 1) {
    return null;
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        height: moderateScale(300),
      }}>
      <GridContainer item={group[0]} />
      <View style={Styles.spacerContainer} />
      <GridContainer item={group[1]} />
    </View>
  );
}

export default GridView;
