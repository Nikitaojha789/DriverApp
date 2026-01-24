import * as Screen from '../screen';
import { createStackNavigator } from '@react-navigation/stack';
import { routeNames } from './route_name';
import { BottomTabNavigator } from './bottom_navigator';

const Stack = createStackNavigator();

export const MarketingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.marketing} component={Screen.Marketing} />
    </Stack.Navigator>
  );
};
export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='ProfileRegistration' screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.SignUp} component={Screen.SignUp} />
                  <Stack.Screen name={routeNames.ProfileRegistration} component={Screen.ProfileRegistration} />
            <Stack.Screen name={routeNames.OtpScreen} component={Screen.OtpScreen} />

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
