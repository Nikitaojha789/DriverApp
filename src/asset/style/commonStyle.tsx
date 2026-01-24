import {Dimensions, Platform} from 'react-native';
import {colors} from '../../constant/color';
import {w} from '../../constant/dimension';
import { fonts } from '..';

export const statusBar = {
  dark: 'dark-content',
  light: 'light-content',
  default: 'default',
};

export const flexCenter = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};
export const bottomMargin = {
  marginBottom: -10,
};

export const rowCenter = {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

export const Center = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const flexRow = {
  flexDirection: 'row',
  alignItems: 'center',
};

export const flexSpaceBetween = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const flexSpaceAround = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-around',
};

export const SpaceAround = {
  justifyContent: 'space-around',
  alignItems: 'center',
};

export const SpaceBetween = {
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const flexBackground = {
  flex: 1,
  backgroundColor: colors.white,
};

export const fontSize = {
  large: 22,
  normal: 14,
  half: 13,
  default: 16,
  small: 12,
  verySmall: 10,
  medium: 18,
  largeMedium: 20,
  veryLarge: 24,
  largeDefault:28,
  extraLarge: 30,
};

export const screenHeadingStyle = {
  fontSize: fontSize.medium,
  color: colors.white,
  fontFamily: fonts.semiBold,
};

export const MarketingTitleStyle = {
  fontSize: fontSize.extraLarge,
  color: colors.white,
  fontFamily: fonts.bold,
  textAlign: 'center' as const,
};

export const MarketingDesriptionStyle = {
  fontSize: 15,
  color: colors.white,
  fontFamily: fonts.regular,
  textAlign: 'center',
  lineHeight: 20,
};
export const h1Style = {
  fontSize: fontSize.veryLarge,
  color: colors.textColor,
  fontFamily: fonts.semiBold,
};
export const whiteButtonTextStyle = {
  fontSize: fontSize.default,
  color: colors.white,
  fontFamily: fonts.bold,
};
export const snakeBarText = {
  fontSize: fontSize.default,
  color: colors.white,
  fontFamily: fonts.medium,
  marginBottom: 1,
  flexWrap: 'wrap', // Ensures text can wrap
  flexShrink: 1, // Prevents overflow by shrinking if needed
  width: '100%',
};
export const blueButtonTextStyle = {
  fontSize: fontSize.normal,
  color: colors.black,
  fontFamily: fonts.semiBold,
};

export const normalTextStyle = {
  fontSize: fontSize.default,
  fontFamily: fonts.regular,
  color: colors.white,
  lineHeight: 18,
};

export const smallGreyText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: '#9A9FA5',
};
export const smallRegularGreyText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.regular,
  color: '#9A9FA5',
};
export const smallSubGreyText = {
  fontSize: fontSize.small,
  fontFamily: fonts.regular,
  color: '#9A9FA5',
};
export const travelMessage = {
  fontSize: fontSize.small,
  fontFamily: fonts.regular,
  color: '#9A9FA5',
};
export const smallRegularBlackText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.regular,
  color: '#1A1D1F',
};
export const smallRegularWhiteText = {
  fontSize: fontSize.small,
  fontFamily: fonts.regular,
  color: colors.white,
};
export const smallWhiteText = {
  fontSize: fontSize.small,
  fontFamily: fonts.semiBold,
  color: colors.white,
};
export const TimeGreyText = {
  fontSize: fontSize.verySmall,
  fontFamily: fonts.regular,
  color: '#9A9FA5',
  marginLeft: 5,
};
export const mediumGreyText = {
  fontSize: fontSize.default,
  fontFamily: fonts.medium,
  color: '#878787',
};
export const notifiyText = {
  fontSize: fontSize.default,
  fontFamily: fonts.medium,
  color: colors.darkGray,
};
export const serviceNameHeading = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: '#212121',
  flexShrink: 1,
};
export const bookingValueStyle = {
  fontSize: fontSize.half,
  fontFamily: fonts.medium,
  color: colors.LightText,
};
export const destinationValueStyle = {
  fontSize: fontSize.half,
  fontFamily: fonts.medium,
  color: colors.LightText,
};
export const bookingKeyStyle = {
  fontSize: fontSize.half,
  fontFamily: fonts.medium,
  color: '#4F4F4F',
};

