import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Routes from '../../routes/Routes';
import ProfileButton from './MenuButton';
import Styles from './MenuStyle';

const avatar = require('../../../assets/images/circle-cropped.png');
const profileButtons = [
  {text: 'Order Histories', icon: 'credit-card', route: Routes.HOME},
  {text: 'Contact Us', icon: 'envelope', route: Routes.HOME},
  {text: 'Help', icon: 'question', route: Routes.HOME},
  {text: 'Settings', icon: 'gear', route: Routes.HOME},
  {text: 'Cart', icon: 'cart', route: Routes.CART},
  {text: 'Login', icon: 'gear', route: Routes.LOGIN},
  {text: 'Register', icon: 'gear', route: Routes.REGISTER},
];

const MenuScreen = () => {
  const {navigate} = useNavigation();

  return (
    <View style={Styles.flexColumn}>
      <View style={Styles.avatarContainer}>
        <Image source={avatar} style={Styles.avatar} />
        <Text style={Styles.nameText}>Samantha Shepherd</Text>
      </View>
      <View style={Styles.buttonContainer}>
        {renderProfileButton(true)}
        {profileButtons.map(({text, icon, route}) => (
          <ProfileButton text={text} key={text} icon={icon} route={route}/>
        ))}
      </View>
      <View style={Styles.logoutContainer}>
        <TouchableOpacity
          style={Styles.logoutButton}
          onPress={() => {
            navigate(Routes.HOME);
          }}>
          <Text style={Styles.logoutText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

function renderProfileButton(loggedIn: boolean) {
  let text = loggedIn ? 'My Profile' : 'Login / Register';
  return <ProfileButton text={text} icon="user" route={Routes.LOGIN}/>;
}

export default MenuScreen;
