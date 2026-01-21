// This component provides a customizable spinner/modal for loading states,
// as well as a footer activity indicator for lists in a React Native application.

import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../constant/color';
import {fonts} from '../asset';
import {spacer} from '../constant/dimension';
import {AppText} from './AppHeading';
import {SafeAreaView} from 'react-native-safe-area-context';

// Main component to display a modal with a spinner based on the loading state
export const AppSpinner = () => {
  const [show, setShow] = React.useState(false);
  const loading = useSelector((state: any) => state?.loading);

  // Effect to synchronize local show state with the loading state from the store
  React.useMemo(() => {
    if (loading !== show) {
      setShow(loading);
    }
  }, [loading]);

  // If show is false, do not render anything
  if (!show) {
    return null;
  }

  // Render the modal with a spinner
  return (
    <SafeAreaView>
      <Modal statusBarTranslucent animationType="fade" transparent>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // width,
            // height,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.modelColor,
          }}>
          <Spinner />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

type SpinnerProps = {
  color?: string;
  size?: ActivityIndicatorProps['size']; // 'small' | 'large' | number
};

// Component for the spinner, customizable with color and size props
export const Spinner = React.memo(
  ({color = colors.secondary, size = 'large'}: SpinnerProps) => {
    return <ActivityIndicator size={size} color={color} />;
  },
);

// Component to display a footer activity indicator for lists
export const ListFooterActivity = React.memo(
  ({
    activity = false, // Prop to control visibility
    backgroundColor = colors.lightGray,
    title = 'Loading more posts',
    height = 40,
    fontSize = 10,
    fontFamily = fonts.semiBold,
    color = colors.darkGray,
  }: {
    activity?: boolean;
    backgroundColor?: string;
    title?: string;
    height?: number;
    fontSize?: number;
    fontFamily?: string;
    color?: string;
  }) => {
    // If activity is false, do not render anything
    if (!activity) {
      return null;
    }

    // Render the footer activity indicator
    return (
      <View
        style={{
          padding: spacer,
          backgroundColor: backgroundColor,
          borderRadius: spacer,
          flexDirection: 'row',
          gap: spacer,
          alignItems: 'center',
          justifyContent: 'center',
          height: height,
          marginVertical: spacer,
        }}>
        <ActivityIndicator color={color} size="small" />
        <AppText
          title={title}
          fontSize={fontSize}
          fontFamily={fontFamily}
          color={color}
        />
      </View>
    );
  },
);
