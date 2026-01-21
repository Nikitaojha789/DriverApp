import {appStatusTypes} from '../constant/type';
import {actionTypes, actionInterface, iStateInterface} from './actionType';
const iState: iStateInterface = {
  appStatus: appStatusTypes.splash,
  user: '',
  notification: 0,
  loading: false,
};

export const appReducer = (
  state = iState,
  action: actionInterface,
): iStateInterface => {
  switch (action.type) {
    case actionTypes.SET_APP_STATUS:
      return {...state, appStatus: action.payload};
    case actionTypes.SET_USER:
      return {...state, user: action.payload};
    case actionTypes.SET_NOTIFICATION:
      return {...state, notification: action.payload};
    case actionTypes.SET_LOADING:
      return {...state, loading: action.payload};
    case actionTypes.SET_LOGOUT:
      return {
        ...state,
        notification: 0,
        user: '',
        appStatus: appStatusTypes.auth,
      };
    default:
      return {...state};
  }
};
