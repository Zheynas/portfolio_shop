import React from 'react';
import {useNavigation, RouteProp} from '@react-navigation/native';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';
import {ResourcesItem} from 'redux-and-the-rest';

import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
import AddressForm from './AddressForm';
import {
  getAddress,
  updateAddress,
  destroyAddress,
} from '../../redux/resources/shippingAddresses';
import {ApplicationState} from '../../redux/types';
import {ShippingAddress} from '../../models/shippingAddress';

type EditAddressRouteProps = RouteProp<
  NavigationParamList,
  Routes.EDIT_ADDRESS
>;

interface Props {
  saveAddress: (address: ShippingAddress) => void;
  addressItem: ResourcesItem<ShippingAddress>;
  deleteAddress: (id?: string) => void;
}

const EditAddress = ({
  saveAddress,
  deleteAddress,
  addressItem: {
    values: {id, label, houseNumber, lineOne, postCode, phoneNumber},
  },
}: Props) => {
  const {goBack} = useNavigation();
  const [name, setName] = React.useState(label);
  const [houseNum, setHouseNumber] = React.useState(houseNumber);
  const [addressLineOne, setLineOne] = React.useState(lineOne);
  const [postcode, setPostCode] = React.useState(postCode);
  const [phoneNum, setPhoneNumber] = React.useState(phoneNumber);

  const onPress = () => {
    const newAddress: ShippingAddress = {
      id,
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

  const onDeletePress = () => {
    deleteAddress(id);
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
      value: houseNum,
      setValue: setHouseNumber,
    },
    {
      label: 'Line one',
      value: addressLineOne,
      setValue: setLineOne,
    },
    {
      label: 'Postcode',
      value: postcode,
      setValue: setPostCode,
    },
    {
      label: 'Phone number',
      value: phoneNum,
      setValue: setPhoneNumber,
    },
  ];
  return (
    <AddressForm
      header="Edit address"
      fields={fields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onPress}
      bottomButtonText="DELETE"
      bottomButtonOnPress={onDeletePress}
    />
  );
};

const mapStateToProps = (
  {shippingAddresses}: ApplicationState,
  {
    route: {
      params: {id},
    },
  }: EditAddressRouteProps,
) => ({
  addressItem: getAddress(shippingAddresses, {id}),
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  saveAddress: (address: ShippingAddress) => {
    //TODO: add addresses to list straight away
    dispatch(
      updateAddress(
        {id: address.id},
        {
          ...address,
        },
      ),
    );
  },
  deleteAddress: (id?: string) => {
    //TODO: remove address from list straight away
    dispatch(destroyAddress({id}));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
