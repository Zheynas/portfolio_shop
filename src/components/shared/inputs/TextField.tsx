import React from 'react';
import { View, Text, TextInput } from 'react-native';

import { moderateScale } from 'react-native-size-matters';
import { Colours, Fonts, FontSize } from '../../../styles/Themes';

interface Props {
  label: string;
  value: string;
  setValue?: (value: string) => void;
  secureTextEntry?: boolean;
}

const TextField = ({ label, value, setValue, secureTextEntry }: Props) => {
  const displayLabel = value ? label : '';

  return (
    <View style={{ marginBottom: moderateScale(20) }}>
      <Text
        style={{
          color: Colours.black,
          fontFamily: Fonts.regular,
          fontSize: FontSize.small,
          marginBottom: moderateScale(5),
        }}
      >
        {displayLabel}
      </Text>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={{
          borderBottomWidth: 1,
          borderColor: Colours.grey,
          fontFamily: Fonts.regular,
          color: Colours.black,
          padding: 0,
        }}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default TextField;
