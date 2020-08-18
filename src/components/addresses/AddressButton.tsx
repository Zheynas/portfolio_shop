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
  /**
   * On button press functionality to override navigation
   */
  onPress?: (id: string) => void;
}

/**
 * Address button
 */
const AddressButton = ({address, onPress}: Props) => {
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

  const onButtonPress = () => {
    if (onPress) {
      onPress(id);
    } else {
      navigate(Routes.EDIT_ADDRESS, {id});
    }
  };

  return <DetailsButton text={text} onPress={onButtonPress} />;
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
