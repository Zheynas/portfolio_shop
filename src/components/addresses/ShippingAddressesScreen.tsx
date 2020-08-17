import React from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {ResourcesList, isSyncingWithRemote} from 'redux-and-the-rest';
import {connect} from 'react-redux';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import {ApplicationState} from '../../redux/types';
import {getOrFetchAddresses} from '../../redux/resources/shippingAddresses';
// Components
import DetailsButton from '../payment/DetailsButton';
import BottomButton from '../shared/BottomButton';
// Util
import {ShippingAddress} from '../../models/shippingAddress';
// Styling
import SharedStyles from '../shared/SharedStyles';

interface Props {
  /**
   * Current user's shipping addresses
   */
  userAddressList: ResourcesList<ShippingAddress>;
}

/**
 * Screen with a list of shipping addresses
 */
const ShippingAddressesScreen = ({userAddressList}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * Shipping address values
   */
  const {items: addresses} = userAddressList;
  // TODO: Handle errors
  const addressIsLoading = isSyncingWithRemote(userAddressList);

  /**
   * Address list renderer
   */
  const renderAddresses = () => {
    // Loading
    if (addressIsLoading) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    // No addresses found
    if (addresses.length === 0) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <Text>No Addresses found...</Text>
        </View>
      );
    }

    // Addresses to render
    return (
      <ScrollView style={SharedStyles.flexContainer}>
        {addresses.map(({values: address, values: {id}}) => (
          <DetailsButton
            key={id}
            text={convertAddressForButton(address)}
            onPress={() => {
              navigate(Routes.EDIT_ADDRESS, {id});
            }}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={SharedStyles.container}>
      <Text style={SharedStyles.headerText}>Address Book</Text>

      {renderAddresses()}

      <BottomButton
        text="Add Shipping Address"
        grey
        onPress={() => {
          navigate(Routes.NEW_ADDRESS);
        }}
        style={SharedStyles.standardTopMargin}
      />
    </View>
  );
};

/**
 * Helper function to convert ShippingAddress object into array of strings to display
 */
function convertAddressForButton({
  label,
  houseNumber,
  lineOne,
  postCode,
  phoneNumber,
}: ShippingAddress) {
  return [label, `${houseNumber} ${lineOne}`, postCode, phoneNumber];
}

const mapStoreDataToProps = ({shippingAddresses}: ApplicationState) => ({
  userAddressList: getOrFetchAddresses(shippingAddresses),
});

export default connect(mapStoreDataToProps)(ShippingAddressesScreen);
