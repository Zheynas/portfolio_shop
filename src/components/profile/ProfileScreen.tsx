import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem, ResourcesList} from 'redux-and-the-rest';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './ProfileStyle';
import {User} from '../../models/user';
import {ApplicationState} from '../../redux/types';
import {getUser, destroyUser} from '../../redux/resources/user';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import DetailsButton from '../payment/DetailsButton';
import BottomButton from '../shared/BottomButton';
import {Colours} from '../../styles/Themes';
import {getOrFetchAddresses} from '../../redux/resources/shippingAddresses';
import { ShippingAddress } from '../../models/shippingAddress';

interface Props {
  // Current user in state
  currentUserItem: ResourcesItem<User>;
  addresses: ResourcesList<ShippingAddress>;
}

const ProfileScreen = ({addresses,currentUserItem: {values: user}}: Props) => {
  const {navigate} = useNavigation();
  console.log('addresses', addresses);
  const loggedIn = Boolean(user && user.authenticationToken);
  const headerName = loggedIn
    ? `${user.firstName} ${user.lastName}`
    : 'Welcome!';

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <Text style={Styles.loginHeader}>Personal Information</Text>
        <Text>{headerName}</Text>
        <Text>Preferred shipping address</Text>
        <DetailsButton
          text={['Robert smith', '23 Nene close', 'LS83DS', '2348383472']}
          onPress={() => {
            navigate(Routes.SHIPPING_ADDRESSES);
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
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
            style={{marginTop: moderateScale(20)}}
            onPress={() => {
              navigate(Routes.CHANGE_PASSWORD);
            }}
          />
          <BottomButton
            text="Change Email"
            grey
            style={{marginTop: moderateScale(20)}}
            onPress={() => {
              navigate(Routes.CHANGE_EMAIL);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStoreDataToProps = ({users, shippingAddresses}: ApplicationState) => ({
  currentUserItem: getUser(users),
  addresses: getOrFetchAddresses(shippingAddresses),
});

export default connect(mapStoreDataToProps)(ProfileScreen);
