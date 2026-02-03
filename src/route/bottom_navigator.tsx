import * as Screen from '../screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {routeNames} from './route_name';
import {View, StyleSheet, Text} from 'react-native';
import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React, {ReactNode} from 'react';
import {colors} from '../constant/color';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableButton} from '../components/button/TouchableButton';
import { h, w } from '../constant/dimension';
import { EarningTabIcon, HomeTabIcon, OrdesTabIcon } from '../asset/icons/HomeIcon';
import { fontSize } from '../asset/style/commonStyle';
import { fonts } from '../asset';
import { AppText } from '../components/AppHeading';

const Tab = createBottomTabNavigator();

// Active icon: green (primary color)
// Inactive icon: black
// const activeColor = colors.white; // Green for active state
// const inActiveColor = colors.purple; // Black for inactive state

const getTabIcons = (routeName: string, isActive: boolean) => {
  const iconColor = isActive ? colors.white : colors.purple;

  switch (routeName) {
    case routeNames.home:
      return <HomeTabIcon color={iconColor} />;
    case routeNames.OrderScreen:
      return <OrdesTabIcon color={iconColor} />;
    case routeNames.EarningScreen:
      return <EarningTabIcon color={iconColor} />;
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
    isFocused?: boolean;
     label?: string;
}

const TabButton = ({
  icon,
  label,
  isFocused,
  onPress,
  onLongPress,
}: tabProps) => {
  return (
    <TouchableButton
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabButton}
    >
      <View
        style={[
          styles.iconContainer,
          isFocused && styles.activeTab,
        ]}
      >
        {icon}

        {isFocused && (
          <AppText title={label || ''} fontSize={fontSize.normal}
  fontFamily={fonts.medium} color={colors.white} style={styles.tabLabel}/>
        )}
      </View>
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
  label={route.name}
  isFocused={isFocused}
  onPress={onPress}
  onLongPress={onLongPress}
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
      <Tab.Screen name={routeNames.OrderScreen} component={Screen.OrderScreen} />
      <Tab.Screen name={routeNames.EarningScreen} component={Screen.EarningScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    paddingHorizontal: 20,
        backgroundColor: colors.white,
  },
  tabBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.Grey,
    paddingHorizontal: 10,
    height: 60,
    marginBottom : h(2),
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  // iconContainer: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //       padding:10,
  //   backgroundColor:'#5C2E92', 
  //   paddingHorizontal:w(8),
  //   borderRadius:20,
  // },
  iconContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 8,
  paddingHorizontal: 12,
  borderRadius: 20,
},

activeTab: {
  backgroundColor: '#5C2E92',
  paddingHorizontal: w(5),
  borderRadius:25,
  height: 40,
},

tabLabel: {
  marginLeft: 8,
},

});
