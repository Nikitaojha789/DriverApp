import {AppConstant} from '../constant/app_constant';
import {appStatusTypes, userStatusType} from '../constant/type';
import {Helper} from '../helper/Helper';
import {AppNavigation} from '../route/app_navigation';
import {actionTypes, actionInterface} from './actionType';
import {
  getStorage,
  removeStorage,
  setRegisterStorage,
  setUserStorage,
} from './Asyncstorage';
import {Store} from './store';
// import SpInAppUpdates, {
//   IAUUpdateKind,
//   StartUpdateOptions,
//   IAUInstallStatus,
// } from 'sp-react-native-in-app-updates';
import {Alert, Linking, Platform} from 'react-native';
// import DeviceInfo from 'react-native-device-info';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
let isAlertVisible = false;

/**
 *
 * Basic action dispatcher
 */
const actionDispatcher = ({type, payload}: actionInterface) => {
  Store.dispatch({type, payload});
};

// export const checkForUpdate = async () => {
//   const inAppUpdates = new SpInAppUpdates(
//     false, // isDebug
//   );
//   // curVersion is optional if you don't provide it will automatically take from the app using react-native-device-info
//   try {
//     await inAppUpdates.checkNeedsUpdate().then(result => {
//       try {
//         if (result.shouldUpdate) {
//           let updateOptions: StartUpdateOptions = {};
//           if (Platform.OS === 'android') {
//             updateOptions = {
//               updateType: IAUUpdateKind.IMMEDIATE,
//             };
//           }
//           // if (Platform.OS === 'ios') {
//           //   updateOptions = {
//           //     title: 'Update available',
//           //     message:
//           //       'There is a new version of the app available on the App Store, do you want to update it?',
//           //     buttonUpgradeText: 'Update',
//           //     buttonCancelText: 'Cancel',
//           //   };
//           // }
//           inAppUpdates.addStatusUpdateListener(downloadStatus => {
//             //Console.log('download status', downloadStatus);
//             if (downloadStatus.status === IAUInstallStatus.DOWNLOADED) {
//               //Console.log('downloaded');
//               inAppUpdates.installUpdate();
//               inAppUpdates.removeStatusUpdateListener(finalStatus => {
//                 //Console.log('final status', finalStatus);
//               });
//             }
//           });
//           inAppUpdates.startUpdate(updateOptions);
//         }
//       } catch (error) {
//         //Console.log(error);
//       }
//     });
//   } catch (error) {
//     //Console.log(error);
//   }
// };
/**
 *
 * This function use for navigation
 */
export const setAppStatus = (status: string) => {
  actionDispatcher({
    type: actionTypes.SET_APP_STATUS,
    payload: status,
  });
};
export const setLoading = (status: string) => {
  actionDispatcher({
    type: actionTypes.SET_LOADING,
    payload: status,
  });
};

/**
 *
 * This function save user details and tokens
 */
export const setUserDetail = (user: any) => {
  if (user?.token) {
    AppConstant.setUserToken(user?.token);
  }
  if (user?.id) {
    AppConstant.setUserId(user?.id);
  }
  actionDispatcher({
    type: actionTypes.SET_USER,
    payload: user,
  });
};

export const setRegisterInfo = (user: any) => {
  if (user?.token) {
    AppConstant.setUserToken(user?.token);
  }
  if (user?.id) {
    AppConstant.setUserId(user?.id);
  }
  actionDispatcher({
    type: actionTypes.SET_USER,
    payload: user,
  });
};

/**
 *
 * This function set the login user details for app flow
 */
export const setLoginDetail = (user: any) => {
  setUserDetail(user);
  setUserStorage({user});
  setAppStatus(appStatusTypes.home);
};

export const saveUserInfo = (user: any) => {
  setUserDetail(user);
  setUserStorage({user});
};

export const setRegisterDetail = (user: any) => {
  setRegisterInfo(user);
  setRegisterStorage({user});
  // setAppStatus(appStatusTypes.home);
};

/**
 *
 * This function set the guest login
 */
export const setGuestLogin = () => {
  setUserDetail('');
  setUserStorage({user: ''});
  setAppStatus(appStatusTypes.home);
};

// export const logoutFromApp = async () => {
//   removeStorage();
//   actionDispatcher({
//     type: actionTypes.SET_LOGOUT,
//     payload: '',
//   });
//   actionDispatcher({
//     type: actionTypes.SET_USER,
//     payload: '',
//   });
//   GoogleSignin.configure({
//     webClientId:
//       '17211475639-1neuvqcu8opn1oha4hp6bjreg54afd1f.apps.googleusercontent.com',
//   });
//   await GoogleSignin.revokeAccess();
//   await GoogleSignin.signOut();
// };
export const cleanOldInfo = async () => {
  removeStorage();
  actionDispatcher({
    type: actionTypes.SET_USER,
    payload: '',
  });
};

/**
 *
 * This function check the whether the user login or not
 */
export const startApp = async () => {
  const res: any = await getStorage();
  console.log('🚀 ~ startApp ~ res:', res);
  if (res?.user?.token) {
    setUserDetail(res?.user);

    const user = res?.user;

    // First check: Is user verified?
    if (!user.isVerified) {
      // Show message: User is not verified
      Helper.showToast('You are not a verified user. Please contact admin.');
      return;
    }

    // Second check: Does user have a plan?
    if (user.Plan && Object.keys(user.Plan).length > 0) {
      // User is verified and has a plan - proceed with login
      // console.log('Login Successful', user);
      setAppStatus(appStatusTypes.home);
    } else {
      setAppStatus(appStatusTypes.plan);
    }
    return;
  }

  setAppStatus(appStatusTypes.auth);
};
