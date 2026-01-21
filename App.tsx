import React, {useEffect, useState} from 'react';
import {View, StatusBar} from 'react-native';
import {colors} from './src/constant/color';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {iStateInterface} from './src/store/actionType';
import {appStatusTypes} from './src/constant/type';
import {AppConstant} from './src/constant/app_constant';
import {AppSpinner} from './src/components/AppSpinner';
import {RenderSnakeBar} from './src/components/Snakebar';
import { AppRoute } from './src/route';

const App = () => {
  const appStatus = useSelector<iStateInterface>(state => state?.appStatus);
  const [isShow, setIsShow] = useState(false);
  const insets = useSafeAreaInsets();
  const user = useSelector((state: any) => state?.user);


  return (
    <>
      <AppRoute />
      <AppSpinner />
      <RenderSnakeBar />
      <StatusBar
        backgroundColor="transparent"
        translucent={isShow ? false : true}
        barStyle={'dark-content'}
      />
    </>
  );
};

export default App;
