import React from 'react';
import {View} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Components
import MenuButton from '../../shared/buttons/MenuButton';
import ScreenWrapper from '../../shared/wrappers/ScreenWrapper';
// Util
import Payments from '../../../util/data/Payments';
import {PaymentOption} from '../../../util/enums/PaymentOption';

/**
 * Select payment method screen
 */
const PaymentSelection = () => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  const onPress = () => {
    // TODO: Add payment option to order resource
    goBack();
  };
  return (
    <ScreenWrapper headerText="Select Payment" scroll>
      <View>
        {Payments.map(({name, image, id}: PaymentOption) => (
          <MenuButton key={id} text={name} image={image} onPress={onPress} />
        ))}
      </View>
    </ScreenWrapper>
  );
};

export default PaymentSelection;
