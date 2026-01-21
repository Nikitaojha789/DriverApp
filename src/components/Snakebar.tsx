import React, {useImperativeHandle} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AppTxt} from './AppHeading';
import {snakeBarText} from '../asset/style/commonStyle';
import {w} from '../constant/dimension';
import {InfoIcon} from '../asset/icons/icons';
import {Spacer} from './Spacer';

const DURATION = 500;
const DISPLAY_TIME = 4 * 1000; // 4 seconds

let msgRef: any;

// Function to trigger the Snackbar message with optional color
export const ShowSnakeBar = (msg: string, bgColor?: string) => {
  if (msgRef) {
    msgRef?.showMessage(msg, bgColor);
  }
};

const SnakeBar = React.forwardRef((props, ref) => {
  const animValue = useSharedValue(0);
  const [msg, setMsg] = React.useState('');
  const [bgColor, setBgColor] = React.useState('rgb(255, 50, 50)');

  const insets = useSafeAreaInsets();
  const bottom = insets.bottom;

  useImperativeHandle(ref, () => ({
    showMessage,
  }));

  const showMessage = (message = '', color?: string) => {
    setMsg(message);
    if (color) {
      setBgColor(color);
    } else {
      setBgColor('rgb(255, 50, 50)');
    }
    startAnimation();
  };

  const startAnimation = () => {
    animValue.value = withTiming(1, {duration: DURATION});
    setTimeout(() => {
      animValue.value = withTiming(0, {duration: DURATION});
    }, DISPLAY_TIME);
  };

  const rStyle = useAnimatedStyle(() => {
    return {
      ...styles.container,
      backgroundColor: bgColor,
      borderLeftColor: bgColor,

     transform: [
        {
          translateY: interpolate(animValue.value, [0, 1], [100, -20]),
        },
      ],
      bottom: bottom,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    };
  });

  return (
    <Animated.View style={rStyle}>
      <View style={{paddingLeft: 10}}>
        <InfoIcon />
      </View>
      <Spacer />
      <AppTxt title={msg} style={snakeBarText} center={false} />
    </Animated.View>
  );
});

export default SnakeBar;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: w(100),
    position: 'absolute',
    borderRadius: 0,
    justifyContent: 'center',
    borderLeftWidth: 5,
  },
});

// Component to render and attach Snackbar to ref
export const RenderSnakeBar = () => {
  return <SnakeBar ref={r => (msgRef = r)} />;
};
