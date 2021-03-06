import React, { ReactElement } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
// Navigation
import { useNavigation } from '@react-navigation/native';
// Redux
import { ResourcesList, isSyncingWithRemote } from 'redux-and-the-rest';
import { connect } from 'react-redux';

// Navigation
import Routes from '../../../routes/Routes';
// Redux
import { ApplicationState } from '../../../redux/types';
import { getOrFetchAddresses } from '../../../redux/resources/shippingAddresses';
// Util
import { ShippingAddress } from '../../../models/shippingAddress';
// Styling
import SharedStyles from '../styles/SharedStyles';
import AddressButton from '../buttons/AddressButton';
import ScreenWrapper from '../wrappers/ScreenWrapper';

interface Props {
  /**
   * Current user's shipping addresses
   */
  userAddressList: ResourcesList<ShippingAddress>;
  /**
   * Address button onPress
   */
  addressOnPress?: (id: string) => void;
  /**
   * Header title to display
   */
  headerText?: string;
  /**
   * Header component
   */
  header?: ReactElement;
}

/**
 * Screen with a list of shipping addresses
 */
const DisplayAddresses = ({
  userAddressList,
  addressOnPress,
  headerText,
  header,
}: Props) => {
  /**
   * Navigation
   */
  const { navigate } = useNavigation();

  /**
   * Shipping address values
   */
  const { items: addresses } = userAddressList;
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
          <Text style={SharedStyles.bodyText}>No Addresses found...</Text>
        </View>
      );
    }

    // Addresses to render
    return (
      <ScrollView style={SharedStyles.flexContainer}>
        {addresses.map((address) => (
          <AddressButton
            key={address.values.id}
            address={address}
            onPress={addressOnPress}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <ScreenWrapper
      headerText={headerText}
      header={header}
      topButtonOnPress={() => {
        navigate(Routes.NEW_ADDRESS);
      }}
      topButtonText="Add Shipping Address"
    >
      {renderAddresses()}
    </ScreenWrapper>
  );
};

const mapStoreDataToProps = ({ shippingAddresses }: ApplicationState) => ({
  userAddressList: getOrFetchAddresses(shippingAddresses),
});

export default connect(mapStoreDataToProps)(DisplayAddresses);
