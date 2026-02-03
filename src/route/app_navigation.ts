import {StackActions} from '@react-navigation/native';
import {navigationRef} from '.';
import {routeNames} from './route_name';

export class AppNavigation {
  static goBack = () => {
    if (navigationRef.isReady()) {
      navigationRef?.goBack();
    }
  };
  static popToTop = () => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.popToTop());
    }
  };
  static navigateToRegister = () => {
    if (navigationRef.isReady()) {
      navigationRef?.navigate('Register');
    }
  };
  static navigateToOtp = (params: {phone: string}) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(routeNames.OtpScreen, params);
    }
  };
  static navigateToAccountVerification = () => {
    if (navigationRef.isReady()) {
      navigationRef?.navigate('AccountVerification');
    }
  };
  static navigateToProfileRegistration = () => {
    if (navigationRef.isReady()) {
      navigationRef?.navigate('ProfileRegistration');
    }
  };
  static navigateToLoginRegistration = () => {
    if (navigationRef.isReady()) {
      navigationRef?.navigate('ProfileRegistration');
    }
  };
   static navigateToHomeScreen = () => {
    if (navigationRef.isReady()) {
      navigationRef?.navigate('home');
    }
  };
}
