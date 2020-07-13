import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem} from 'redux-and-the-rest';
import DropDownPicker from 'react-native-dropdown-picker';

import Styles from './CartStyles';
import {Colours, Fonts} from '../../styles/Themes';
import {Product} from '../../models/product';

interface Props {
  item: ResourcesItem<Product>;
  lastItem: boolean;
  edit: boolean;
}

/**
 * Menu button
 */
const CartItem = ({
  item: {
    values: {name, largePictureUrl, smallPictureUrl, price, id},
  },
  lastItem,
  edit,
}: Props) => {
  const {navigate} = useNavigation();
  const [selected, setSelected] = React.useState(false);
  const bottomBorder = lastItem ? 0 : 1;

  const renderSelector = () => {
    if (!edit) {
      return null;
    }

    const icon = selected
      ? 'checkbox-marked-circle'
      : 'checkbox-blank-circle-outline';
    const colour = selected ? Colours.coral : Colours.grey;
    return (
      <TouchableOpacity
        onPress={() => {
          setSelected(!selected);
        }}
        style={{
          width: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={icon} size={moderateScale(30)} color={colour} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[Styles.cartItemContainer, {borderBottomWidth: bottomBorder}]}>
      {renderSelector()}
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={{uri: smallPictureUrl}} style={Styles.image} />
        <View style={Styles.cartItemContentWrapper}>
          <View>
            <Text style={Styles.cartItemName} numberOfLines={1}>
              {name.toUpperCase()}
            </Text>
            <Text style={Styles.cartItemDetails}>{`COLOUR: ${'BLUE'}`}</Text>
            <Text style={Styles.cartItemDetails}>{`SIZE: ${'XL'}`}</Text>
          </View>
          <View>
            <Text style={Styles.cartItemDetails}>{`${'2'} x $${price}`}</Text>
            <Text style={Styles.cartItemPrice}>{'$150'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
