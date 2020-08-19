import React from 'react';
// Navigation
import {useNavigation, RouteProp} from '@react-navigation/native';
// Redux
import {
  isSyncingWithRemote,
  ResourcesItem,
  ResourcesReduxState,
} from 'redux-and-the-rest';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import {connect} from 'react-redux';

// Navigation
import {NavigationParamList} from 'NavigationTypes';
import Routes from '../../routes/Routes';
// Redux
import {
  getAddress,
  updateAddress,
  destroyAddress,
} from '../../redux/resources/shippingAddresses';
import {ApplicationState} from '../../redux/types';
// Util
import {FormItem} from '../../util/models/FormItem';
import {ShippingAddress} from '../../models/shippingAddress';
// Components
import FormScreen from '../shared/form/FormScreen';

/**
 * Adds typing to route.params for the correct route
 */
type EditAddressRouteProps = RouteProp<
  NavigationParamList,
  Routes.EDIT_ADDRESS
>;

interface Props {
  /**
   * Save address API call
   * @param {ShippingAddress} address -> New address info to save
   * @returns void
   */
  saveAddress: (address: ShippingAddress) => void;
  /**
   * Address we are editing
   */
  addressItem: ResourcesItem<ShippingAddress>;
  /**
   * Delete address API call
   * @param {string} id -> Id of the address to delete
   * @returns void
   */
  deleteAddress: (id: string) => void;
  /**
   * The react-navigation route containing passed parameters
   */
  route: EditAddressRouteProps;
}

/**
 * Edit shipping address screen
 */
const EditAddress = ({saveAddress, deleteAddress, addressItem}: Props) => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  /**
   * Address values
   */
  const {
    values: {id, label, houseNumber, lineOne, postCode, phoneNumber},
  } = addressItem;
  const addressIsLoading = isSyncingWithRemote(addressItem);

  /**
   * State with initial values from selected address
   */
  const [name, setName] = React.useState(label);
  const [houseNum, setHouseNumber] = React.useState(houseNumber);
  const [addressLineOne, setLineOne] = React.useState(lineOne);
  const [postcode, setPostCode] = React.useState(postCode);
  const [phoneNum, setPhoneNumber] = React.useState(phoneNumber);

  /**
   * Save changes onPress
   */
  const onSavePress = () => {
    const newAddress: ShippingAddress = {
      id,
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
   * Delete button onPress
   */
  const onDeletePress = () => {
    deleteAddress(id);
    // TODO: error handling
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

  // TODO: See if we can refactor so this and NewAddress doesnt repeat as much code

  return (
    <FormScreen
      header="Edit Shipping Address"
      fields={formFields}
      buttonText="SAVE CHANGE"
      buttonOnPress={onSavePress}
      bottomButtonText="DELETE"
      bottomButtonOnPress={onDeletePress}
      loading={addressIsLoading}
    />
  );
};

interface StateProps {
  /**
   * User's shipping addresses
   */
  shippingAddresses: ResourcesReduxState<ShippingAddress>;
}

interface DispatchProps {
  /**
   * Delete address API call
   * @param {string} id -> Id of the address to delete
   * @returns void
   */
  deleteShippingAddress: (id: string) => void;
  /**
   * Save address API call
   * @param {ShippingAddress} address -> New address info to save
   * @returns void
   */
  saveShippingAddress: (address: ShippingAddress) => void;
}

const mapStateToProps = ({shippingAddresses}: ApplicationState) => ({
  shippingAddresses,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<void, unknown, AnyAction>,
) => ({
  saveShippingAddress: (address: ShippingAddress) => {
    //TODO: add addresses to list straight away
    dispatch(
      updateAddress(
        {id: address.id},
        {
          ...address,
          type: 'shipping_address',
        },
      ),
    );
  },
  deleteShippingAddress: (id: string) => {
    //TODO: remove address from list straight away
    dispatch(destroyAddress({id}));
  },
});

// We use mergeProps to avoid passing route param into component just to pass it back out for a dispatch func
const mergeProps = (
  stateProps: StateProps,
  dispatchProps: DispatchProps,
  ownProps: Props,
) => ({
  ...ownProps,
  // Get the address item from redux using route param
  addressItem: getAddress(stateProps.shippingAddresses, {
    id: ownProps.route.params.id,
  }),
  // Save address API call
  saveAddress: (address: ShippingAddress) =>
    dispatchProps.saveShippingAddress(address),
  // Delete address API call
  deleteAddress: (id: string) => dispatchProps.deleteShippingAddress(id),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(EditAddress);
