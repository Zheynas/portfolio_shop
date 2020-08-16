import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ResourcesItem} from 'redux-and-the-rest';
import {connect} from 'react-redux';

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
import {moderateScale} from 'react-native-size-matters';

interface Props {
  // Current user in state
  currentUserItem: ResourcesItem<User>;
}

const ProfileScreen = ({currentUserItem: {values: user}}: Props) => {
  const {navigate} = useNavigation();

  const loggedIn = Boolean(user && user.authenticationToken);
  const headerName = loggedIn
    ? `${user.firstName} ${user.lastName}`
    : 'Welcome!';

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <Text style={Styles.loginHeader}>Personal Information</Text>
        <DetailsButton
          text={['Robert smith', '23 Nene close', 'LS83DS', '2348383472']}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
          <BottomButton
            text="Change Password"
            positionIsNotAbsolute
            grey
            onPress={() => {
              navigate(Routes.CHANGE_PASSWORD);
            }}
          />
          <BottomButton
            text="Change Email"
            positionIsNotAbsolute
            grey
            style={{marginTop: moderateScale(20)}}
            onPress={() => {
              navigate(Routes.CHANGE_EMAIL);
            }}
          />
          <BottomButton
            text="Add Shipping Address"
            positionIsNotAbsolute
            grey
            style={{marginTop: moderateScale(20)}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const mapStoreDataToProps = ({users}: ApplicationState) => ({
  currentUserItem: getUser(users),
});

export default connect(mapStoreDataToProps)(ProfileScreen);
