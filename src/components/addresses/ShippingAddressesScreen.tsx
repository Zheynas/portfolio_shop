import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem, ResourcesList} from 'redux-and-the-rest';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './ShippingAddressStyle';
import {User} from '../../models/user';
import {ApplicationState} from '../../redux/types';
import {getUser, destroyUser} from '../../redux/resources/user';
import {ThunkDispatch} from 'redux-thunk';
import {AnyAction} from 'redux';
import DetailsButton from '../payment/DetailsButton';
import BottomButton from '../shared/BottomButton';
import {Colours} from '../../styles/Themes';
import {getOrFetchAddresses} from '../../redux/resources/shippingAddresses';
import {ShippingAddress} from '../../models/shippingAddress';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  // Current user in state
  currentUserItem: ResourcesItem<User>;
  userAddressList: ResourcesList<ShippingAddress>;
}

const ShippingAddressesScreen = ({
  userAddressList: {items: addresses},
  currentUserItem: {values: user},
}: Props) => {
  const {navigate} = useNavigation();
  console.log('addresses', addresses);

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <Text style={Styles.loginHeader}>Address Book</Text>
        <View style={{flex: 1}}>
          <ScrollView>
            {addresses.map(({values: address}) => (
              <DetailsButton
                text={convertAddressForButton(address)}
                onPress={() => {
                  navigate(Routes.EDIT_ADDRESS,{id: address.id});
                }}
                key={address.id}
              />
            ))}
          </ScrollView>
        </View>

        <BottomButton
          text="Add Shipping Address"
          grey
          style={{marginTop: moderateScale(20)}}
          onPress={() => {
            navigate(Routes.NEW_ADDRESS);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

function convertAddressForButton({
  label,
  houseNumber,
  lineOne,
  postCode,
  phoneNumber,
}: ShippingAddress) {
  return [label, `${houseNumber} ${lineOne}`, postCode, phoneNumber];
}

const mapStoreDataToProps = ({users, shippingAddresses}: ApplicationState) => ({
  currentUserItem: getUser(users),
  userAddressList: getOrFetchAddresses(shippingAddresses),
});

export default connect(mapStoreDataToProps)(ShippingAddressesScreen);
