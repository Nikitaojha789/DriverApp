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
}
