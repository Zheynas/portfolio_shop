import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
// Navigation
import {useNavigation} from '@react-navigation/native';
// Redux
import {
  ResourcesItem,
  ResourcesList,
  isSyncingWithRemote,
} from 'redux-and-the-rest';
import {connect} from 'react-redux';

// Navigation
import Routes from '../../routes/Routes';
// Redux
import {ApplicationState} from '../../redux/types';
import {getUser} from '../../redux/resources/user';
import {getOrFetchAddresses} from '../../redux/resources/shippingAddresses';
// Components
import BottomButton from '../shared/buttons/BottomButton';
import AddressButton from '../shared/buttons/AddressButton';
import DetailsButton from '../shared/buttons/DetailsButton';
// Util
import {User} from '../../models/user';
import {ShippingAddress} from '../../models/shippingAddress';
// Styles
import Styles from './ProfileStyle';
import SharedStyles from '../shared/styles/SharedStyles';
import {Colours} from '../../styles/Themes';

interface Props {
  /**
   * Current user
   */
  currentUserItem: ResourcesItem<User>;
  /**
   * User's shipping addresses
   */
  shippingAddresses: ResourcesList<ShippingAddress>;
}

/**
 * User profile screen
 */
const ProfileScreen = ({
  shippingAddresses,
  currentUserItem: {
    values: {lastName, firstName, email},
  },
}: Props) => {
  /**
   * Navigation
   */
  const {navigate} = useNavigation();

  /**
   * Shipping address values
   */
  const {items: addresses} = shippingAddresses;
  // TODO: Handle errors
  const addressIsLoading = isSyncingWithRemote(shippingAddresses);

  /**
   * Favourite address renderer
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
        <DetailsButton
          text={['No addresses found', 'Add Shipping Address']}
          onPress={() => {
            navigate(Routes.EDIT_ADDRESS);
          }}
        />
      );
    }

    // TODO: Implement favourite address to display instead of first
    return <AddressButton address={addresses[0]} />;
  };

  return (
    <View style={SharedStyles.container}>
      <Text style={SharedStyles.headerText}>Personal Information</Text>
      <Text
        style={[
          SharedStyles.mediumText,
          {color: Colours.coral},
        ]}>{`${firstName} ${lastName}`}</Text>
      <Text style={SharedStyles.bodyText}>{email}</Text>

      <View style={[SharedStyles.flexColumn, SharedStyles.topMargin]}>
        {renderAddresses()}
      </View>

      <View style={Styles.buttonContainer}>
        <BottomButton
          text="Shipping Addresses"
          grey
          onPress={() => {
            navigate(Routes.SHIPPING_ADDRESSES);
          }}
        />
        <BottomButton
          text="Change Password"
          grey
          style={SharedStyles.topMargin}
          onPress={() => {
            navigate(Routes.CHANGE_PASSWORD);
          }}
        />
        <BottomButton
          text="Change Email"
          grey
          style={SharedStyles.topMargin}
          onPress={() => {
            navigate(Routes.CHANGE_EMAIL);
          }}
        />
      </View>
    </View>
  );
};

const mapStoreDataToProps = ({users, shippingAddresses}: ApplicationState) => ({
  currentUserItem: getUser(users),
  shippingAddresses: getOrFetchAddresses(shippingAddresses),
});

export default connect(mapStoreDataToProps)(ProfileScreen);
