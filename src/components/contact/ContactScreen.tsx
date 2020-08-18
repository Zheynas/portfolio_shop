import React from 'react';
import {Text} from 'react-native';

import ScreenWrapper from '../shared/wrappers/ScreenWrapper';

/**
 * Contact us screen
 */
const ContactScreen = () => (
  <ScreenWrapper headerText="Contact Us" scroll>
    <>
      <Text>Email:</Text>
      <Text>Phone:</Text>
      <Text>Mail:</Text>
    </>
  </ScreenWrapper>
);

export default ContactScreen;
