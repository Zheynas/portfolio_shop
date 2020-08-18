import React, {ReactElement} from 'react';
import {View, Text, ScrollView} from 'react-native';

import BottomButton from './buttons/BottomButton';

import Styles from './styles/SharedStyles';

interface Props {
  /**
   * Header title to display
   */
  header: string;
  /**
   * Loading state
   */
  loading?: boolean;
  /**
   * Main button text
   */
  topButtonText?: string;
  /**
   * Main button onPress
   */
  topButtonOnPress?: () => void;
  /**
   * Optional second button text
   */
  bottomButtonText?: string;
  /**
   * Optional second button onPress
   */
  bottomButtonOnPress?: () => void;
  /**
   * Main content
   */
  children: ReactElement;
  /**
   * Optional scroll for content
   */
  scroll?: boolean;
  /**
   * Top button hide override
   */
  topButtonHide?: boolean;
  /**
   * Bottom button hide override
   */
  bottomButtonHide?: boolean;
}

/**
 * Standard screen wrapper
 */
const ScreenWrapper = ({
  header,
  loading,
  topButtonText,
  topButtonOnPress,
  bottomButtonText,
  bottomButtonOnPress,
  children,
  scroll,
  topButtonHide,
  bottomButtonHide,
}: Props) => {
  /**
   * Optional bottom button renderer
   */
  const renderBottomButton = () => {
    if (!bottomButtonText || loading || bottomButtonHide) {
      return null;
    }

    return (
      <BottomButton
        text={bottomButtonText}
        onPress={bottomButtonOnPress}
        style={Styles.bottomButton}
        grey
      />
    );
  };

  /**
   * Optional Top button renderer
   */
  const renderTopButton = () => {
    if (!topButtonText || topButtonHide) {
      return null;
    }

    return (
      <BottomButton
        text={topButtonText}
        onPress={topButtonOnPress}
        loading={loading}
      />
    );
  };

  const renderContent = () => {
    if (scroll) {
      return <ScrollView style={Styles.flexContainer}>{children}</ScrollView>;
    }

    return <>{children}</>;
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.headerText}>{header}</Text>
      {renderContent()}
      {renderTopButton()}
      {renderBottomButton()}
    </View>
  );
};

export default ScreenWrapper;
