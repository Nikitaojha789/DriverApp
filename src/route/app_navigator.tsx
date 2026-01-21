import * as Screen from '../screen';
import { createStackNavigator } from '@react-navigation/stack';
import { routeNames } from './route_name';
import { BottomTabNavigator } from './bottom_navigator';

const Stack = createStackNavigator();

export const MarketingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.Welcome} component={Screen.Welcome} />
      <Stack.Screen name={routeNames.marketing} component={Screen.Marketing} />
    </Stack.Navigator>
  );
};
export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.login} component={Screen.Login} />
    </Stack.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen
        name={routeNames.bottomTabNavigator}
        component={BottomTabNavigator}
      /> */}

            <Stack.Screen name={routeNames.home} component={Screen.Home} />
      
    </Stack.Navigator>
  );
};
