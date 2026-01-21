import React from 'react';
import {Alert, Linking, Platform} from 'react-native';

export async function SendToPhoneActivity({mobile = ''}) {
  const URL = `tel: ${mobile}`;

  try {
    if (Platform.OS === 'android') {
      Linking.openURL(URL);
      return;
    }
    const res = await Linking.canOpenURL(URL);
    if (res) {
      Linking.openURL(URL);
      return;
    }
    Alert.alert('', 'Can not open call dialer');
  } catch (error) {
    //Console.log(error);
  }
  return;
}

export async function SendToEmailActivity({email = ''}) {
  const URL = `mailto:${email}`;
  try {
    if (Platform.OS === 'android') {
      Linking.openURL(URL);
      return;
    }
    const res = await Linking.canOpenURL(URL);
    if (res) {
      Linking.openURL(URL);
      return;
    }
    Alert.alert('', 'Can not open email app');
  } catch (error) {
    //Console.log(error);
  }
}

export const SendToWhatsAppActivity = async (mobile: string) => {
  const URL = `whatsapp://send?phone=${mobile}`;

  try {
    if (Platform.OS === 'android') {
      Linking.openURL(URL);
      return;
    }
    const res = await Linking.canOpenURL(URL);
    if (res) {
      Linking.openURL(URL);
      return;
    }
    Alert.alert('', 'Can not open whatsapp');
  } catch (error) {
    //Console.log(error);
  }
  return;
};

export const openWebUrl = async (url: string) => {
  const URL = url;
  //Console.log('url', url);
  try {
    if (Platform.OS === 'android') {
      Linking.openURL(URL);
      return;
    }
    Linking.openURL(URL)
      .then(() => {})
      .catch(() => {});
    return;
  } catch (error) {
    //Console.log(error);
  }
  return;
};
