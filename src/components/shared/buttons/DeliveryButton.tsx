import React from 'react';
// Redux
import {ResourcesItem} from 'redux-and-the-rest';
// Util
import moment from 'moment';

// Components
import DetailsButton from './DetailsButton';
// Util
import {ShippingMethod} from '../../../models/shippingMethod';

interface Props {
  /**
   * Method to display
   */
  shippingMethod: ResourcesItem<ShippingMethod>;
  /**
   * On button press functionality
   */
  onPress: (id: string) => void;
}

/**
 * Delivery method display button
 */
const DeliveryButton = ({shippingMethod: {values: method}, onPress}: Props) => {
  /**
   * Display logic
   */
  const {id} = method;
  const text = convertShippingMethodForButton(method);

  return (
    <DetailsButton
      text={text}
      onPress={() => {
        onPress(id);
      }}
    />
  );
};

/**
 * Helper function to convert delivery method object into array of strings to display in button
 */
function convertShippingMethodForButton({
  name,
  minDays,
  maxDays,
  cost,
}: ShippingMethod) {
  const minDay = moment().add(minDays, 'days').format('Do MMM');
  const maxDay = moment().add(maxDays, 'days').format('Do MMM');
  const text = [name, `${minDay} - ${maxDay}`, `Cost: £${cost}`];

  return text;
}

export default DeliveryButton;