export const smallBlueText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: colors.textColor,
};
export const primaryText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: colors.cancel,
};
export const earningBlackText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: colors.textColor,
};
export const referenceIdText = {
  fontSize: fontSize.small,
  fontFamily: fonts.regular,
  color: '#364B63',
  // width: '98%' as string,
};
export const smallGreenText = {
  fontSize: fontSize.normal,
  fontFamily: fonts.medium,
  color: 'green',
};
export const smallTextSize = {
  fontSize: fontSize.small,
  fontFamily: fonts.regular,
  color: colors.black,
};
export const formHeaderStyle = {
  fontSize: fontSize.medium,
  fontFamily: fonts.medium,
  color: '#18181B',
};

export const mediumTextStyle = {
  fontSize: fontSize.medium,
  color: colors.white,
  fontFamily: fonts.regular,
};

export const mediumBlackText = {
  fontSize: fontSize.medium,
  color: colors.black,
  fontFamily: fonts.regular,
};
export const regularBlackText = {
  fontSize: fontSize.default,
  color: colors.black,
  fontFamily: fonts.regular,
};
export const profileLabelText = {
  fontSize: fontSize.default,
  color: colors.textColor,
  fontFamily: fonts.regular,
  left: 10,
};
export const logoutText = {
  fontSize: fontSize.default,
  fontFamily: fonts.medium,
  marginLeft: 10,
  color: '#F14141',
};
export const referHeading = {
  fontSize: fontSize.extraLarge,
  fontFamily: fonts.medium,
  color: '#1A1D1F',
  textAlign: 'center',
  marginHorizontal: 50,
};
export const smallBlackText = {
  fontSize: fontSize.small,
  color: colors.textColor,
  fontFamily: fonts.medium,
  // marginBottom:-3
};
export const HelpCenterHeading = {
  fontSize: 15,
  color: colors.textColor,
  fontFamily: fonts.medium,
  // marginBottom:-3
};
export const AddressText = {
  fontSize: fontSize.small,
  color: '#364B63',
  fontFamily: fonts.regular,
  marginBottom: -3,
};
export const brandNameText = {
  fontSize: fontSize.default,
  color: '#0B0C15',
  fontFamily: fonts.semiBold,
  marginBottom: -5,
};
export const countryCodeStyle = {
  fontSize: fontSize.half,
  color: colors.placeholder,
  fontFamily: fonts.medium,
  // marginBottom:-4,
  marginLeft: 10,
};
export const inputLabelStyle = {
  fontSize: fontSize.normal,
  color: colors.textColor,
  fontFamily: fonts.medium,
};
export const ImageUploadLabel = {
  fontSize: fontSize.normal,
  color: '#007BFF',
  fontFamily: fonts.medium,
};
export const radioLabelStyle = {
  fontSize: fontSize.default,
  color: colors.textColor,
  fontFamily: fonts.regular,
  marginLeft: -w(2),
  textTransform: 'capitalize',
};

export const largeMediumStyle = {
  fontSize: fontSize.medium,
  fontFamily: fonts.semiBold,
  color: colors.black,
  textAlign: 'center',
};
export const NoBookingText = {
  fontSize: fontSize.largeMedium,
  fontFamily: fonts.semiBold,
  color: colors.darkGray,
  textAlign: 'center',
};
export const successText = {
  fontSize: fontSize.largeMedium,
  fontFamily: fonts.medium,
  color: colors.black,
  textAlign: 'center' as 'center',
};

export const serviceNameStyle = {
  fontSize: fontSize.normal,
  fontFamily: fonts.semiBold,
  color: '#1C1C28',
};

export const LargeTextStyle = {
  fontSize: fontSize.medium,
  fontFamily: fonts.medium,
  color: '#1C1C28',
};

export const HeavyTextStyle = {
  fontSize: fontSize.veryLarge,
  fontFamily: fonts.medium,
  color: colors.black,
  // fontWeight: "600"
};
export const SuccessHeavyTextStyle = {
  fontSize: fontSize.veryLarge,
  fontFamily: fonts.semiBold,
  color: colors.success,
  // fontWeight: "600"
};
export const errorMsg = {
  fontSize: fontSize.small,
  fontFamily: fonts.medium,
  color: colors.red,
  marginTop: 5,
  paddingHorizontal: 20,
  // fontWeight: "600"
};
export const amountText = {
  fontSize: 18,
  fontFamily: fonts.medium,
  marginTop: 8,
  textAlign: 'right' as 'right',
};
export const Border = {
  borderColor: colors.borderColor,
  borderWidth: 1,
};

export const BorderBottom = {
  borderBottomColor: colors.borderColor,
  borderBottomWidth: 1,
};

export const TextCenter = {
  alignSelf: 'center',
  textAlign: 'center',
};

export const {width, height} = Dimensions.get('screen');
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 20 : 0;