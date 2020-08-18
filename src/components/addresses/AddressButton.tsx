import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {ResourcesItem} from 'redux-and-the-rest';

// Navigation
import Routes from '../../routes/Routes';
// Components
import DetailsButton from '../payment/DetailsButton';
// Util
import {ShippingAddress} from '../../models/shippingAddress';

interface Props {
  /**
   * Address to display
   */
  address: ResourcesItem<ShippingAddress>;
}

/**
 * Address button
 */
const AddressButton = ({address}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * Display logic
   */
  const {
    values: {id},
  } = address;
  const text = convertAddressForButton(address);

  return (
    <DetailsButton
      text={text}
      onPress={() => {
        navigate(Routes.EDIT_ADDRESS, {id});
      }}
    />
  );
};

/**
 * Helper function to convert resource address object into array of strings to display
 */
function convertAddressForButton({
  values: {label, houseNumber, lineOne, postCode, phoneNumber},
}: ResourcesItem<ShippingAddress>) {
  return [label, `${houseNumber} ${lineOne}`, postCode, phoneNumber];
}

export default AddressButton;
