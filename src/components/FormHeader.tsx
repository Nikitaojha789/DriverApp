import React, {useEffect, useRef} from 'react';
import {View, Animated, StyleSheet, Touchable} from 'react-native';
import Svg, {Circle} from 'react-native-svg';
import {Easing} from 'react-native-reanimated';
import {AppTxt} from './AppHeading';
import {colors} from '../constant/color';
import {formHeaderStyle, smallGreyText} from '../asset/style/commonStyle';
import {TouchableButton} from './button/TouchableButton';
import {BackButton} from './button/BackButton';
import {Icons} from '../asset';

// Make Circle an Animated Component
const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type FormHeaderProps = {
  title: string;
  step: number;
  totalSteps: number;
  showBar: boolean;
  // showBack: boolean;
  // onBack?: () => void;
};

const FormHeader = ({
  title,
  step,
  totalSteps,
  showBar = true,
}: // showBack,
// onBack,
FormHeaderProps) => {
  const progressAnim = useRef(new Animated.Value(0)).current;
  const circleRadius = 15;
  const circumference = 2 * Math.PI * circleRadius;

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: step / totalSteps,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  }, [step]);

  const strokeDashoffset = progressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {/* {showBack && (
          <TouchableButton onPress={onBack} style={{marginRight: 12}}>
            <Icons.BackIcon color={colors.black} />
          </TouchableButton>
        )} */}
        <View>
          <View style={styles.titleContainer}>
            <AppTxt title={title} style={formHeaderStyle} />
          </View>
          <AppTxt
            title={`Step ${step} of ${totalSteps}`}
            style={smallGreyText}
          />
        </View>
      </View>
      {showBar && (
        <View style={styles.progressCircleContainer}>
          <Svg height={70} width={70} viewBox="0 0 70 70">
            <Circle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="#E0E0E0"
              strokeWidth="4"
              fill="none"
            />
            <AnimatedCircle
              cx="35"
              cy="35"
              r={circleRadius}
              stroke="#007bff"
              strokeWidth="4"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </Svg>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  stepText: {
    fontSize: 14,
    color: 'gray',
    marginTop: 2,
  },
  progressCircleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginBottom: 4,
  },
});

export default FormHeader;
