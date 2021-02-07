import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Redux
import { ResourcesItem } from 'redux-and-the-rest';

// Navigation
import Routes from '../../../routes/Routes';
// Util
import { Product } from '../../../models/product';
// Styling
import Styles from './styles/GridStyles';
import SharedStyles from '../../shared/styles/SharedStyles';

interface Props {
  /**
   * Product to preview
   */
  item: ResourcesItem<Product>;
  /**
   * Full width state
   */
  large?: boolean;
  /**
   * Extra styles
   */
  style?: ViewStyle;
}

/**
 * Product preview
 */
const ProductPreview = ({
  item: {
    values: { name, largePictureUrl, smallPictureUrl, price, id },
  },
  large,
  style = {},
}: Props) => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation();

  /**
   * Display logic
   */
  const bannerImage = getImageUrl(largePictureUrl, smallPictureUrl, large);
  const textWrapperStyle = large
    ? Styles.largeTextWrapper
    : Styles.smallTextWrapper;

  return (
    <TouchableOpacity
      style={[SharedStyles.flexContainer, style]}
      onPress={() => {
        navigate(Routes.PRODUCT, { productId: id });
      }}
    >
      <View style={SharedStyles.flexContainer}>
        <Image source={bannerImage} style={Styles.image} />
      </View>
      <View style={textWrapperStyle}>
        <Text style={SharedStyles.bodyText} numberOfLines={1}>
          {name}
        </Text>
        <Text style={SharedStyles.boldBodyText}>{`£${price.toFixed(2)}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

/**
 * Helper function to get the appropriate sized picture for the product preview
 */
function getImageUrl(
  largePictureUrl: string,
  smallPictureUrl: string,
  large?: boolean,
) {
  if (large) {
    return { uri: largePictureUrl };
  }

  return { uri: smallPictureUrl };
}

export default ProductPreview;
