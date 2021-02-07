import React, { ReactElement } from 'react';
import { View, Text, ScrollView } from 'react-native';

import BottomButton from '../buttons/BottomButton';

import SharedStyles from '../styles/SharedStyles';

interface Props {
  /**
   * Header title to display
   */
  headerText?: string;
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
  /**
   * Header component
   */
  header?: ReactElement;
}

/**
 * Standard screen wrapper
 */
const ScreenWrapper = ({
  headerText,
  loading,
  topButtonText,
  topButtonOnPress,
  bottomButtonText,
  bottomButtonOnPress,
  children,
  scroll,
  topButtonHide,
  bottomButtonHide,
  header,
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
        style={Styles.bottomMargin}
      />
    );
  };

  const renderContent = () => {
    if (scroll) {
      return (
        <ScrollView style={SharedStyles.flexContainer}>{children}</ScrollView>
      );
    }

    return <>{children}</>;
  };

  const renderHeader = () => {
    if (!header) {
      return null;
    }
    return header;
  };

  const renderHeaderText = () => {
    if (!headerText) {
      return null;
    }

    const extraStyles = header ? { marginTop: 20, marginBottom: 10 } : {};
    return <Text style={[SharedStyles.header, extraStyles]}>{headerText}</Text>;
  };

  return (
    <View style={SharedStyles.container}>
      {renderHeader()}
      {renderHeaderText()}
      {renderContent()}
      {renderTopButton()}
      {renderBottomButton()}
    </View>
  );
};

export default ScreenWrapper;
