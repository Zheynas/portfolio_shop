import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Entypo';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/BottomButton';
import TextField from '../shared/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';
import Images from '../../../assets/images/images';
import ImageRenderer from '../shared/ImageRenderer';

interface Props {
  /**
   * On press
   */
  onPress?: () => void;
  /**
   * Text
   */
  text: string;
  /**
   * Image
   */
  image: string;
}
const PaymentButton = ({onPress, text, image}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomWidth: 1,
        borderColor: Colours.grey,
        paddingVertical: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <ImageRenderer
        width={moderateScale(40)}
        height={moderateScale(30)}
        image={image}
      />
      <View style={{flex: 1, paddingLeft: moderateScale(10)}}>
        <Text>{text}</Text>
      </View>
      <Icon
        name="chevron-thin-right"
        size={moderateScale(16)}
        color={Colours.grey}
      />
    </TouchableOpacity>
  );
};

export default PaymentButton;