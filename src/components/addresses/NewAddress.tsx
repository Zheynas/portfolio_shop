import React from 'react';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

// Redux
import {createAddress} from '../../redux/resources/shippingAddresses';
// Util
import FormItem from '../../models/formItem';
import {ShippingAddress} from '../../models/shippingAddress';
// Components
import FormScreen from '../shared/form/FormScreen';

interface Props {
  /**
   * Save address API call
   * @param {ShippingAddress} address -> New address info to save
   * @returns void
   */
  saveAddress: (address: ShippingAddress) => void;
}

/**
 * Create a new shipping address screen
 */
const NewAddress = ({saveAddress}: Props) => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  /**
   * State
   */
  const [name, setName] = React.useState('');
  const [houseNumber, setHouseNumber] = React.useState('');
  const [lineOne, setLineOne] = React.useState('');
  const [postCode, setPostCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  /**
   * Address values
   */
  const addressIsLoading = false; // TODO: loading and errors

  /**
   * Create shipping address
   */
  const onCreatePress = () => {
    const newAddress: ShippingAddress = {
      id: '',
      label: name,
      houseNumber,
      lineOne,
      postCode,
      phoneNumber,
    };

    saveAddress(newAddress);
    // TODO: validation and error handling
    goBack();
  };

  /**
   * Fields for form screen
   */
  const formFields: FormItem[] = [
    {
      label: 'Name',
      value: name,
      setValue: setName,
    },
    {
      label: 'House / Flat number',
      value: houseNumber,
      setValue: setHouseNumber,
    },
    {
      label: 'Line one',
      value: lineOne,
      setValue: setLineOne,
    },
    {
      label: 'Postcode',
      value: postCode,
      setValue: setPostCode,
    },
    {
      label: 'Phone number',
      value: phoneNumber,
      setValue: setPhoneNumber,
    },
  ];

  return (
    <FormScreen
      header="New Shipping Address"
      fields={formFields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onCreatePress}
      loading={addressIsLoading}
    />
  );
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  saveAddress: (address: ShippingAddress) => {
    //TODO: add addresses to list straight away
    dispatch(
      createAddress({
        ...address,
        type: 'shipping_address',
      }),
    );
  },
});

export default connect(null, mapDispatchToProps)(NewAddress);
