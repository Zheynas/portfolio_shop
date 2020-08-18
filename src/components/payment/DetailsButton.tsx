import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {moderateScale} from 'react-native-size-matters';

import Routes from '../../routes/Routes';
import Styles from './PaymentStyles';
import BottomButton from '../shared/buttons/BottomButton';
import TextField from '../shared/TextField';
import {Colours, Fonts, FontSize} from '../../styles/Themes';
import CheckoutNavBar from '../checkout/CheckoutNavBar';

interface Props {
  /**
   * On press
   */
  onPress?: () => void;
  /**
   * Text
   */
  text: string[];
}
const DetailsButton = ({onPress, text}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderBottomWidth: 1,
        borderColor: Colours.grey,
        paddingVertical: moderateScale(20),
        flexDirection: 'row',
      }}>
      <View style={{flex: 1, flexDirection: 'column'}}>{renderText(text)}</View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name="chevron-right"
          size={moderateScale(40)}
          color={Colours.grey}
        />
      </View>
    </TouchableOpacity>
  );
};

function renderText(textToDisplay: string[]) {
  const extraText = textToDisplay.slice(1);

  if (textToDisplay.length === 1) {
    return (
      <Text
        style={{
          color: Colours.black,
          fontFamily: Fonts.regular,
          fontSize: FontSize.small,
          lineHeight: FontSize.question,
        }}>
        {textToDisplay[0]}
      </Text>
    );
  }
  return (
    <>
      <Text
        style={{
          color: Colours.black,
          fontFamily: Fonts.bold,
          fontSize: FontSize.footer,
        }}>
        {textToDisplay[0]}
      </Text>
      {extraText.map((text, index) => (
        <Text
          key={index}
          style={{
            color: Colours.black,
            fontFamily: Fonts.regular,
            fontSize: FontSize.small,
            lineHeight: FontSize.question,
          }}>
          {text}
        </Text>
      ))}
    </>
  );
}

export default DetailsButton;
