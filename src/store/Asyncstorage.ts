import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'Key_12121212';

type iStateProps = {
  user: any;
};

const iState: iStateProps = {
  user: '',
};

export const getStorage = async () => {
  const res = await AsyncStorage.getItem(KEY);
  if (res) {
    return JSON.parse(res);
  }
  return {...iState};
};

export const setUserStorage = async ({user}: {user: any}) => {
  try {
    let obj = await getStorage();
    // let userDetail = {
    //   token: user?.token,
    //   ...(user?.user || {}),
    // };
    obj.user = user;
    AsyncStorage.setItem(KEY, JSON.stringify(obj));
  } catch (error) {
    //Console.log('error', error);
  }
};

export const setRegisterStorage = async ({user}: {user: any}) => {
  try {
    let obj = await getStorage();
    let userDetail = {
      token: user?.token,
      ...(user || {}),
    };
    obj.register = userDetail;
    AsyncStorage.setItem(KEY, JSON.stringify(obj));
  } catch (error) {
    //Console.log('error', error);
  }
};

export const removeStorage = () => {
  try {
    AsyncStorage.removeItem(KEY);
  } catch (error) {
    //Console.log('error', error);
  }
};
