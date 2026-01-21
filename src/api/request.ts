import {AppConstant} from '../constant/app_constant';
import {Alert} from 'react-native';
import {setLoading} from '../store/action';
import {Helper} from '../helper/Helper';

const success_status = [200, 201, 500];

// Type definition for service properties
type serviceProps = {
  url: string;
  data?: string;
  spinner?: boolean;
  isLog?: boolean;
  isForm?: boolean;
  method?: string;
  header?: any;
};

// Function to get request headers
export const getHeader = (isForm = false, token = AppConstant.userToken) => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': isForm ? 'multipart/form-data' : 'application/json',
    Authorization: `Bearer ${token.trim()}`,
  };
  //Console.log(headers);
  return headers;
};

// Function to check response status and show message if needed
export const checkResponse = (res: any, showMessage = true, url = '') => {
  if (res && res?.status) {
    return true;
  }
  if (showMessage && res?.message) {
    Helper.log('checkResponse, alert msg', {
      res,
      url,
    });
    if (res?.message) {
      Helper.showToast(res?.message);
    }
  }
  return false;
};

export const checkRegisterRes = (res: any, showMessage = true, url = '') => {
  if (res && res?.success) {
    return true;
  }
  if (showMessage) {
    if (Array.isArray(res?.errors) && res.errors.length > 0) {
      Helper.showToast(res.errors[0]?.message || 'An error occurred');
      Helper.log('checkResponse, alert msg', {
        res,
        url,
      });
    } else {
      Helper.showToast(res?.message || 'An error occurred');
    }
  }
  return false;
};

// Function to perform GET request
export const GetRequest = async ({url = '', spinner, header}: serviceProps) => {
  console.log('---->', header ? header : getHeader());
  console.log('---->url->', url);

  try {
    spinner && setLoading(true);
    const res = await fetch(url, {
      headers: header ? header : getHeader(),
      method: 'GET',
    });
    let result = await res.json();
    if (success_status.includes(res.status)) {
      spinner && setLoading(false);
      return result;
    }
    spinner && setLoading(false);
    return result;
  } catch (error) {
    spinner && setLoading(false);
    //Console.log('------request error========', error);
  }
};

export const DeleteRequest = async ({
  url = '',
  spinner,
  header,
}: serviceProps) => {
  try {
    spinner && setLoading(true);
    const res = await fetch(url, {
      method: 'DELETE',
      headers: header ? header : getHeader(),
    });
    const result = await res.json();
    spinner && setLoading(false);

    if (success_status.includes(res.status)) {
      return result;
    }

    return result;
  } catch (error) {
    spinner && setLoading(false);
    //Console.log('------request error========', error);
    return {error: true, message: error?.message};
  }
};

// Function to perform POST request
export const PostRequest = async ({
  url = '',
  data,
  spinner,
  header,
  isLog = false,
  isForm = false,
  method = 'POST',
}: serviceProps) => {
  try {
    spinner && setLoading(true);
    console.log('--- API Request ---', {
      url,
      headers: header ? header : getHeader(isForm),
      method,
      body: data ? (isForm ? data : JSON.stringify(data)) : {},
    });

    const res = await fetch(url, {
      headers: header ? header : getHeader(isForm),
      method: method,
      body: isForm ? data : JSON.stringify(data),
    });
    let result = await res.json();
    if (isLog) {
      Helper.log('result', {
        body: data,
        result,
      });
    }
    if (success_status.includes(res.status)) {
      spinner && setLoading(false);
      return result;
    }
    spinner && setLoading(false);
    return result;
  } catch (error) {
    spinner && setLoading(false);
    //Console.log('------request error========', error);
  }
};
