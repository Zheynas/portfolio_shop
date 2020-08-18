import React from 'react';
import {View} from 'react-native';

// Components
import TextField from '../inputs/TextField';
import ScreenWrapper from '../ScreenWrapper';
// Util
import FormItem from '../../../util/enums/FormItem';

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
}: Props) => (
  <ScreenWrapper
    header={header}
    scroll
    loading={loading}
    topButtonText={buttonText}
    topButtonOnPress={buttonOnPress}
    bottomButtonText={bottomButtonText}
    bottomButtonOnPress={bottomButtonOnPress}>
    <View>
      {fields.map(({label, value, setValue, password}: FormItem) => (
        <TextField
          label={label}
          value={value}
          setValue={setValue}
          key={label}
          secureTextEntry={password}
        />
      ))}
    </View>
  </ScreenWrapper>
);

export default FormScreen;
