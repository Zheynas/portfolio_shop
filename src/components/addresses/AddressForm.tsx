import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

import Styles from './CredentialsStyle';
import TextField from '../shared/TextField';
import BottomButton from '../shared/BottomButton';

interface Props {
  header: string;
  fields: any;
  buttonText: string;
  buttonOnPress: () => void;
  bottomButtonText?: string;
  bottomButtonOnPress?: () => void;
}

const AddressForm = ({
  fields,
  header,
  buttonOnPress,
  buttonText,
  bottomButtonText,
  bottomButtonOnPress,
}: Props) => {
  const renderBottomButton = () => {
    if (!bottomButtonText) {
      return null;
    }

    return (
      <BottomButton
        text={bottomButtonText}
        onPress={bottomButtonOnPress}
        grey
        positionIsNotAbsolute
        style={{marginTop: moderateScale(20)}}
      />
    );
  };

  return (
    <SafeAreaView style={Styles.flexContainer}>
      <View style={Styles.container}>
        <ScrollView style={Styles.flexContainer}>
          <Text style={Styles.loginHeader}>{header}</Text>
          <View>
            {fields.map(({label, value, setValue}: any, index: number) => (
              <TextField
                label={label}
                value={value}
                setValue={setValue}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
        <BottomButton
          text={buttonText}
          onPress={buttonOnPress}
          positionIsNotAbsolute
        />
        {renderBottomButton()}
      </View>
    </SafeAreaView>
  );
};

export default AddressForm;
