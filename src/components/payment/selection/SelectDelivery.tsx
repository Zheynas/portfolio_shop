import React from 'react';
import {View, ActivityIndicator, Text, ScrollView} from 'react-native';
// Redux
import {connect} from 'react-redux';
import {ResourcesList, isSyncingWithRemote} from 'redux-and-the-rest';
// Navigation
import {useNavigation} from '@react-navigation/native';

// Redux
import {ApplicationState} from '../../../redux/types';
import {getOrFetchShippingMethods} from '../../../redux/resources/shippingMethods';
// Components
import ScreenWrapper from '../../shared/wrappers/ScreenWrapper';
import DeliveryButton from '../../shared/buttons/DeliveryButton';
// Util
import {ShippingMethod} from '../../../models/shippingMethod';
// Stylings
import SharedStyles from '../../shared/styles/SharedStyles';

interface Props {
  /**
   * Collection of sections
   */
  shippingCollection: ResourcesList<ShippingMethod>;
}

/**
 * Select shipping method screen
 */
const SelectDelivery = ({shippingCollection}: Props) => {
  /**
   * Navigation
   */
  const {goBack} = useNavigation();

  /**
   * Shipping method values
   */
  const {items: methods} = shippingCollection;
  const isLoading = isSyncingWithRemote(shippingCollection);

  /**
   * Delivery option onPress
   */
  const onPress = () => {
    // TODO: Add payment option to order resource
    goBack();
  };

  /**
   * Delivery methods list renderer
   */
  const renderMethods = () => {
    // Loading
    if (isLoading) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <ActivityIndicator size="large" />
        </View>
      );
    }

    // No methods found
    if (methods.length === 0) {
      return (
        <View style={SharedStyles.centeredContainer}>
          <Text style={SharedStyles.bodyText}>
            No delivery options found...
          </Text>
        </View>
      );
    }

    // Addresses to render
    return (
      <ScrollView style={SharedStyles.flexContainer}>
        {methods.map((method) => (
          <DeliveryButton
            key={method.values.id}
            shippingMethod={method}
            onPress={onPress}
          />
        ))}
      </ScrollView>
    );
  };

  return (
    <ScreenWrapper headerText="Select Delivery Method" scroll>
      {renderMethods()}
    </ScreenWrapper>
  );
};

const mapStateToProps = ({shippingMethods}: ApplicationState) => ({
  shippingCollection: getOrFetchShippingMethods(shippingMethods, {}),
});

export default connect(mapStateToProps)(SelectDelivery);
