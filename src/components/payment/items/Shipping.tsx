import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {ResourcesItem} from 'redux-and-the-rest';

// Navigation
import Routes from '../../../routes/Routes';
// Components
import InfoButton from '../../shared/buttons/InfoButton';
import DeliveryButton from '../../shared/buttons/DeliveryButton';
// Util
import {ShippingMethod} from '../../../models/shippingMethod';

interface Props {
  /**
   * Shipping method to display
   */
  shipping: ResourcesItem<ShippingMethod>;
}

/**
 * Current shipping method display
 */
const Shipping = ({shipping}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * No shipping method selected
   */
  if (!shipping) {
    return (
      <InfoButton
        text={'Select a delivery method'}
        onPress={() => {
          navigate(Routes.SHIPPING);
        }}
      />
    );
  }

  return (
    <DeliveryButton
      shippingMethod={shipping}
      onPress={() => {
        navigate(Routes.SHIPPING);
      }}
    />
  );
};

export default Shipping;
