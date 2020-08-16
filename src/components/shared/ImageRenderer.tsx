import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

import Image from '../../../assets/images/Images';
import {ApplePay, GooglePay, Mastercard, Visa} from '../../../assets/images';

interface Props {
  // Image to render
  image: string;
  // Width of image
  width: string | number | undefined;
  // Height of image
  height: string | number | undefined;
  // styles to apply to image
  style?: StyleProp<ViewStyle>;
  // Colour of svg
  colour?: string;
}

/**
 * Renders an image
 */
const ImageRenderer = ({image, width, height, style, colour}: Props) => {
  switch (image) {
    /**
     * Icons
     */
    case Image.VISA:
      return (
        <Visa
          width={width}
          height={height}
          style={style}
          fill={colour}
          preserveAspectRatio="xMidYMid meet"
        />
      );
    case Image.MASTERCARD:
      return (
        <Mastercard
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="xMidYMid meet"
        />
      );
    case Image.APPLE_PAY:
      return (
        <ApplePay
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="xMidYMid meet"
        />
      );
    case Image.GOOGLE_PAY:
      return (
        <GooglePay
          width={width}
          height={height}
          style={style}
          preserveAspectRatio="xMidYMid meet"
        />
      );
    default:
      return null;
  }
};

export default ImageRenderer;
