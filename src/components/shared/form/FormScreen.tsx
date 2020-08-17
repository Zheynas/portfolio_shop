import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';

import TextField from '../TextField';
import BottomButton from '../BottomButton';

import Styles from './FormStyles';
import SharedStyles from '../SharedStyles';
import FormItem from 'src/util/enums/FormItem';

interface Props {
  /**
   * Header title to display
   */
  header: string;
  /**
   * Fields to render
   */
  fields: FormItem[];
  /**
   * Main button text
   */
  buttonText: string;
  /**
   * Main button onPress
   */
  buttonOnPress: () => void;
  /**
   * Optional second button text
   */
  bottomButtonText?: string;
  /**
   * Optional second button onPress
   */
  bottomButtonOnPress?: () => void;
  /**
   * Loading state
   */
  loading?: boolean;
}

/**
 * Dymnaic data entry screen
 */
const FormScreen = ({
  fields,
  header,
  buttonOnPress,
  buttonText,
  bottomButtonText,
  bottomButtonOnPress,
  loading,
}: Props) => {
  /**
   * Optional bottom button renderer
   */
  const renderBottomButton = () => {
    if (!bottomButtonText || loading) {
      return null;
    }

    return (
      <BottomButton
        text={bottomButtonText}
        onPress={bottomButtonOnPress}
        style={Styles.bottomButton}
        positionIsNotAbsolute
        grey
      />
    );
  };

  return (
    <SafeAreaView style={SharedStyles.flexContainer}>
      <View style={SharedStyles.container}>
        <ScrollView style={SharedStyles.flexContainer}>
          <Text style={SharedStyles.headerText}>{header}</Text>
          <View>
            {fields.map(({label, value, setValue}: FormItem) => (
              <TextField
                label={label}
                value={value}
                setValue={setValue}
                key={label}
              />
            ))}
          </View>
        </ScrollView>
        <BottomButton
          text={buttonText}
          onPress={buttonOnPress}
          positionIsNotAbsolute
          loading={loading}
        />
        {renderBottomButton()}
      </View>
    </SafeAreaView>
  );
};

export default FormScreen;
