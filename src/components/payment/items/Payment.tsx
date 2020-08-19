import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Navigation
import Routes from '../../../routes/Routes';
// Components
import MenuButton from '../../shared/buttons/MenuButton';
import InfoButton from '../../shared/buttons/InfoButton';
// Util
import {PaymentOption} from '../../../util/enums/PaymentOption';

interface Props {
  /**
   * Payment method to display
   */
  payment?: PaymentOption;
}

/**
 * Current payment method display
 */
const Payment = ({payment}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * No payment method selected
   */
  if (!payment) {
    return (
      <InfoButton
        text={'Select a payment method'}
        onPress={() => {
          navigate(Routes.PAYMENT_SELECTION);
        }}
      />
    );
  }

  /**
   * Values
   */
  const {image, name} = payment;

  return (
    <MenuButton
      text={name}
      image={image}
      onPress={() => {
        navigate(Routes.PAYMENT_SELECTION);
      }}
    />
  );
};

export default Payment;
