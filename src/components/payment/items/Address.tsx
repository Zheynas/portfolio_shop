import React from 'react';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Redux
import { ResourcesItem } from 'redux-and-the-rest';

// Navigation
import Routes from '../../../routes/Routes';
// Components
import AddressButton from '../../shared/buttons/AddressButton';
import InfoButton from '../../shared/buttons/InfoButton';
// Util
import { ShippingAddress } from '../../../models/shippingAddress';

interface Props {
  /**
   * Address to display
   */
  address?: ResourcesItem<ShippingAddress>;
}

/**
 * Current shipping address display
 */
const Address = ({ address }: Props) => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation();

  /**
   * No address selected
   */
  if (!address) {
    return (
      <InfoButton
        text={'Select a shipping address'}
        onPress={() => {
          navigate(Routes.CHANGE_ADDRESS);
        }}
      />
    );
  }

  return (
    <AddressButton
      address={address}
      onPress={() => {
        navigate(Routes.CHANGE_ADDRESS);
      }}
    />
  );
};

export default Address;
