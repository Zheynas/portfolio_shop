import React from 'react';
import {Text} from 'react-native';

import ScreenWrapper from '../shared/ScreenWrapper';

/**
 * Contact us screen
 */
const ContactScreen = () => (
  <ScreenWrapper header="Contact Us" scroll>
    <>
      <Text>Email:</Text>
      <Text>Phone:</Text>
      <Text>Mail:</Text>
    </>
  </ScreenWrapper>
);

export default ContactScreen;
