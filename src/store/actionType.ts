import {appStatusTypes} from '../constant/type';
import {WalletType} from './../interface/propTypes';

export const actionTypes = {
  SET_APP_STATUS: 'SET_APP_STATUS',
  SET_USER: 'SET_USER',
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  SET_LOGOUT: 'SET_LOGOUT',
  SET_LOADING: 'SET_LOADING',
};
export interface actionInterface {
  type: string;
  payload: any;
}

export interface iStateInterface {
  appStatus: string;
  user: any;
  notification: number;
  loading: boolean;
}
