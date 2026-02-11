import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setAppStatus } from '../../store/action';
import { appStatusTypes } from '../../constant/type';
import { SplashSvg } from '../../asset/icons/appIcon';

const Splash = () => {

  useEffect(() => {
    const checkAppFlow = async () => {
      try {
        const hasSeenMarket = await AsyncStorage.getItem('hasSeenMarket');

        setTimeout(() => {
          if (hasSeenMarket === 'true') {
            setAppStatus(appStatusTypes.auth);
          } else {
            setAppStatus(appStatusTypes.market);
          }
        }, 2500);
      } catch (e) {
        setAppStatus(appStatusTypes.market);
      }
    };

    checkAppFlow();
  }, []);

  return (
    <View style={styles.container}>
      <SplashSvg />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
