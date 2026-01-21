import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { setAppStatus } from '../../store/action';
import { appStatusTypes } from '../../constant/type';
import { SplashSvg } from '../../asset/icons/appIcon';

const Splash = () => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAppStatus(appStatusTypes.market);
    }, 4000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SplashSvg />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
