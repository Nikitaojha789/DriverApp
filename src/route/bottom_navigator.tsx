import * as Screen from '../screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routeNames} from './route_name';
import {View, StyleSheet} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {ReactNode} from 'react';
import {colors} from '../constant/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableButton} from '../components/button/TouchableButton';
import {
  ExploreSvg,
  HomeSvg,
  ProfileSvg,
  WalletSvg,
} from '../asset/icons/icons';

const Tab = createBottomTabNavigator();

// Active icon: green (primary color)
// Inactive icon: black
const activeColor = colors.primary; // Green for active state
const inActiveColor = colors.black; // Black for inactive state

const getTabIcons = (routeName: string, isActive: boolean) => {
  const iconColor = isActive ? activeColor : inActiveColor;
  switch (routeName) {
    case routeNames.home:
      return <HomeSvg color={iconColor} size={24} />;
    case routeNames.Profile:
      return <ProfileSvg color={iconColor} size={24} />;
    default:
      return null;
  }
};

interface tabProps {
  icon?: ReactNode;
  onPress?: () => void;
  onLongPress?: () => void;
  accessibilityState?: {selected?: boolean};
  accessibilityLabel?: string;
  testID?: string;
}

const TabButton = ({
  icon,
  onPress,
  onLongPress,
  accessibilityState,
  accessibilityLabel,
  testID,
}: tabProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabButton}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}>
      <View style={styles.iconContainer}>{icon}</View>
    </TouchableButton>
  );
};

const BottomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const insets = useSafeAreaInsets();
  // const userDetail = useSelector((state: any) => state?.user);

  return (
    <View style={[styles.tabBarContainer, {marginBottom: insets.bottom + 20 || 0}]}>
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TabButton
              key={route.key}
              icon={getTabIcons(route.name, isFocused)}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
            />
          );
        })}
      </View>
    </View>
  );
};

export const BottomTabNavigator = () => {
  // const userDetail = useSelector((state: any) => state?.user);

  return (
    <Tab.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => <BottomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name={routeNames.home} component={Screen.Home} />
      {/* <Tab.Screen name={routeNames.AMCPackages} component={Screen.AMCPackages} /> */}
      {/* <Tab.Screen name={routeNames.Orders} component={Screen.Orders} /> */}
      <Tab.Screen name={routeNames.Profile} component={Screen.Profile} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    paddingHorizontal: 20,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.darkGray,
    paddingHorizontal: 10,
    height: 50,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
