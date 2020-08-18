import React from 'react';
import {View, Text, Image} from 'react-native';
// Redux
import {ResourcesItem} from 'redux-and-the-rest';

// Components
import Selector from './Selector';
// Util
import {Product} from '../../models/product';
// Styling
import SharedStyles from '../shared/styles/SharedStyles';
import Styles from './CartStyles';

interface Props {
  /**
   * Cart item to display
   */
  cartItem: ResourcesItem<Product>;
  /**
   * Last item in list indicator
   */
  lastItem: boolean;
  /**
   * Edit state
   */
  edit: boolean;
}

/**
 * Cart item display
 */
const CartItem = ({
  cartItem: {
    values: {name, smallPictureUrl, price},
  },
  lastItem,
  edit,
}: Props) => {
  /**
   * State
   */
  const [selected, setSelected] = React.useState(false);

  /**
   * Display logic
   */
  const bottomBorder = lastItem ? 0 : 1;

  return (
    <View style={[Styles.cartItemContainer, {borderBottomWidth: bottomBorder}]}>
      <Selector
        show={edit}
        selected={selected}
        onPress={() => {
          setSelected(!selected);
        }}
      />

      <View style={SharedStyles.row}>
        <Image source={{uri: smallPictureUrl}} style={Styles.image} />

        <View style={Styles.cartItemContentWrapper}>
          <View>
            <Text style={SharedStyles.boldBodyText} numberOfLines={1}>
              {name.toUpperCase()}
            </Text>
            <Text style={Styles.cartItemDetails}>{`COLOUR: ${'BLUE'}`}</Text>
            <Text style={Styles.cartItemDetails}>{`SIZE: ${'XL'}`}</Text>
          </View>
          <View>
            <Text style={Styles.cartItemDetails}>{`${'2'} x $${price}`}</Text>
            <Text style={SharedStyles.boldBodyText}>{'$150'}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartItem;
