import { Text, View} from 'react-native';
import React, { useRef, useState } from 'react';
import {appStatusTypes} from '../../constant/type';
import {setAppStatus} from '../../store/action';
import {onboardingData} from './data';
import PagerView from 'react-native-pager-view';
import { AppText } from '../../components/AppHeading';
import { styles } from './style';
import { colors } from '../../constant/color';
import { AppButton } from '../../components/button/AppBtn';
import LinearGradient from 'react-native-linear-gradient';
import { MarketingTitleStyle } from'../../asset/style/commonStyle';


const Marketing = () => {
  const pagerRef = useRef<PagerView>(null);
  const [index, setIndex] = useState(0);

  const goNext = () => {
    if (index < onboardingData.length - 1) {
      pagerRef.current?.setPage(index + 1);
    } else {
      setAppStatus(appStatusTypes.auth);
    }
  };

  return (
   <View style={styles.container}>
  <LinearGradient
    colors={[ '#6825B7', '#a575dd','#4A138A']}
    start={{ x: 0.6, y: 0 }}
    end={{ x: 0.8, y: 1 }}
    style={styles.gradient}
  >

           {/* Active Dashes */}
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

      {/* Pager */}
      <PagerView
        style={styles.pager}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={e => setIndex(e.nativeEvent.position)}>
        {onboardingData.map(item => (
          <View key={item.id} style={styles.page}>
            <AppText style={styles.pageTxt} title={item.title}/>
          </View>
        ))}
      </PagerView>

      {/* Buttons */}
      <View style={styles.buttonsWrap}>
        <AppButton 
          title="Next" 
          onPress={goNext} 
          backgroundColor={colors.NextButtonColor} 
          height={52} 
          width={300}
        />
        <AppText title='Skip' style={styles.skipButton}/>
      </View>
       </LinearGradient>
    </View>
   
  );

};

export default Marketing;
