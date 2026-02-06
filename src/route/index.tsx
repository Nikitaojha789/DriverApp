import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {appStatusTypes} from '../constant/type';
import * as Screen from '../screen';
import {iStateInterface} from '../store/actionType.ts';
import {AuthNavigator, HomeNavigator, MarketingNavigator} from './app_navigator.tsx';
import {ThemeProvider} from '../theme/themeContext.tsx';
import {useNetInfo} from '@react-native-community/netinfo';
import Network from '../screen/network/Network.tsx';
import {Helper} from '../helper/Helper.ts';

// export const navigationRef = createNavigationContainerRef();
export type RootStackParamList = {
  login: undefined;
  Register: undefined;
  AccountVerification:undefined;
  OtpScreen: {phone: string};
  PersonalDetails: undefined;
  AddressDetails: {personalDetails: {fullName: string; email: string}};
  SolarSystemDetails: {onboardingData: {fullName: string; email: string; companyGstNumber: string; companyAddress: string; city: string; state: string; pincode: string}};
  Notificaion: undefined;
  BookingDetail: {item: any};
  Availability: undefined;
  ProfileRegistration:undefined;
  home:undefined;
  TrackOrder:undefined;
  // ... other routes
};

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const AppRoute = () => {
  const appStatus = useSelector<iStateInterface>(state => state?.appStatus);
  const {type, isConnected} = useNetInfo();
  const [isNetwork, setNetwork] = useState(true);

  useEffect(() => {
    if (isConnected !== null && isConnected !== isNetwork) {
      Helper.log('isConnected', isConnected);
      setNetwork(isConnected);
    }
  }, [isConnected]);

  const renderNavigator = React.useMemo(() => {
  if (!isNetwork) {
    return <Network />;
  }
  if (appStatusTypes.splash === appStatus) {
    return <HomeNavigator />;
  }
  if (appStatusTypes.auth === appStatus) {
    return <AuthNavigator />;
  }
  if (appStatusTypes.market === appStatus) {
    return <MarketingNavigator />;
  }
  return <HomeNavigator />;
}, [appStatus, isNetwork]);


  return (
    <NavigationContainer ref={navigationRef}>
        <ThemeProvider>{renderNavigator}</ThemeProvider>

        {/* <AnimatedPopup /> */}
        {/* <AnimatedBottomSheet /> */}
        {/* <AppUpdateModel /> */}
    </NavigationContainer>
  );
};
