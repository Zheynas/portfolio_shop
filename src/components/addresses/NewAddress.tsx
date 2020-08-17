import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

import Routes from '../../routes/Routes';
import Styles from './CredentialsStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';
import {createUser} from '../../redux/resources/user';
import AddressForm from './AddressForm';
import {ShippingAddress} from '../../models/shippingAddress';
import {createAddress} from '../../redux/resources/shippingAddresses';

interface Props {
  saveAddress: (address: ShippingAddress) => void;
}

const NewAddress = ({saveAddress}: Props) => {
  const {goBack} = useNavigation();
  const [name, setName] = React.useState('');
  const [houseNumber, setHouseNumber] = React.useState('');
  const [lineOne, setLineOne] = React.useState('');
  const [postCode, setPostCode] = React.useState('');
  const [phoneNumber, setPhoneNumber] = React.useState('');

  const onPress = () => {
    const newAddress: ShippingAddress = {
      label: name,
      houseNumber,
      lineOne,
      postCode,
      phoneNumber,
      type: 'shipping_address',
    };

    saveAddress(newAddress);
    goBack();
  };

  const fields = [
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
    <AddressForm
      header="New address"
      fields={fields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onPress}
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
      }),
    );
  },
});

export default connect(null, mapDispatchToProps)(NewAddress);
