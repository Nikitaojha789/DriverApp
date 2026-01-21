import React, {useCallback, useEffect, useState} from 'react';
import {Modal, StyleSheet, View, Linking} from 'react-native';
import {colors} from '../../constant/color';
import {spacer} from '../../constant/dimension';
import {Icons} from '../../asset';
import {Spacer} from '../Spacer';
import {AppHeading, AppText} from '../AppHeading';
import {TouchableButton} from '../button/TouchableButton';
// import { checkForNewVersion } from "../../helper/VersionCheck.ts";
import {Helper} from '../../helper/Helper.ts';
import {AppButton} from '../AppButton.tsx';

export const AppUpdateModel = () => {
  const [data, setData] = useState({
    show: false,
    appUrl: '',
  });

  // useEffect(() => {
  //   if (!__DEV__) {
  //     checkNewVersion();
  //   }
  // }, []);

  // const checkNewVersion = useCallback(() => {
  //   // checkForNewVersion((isNew: any, appUrl: string)=>{
  //   //   if(isNew){
  //   //     setData({...data, show: true, appUrl})
  //   //   }
  //   // });
  // }, [data]);

  const onCancel = useCallback(() => {
    setData({...data, show: false});
  }, [data]);

  const updateNow = useCallback(() => {
    try {
      Linking.openURL(data.appUrl);
    } catch (error) {
      Helper.log('unable to open url', error);
    }
  }, [data]);

  if (!data.show) {
    return null;
  }

  return (
    <Modal transparent>
      <View style={styles.container}>
        <View style={styles.viewContainer}>
          <Spacer />
          <Icons.SyncIcon size={120} color={colors.secondary} />
          <Spacer />
          <AppHeading
            title="Update Required"
            color={colors.black}
            fontWeight="bold"
            fontSize={22}
          />
          <Spacer />
          <AppText
            title="A newer version of the app is available. Please update to continue using all features."
            color={colors.black}
            style={{textAlign: 'center', width: '80%'}}
          />
          <Spacer size={80} />
          {/* <View style={{flex: 1}} /> */}
          <Spacer />
          <TouchableButton onPress={onCancel}>
            <AppHeading
              title={"I'll do this later"}
              color={colors.secondary}
              fontWeight="bold"
            />
          </TouchableButton>
          <Spacer />
          <View
            style={{
              width: '100%',
            }}>
            <AppButton
              title="Update now"
              onPress={updateNow}
              bgColor={colors.link}
              isBorder={false}
              borderColor={colors.buttonBg}
              primary
            />
          </View>
          <Spacer />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.modelColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainer: {
    width: '90%',
    backgroundColor: colors.white,
    borderRadius: spacer,
    alignItems: 'center',
    padding: spacer,
  },
});
