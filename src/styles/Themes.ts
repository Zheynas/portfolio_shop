import {moderateScale, scale, verticalScale} from 'react-native-size-matters';

/**
 * Common colours for project
 */
const Colours = {
  blue: '#64A6BD',
  bluePurple: '#90A8C3',
  purple: '#ADA7C9',
  purplePink: '#D7B9D5',
  pink: '#F4CAE0',
  grey: '#a9a9a9',
  white: '#fff',
  black: '#000',
  coral: '#ff8181',
  backgroundLight: '#f2f2f2',
};

/**
 * Common font size for project
 */
const FontSize = {
  huge: moderateScale(100),
  header: moderateScale(25),
  question: moderateScale(22),
  subheader: moderateScale(20),
  biggerLabel: moderateScale(18),
  label: moderateScale(17),
  footer: moderateScale(15),
  nav: moderateScale(13),
  small: moderateScale(12),
};

/**
 * Common fonts for project
 */
const Fonts = {
  bold: 'Montserrat-Bold',
  semiBold: 'Montserrat-SemiBold',
  medium: 'Montserrat-Medium',
  regular: 'Montserrat-Regular',
};

/**
 * Common zIndexes for project
 */
const Zindex = {
  wrapper: 0,
  background: 1,
  footer: 3,
  bear: 4,
  foreground: 5,
  popup: 10,
};

const Gradients = {
  yellowPurple: {
    colours: {
      top: '#fff5e0',
      middle: '#e7a4aa',
      bottom: '#8e65b7',
    },
    offset: {
      topOffset: '0',
      middleOffset: '0.495',
      bottomOffset: '1',
    },
  },
  darkLightBlue: {
    colours: {
      top: '#e3fff2',
      bottom: '#6ecde3',
    },
    offset: {
      topOffset: '0',
      bottomOffset: '1',
    },
  },
  purple: {
    colours: {
      top: '#6258aa',
      bottom: '#363159',
    },
    offset: {
      topOffset: '0',
      bottomOffset: '0.828',
    },
  },
  yellowRed: {
    colours: {
      top: '#C6475B',
      bottom: '#e0b52b',
    },
    offset: {
      topOffset: '0',
      bottomOffset: '1',
    },
  },
};

/**
 * Common measurements for project
 */
const Measurements = {
  shopHeaderHeight: moderateScale(60),
  headerHeight: moderateScale(40),
  padding: moderateScale(20),
  /**
   * Icons
   */
  largeIcon: moderateScale(50),
  navChevrons: moderateScale(40),
  mediumIcon: moderateScale(35),
  smallIcon: moderateScale(30),
};

export {Colours, Fonts, Zindex, Measurements, FontSize, Gradients};
