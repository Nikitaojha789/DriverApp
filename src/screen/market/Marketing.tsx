import { StyleSheet,View,Dimensions } from 'react-native';
import React, { useRef, useState } from 'react';
import { appStatusTypes } from '../../constant/type';
import { setAppStatus } from '../../store/action';
import { onboardingData } from './data';
import PagerView from 'react-native-pager-view';
import { AppText } from '../../components/AppHeading';
import { colors } from '../../constant/color';
import { AppBtn } from '../../components/button/AppBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppImage } from '../../components/AppImage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { fontSize } from '../../asset/style/commonStyle';
import { fonts } from '../../asset';

const { width, height } = Dimensions.get('window');


const Marketing = () => {
  const pagerRef = useRef<PagerView>(null);
  const [index, setIndex] = useState(0);

  const onFinishMarketing = async () => {    
    await AsyncStorage.setItem('hasSeenMarket', 'true');
    setAppStatus(appStatusTypes.auth);
  };


  const goNext = async () => {
    const lastIndex = onboardingData.length - 1;

    if (index < lastIndex) {
      pagerRef.current?.setPage(index + 1);
    } else {
      await onFinishMarketing();
    }
  };


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.dashContainer}>
          {onboardingData.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dash,
                index === i ? styles.dashActive : styles.dashInactive,
              ]}
            />
          ))}
        </View>
        <PagerView
          style={{ flex: 1 }}
          initialPage={0}
          ref={pagerRef}
          onPageSelected={(e) => {
            const pageIndex = e.nativeEvent.position;
            setIndex(pageIndex);
          }}
        >
          {onboardingData.map(item => (
            <View key={item.id} style={{ flex: 1 }}>
              <AppImage
                url={item.image}
                containerStyle={StyleSheet.absoluteFill} 
                resizeMode='cover'
              />
            </View>
          ))}
        </PagerView>
        <View style={styles.buttonsWrap}>
          <AppBtn
            title={index === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            onPress={goNext}
            backgroundColor={colors.NextButtonColor}
            height={52}
            width={300}
          />

          <AppText title='Skip' style={styles.skipButton} onPress={onFinishMarketing} />
        </View>
      </View>
    </SafeAreaView>
  );

};

export default Marketing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  skip: {
    position: 'absolute',
    right: 20,
    zIndex: 10,
    justifyContent: 'flex-end',
    alignSelf: "flex-end",
  },

  pager: {
    flex: 1,
  },

  page: {
    flex: 1,
  },

  pageTxt: {
    color: colors.NextButtonColor,
    fontSize: fontSize.extraLarge,
    elevation: 10,
    shadowColor: colors.black,
    fontFamily: fonts.bold
  },

  image: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
    marginBottom: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },

  dashContainer: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,

    zIndex: 100,
    elevation: 10,
  },

  dash: {
    height: 3,
    borderRadius: 3,
    width: 120,
  },
  dashActive: {
    backgroundColor: colors.NextButtonColor,
    height: 5,
  },
  dashInactive: {
    backgroundColor: colors.InactiveButtonColor,

  },
  buttonsWrap: {
    position: 'absolute',
    bottom: 50,
    left: 30,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  skipButton: {
    // right:10,
    fontSize: fontSize.large,
    color: colors.white
  },
});
