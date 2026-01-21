import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
// import {
//   MERCHANT_ID,
//   MERCHANT_KEY,
//   DEBUG_MERCHANT_ID,
//   DEBUG_MERCHANT_KEY,
// } from '@env';

export class AppConstant {
  static deviceId = `${Platform.OS}-${DeviceInfo.getDeviceId()}`;
  static userToken = '';
  static refreshToken = '';
  static fcmToken = '';
  static userId = '';
  static appName = 'Radx';
  static merchant_id = "MERCHANT_ID";
  static merchant_key = "MERCHANT_KEY";
  static debug_merchant_id = "DEBUG_MERCHANT_ID";
  static debug_merchant_key = "DEBUG_MERCHANT_KEY";

  static isLive = true;

  static setUserToken = (token: string) => {
    this.userToken = token;
    console.log('=========user token==========', this.userToken);
  };

  static setRefreshToken = (token: string) => {
    this.refreshToken = token;
    console.log('=========refreshToken==========', this.refreshToken);
  };

  static insets = {
    top: 0,
    bottom: 0,
  };

  static setUserId = (id: string) => {
    this.userId = id;
    console.log('=========user id==========', this.userId);
  };

  static setFcmToken = (token: string) => {
    this.fcmToken = token;
    console.log('=========fcm token==========', this.fcmToken);
  };
}
