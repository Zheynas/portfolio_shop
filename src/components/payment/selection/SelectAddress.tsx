import React from 'react';

// Navigation
import {useNavigation} from '@react-navigation/native';
// Component
import DisplayAddresses from '../../shared/addresses/DisplayAddresses';

/**
 * Screen with a list of shipping addresses
 */
const SelectAddress = () => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  return (
    <DisplayAddresses
      headerText="Select Address"
      addressOnPress={() => {
        // TODO: save address on current order resource
        goBack();
      }}
    />
  );
};

export default SelectAddress;
