import * as Screen from '../screen';
import { createStackNavigator } from '@react-navigation/stack';
import { routeNames } from './route_name';
import { BottomTabNavigator } from './bottom_navigator';
import { colors } from '../constant/color';

const Stack = createStackNavigator();

export const MarketingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.Marketing} component={Screen.Marketing} />
    </Stack.Navigator>
  );
};
export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='SignUp' screenOptions={{ headerShown: false }}>
      <Stack.Screen name={routeNames.SignUp} component={Screen.SignUp} />
      <Stack.Screen name={routeNames.LoginScreen} component={Screen.LoginScreen} />
      <Stack.Screen name={routeNames.OtpScreen} component={Screen.OtpScreen} />
      <Stack.Screen name={routeNames.ProfileRegistration} component={Screen.ProfileRegistration} />
      <Stack.Screen name={routeNames.AccountVerification} component={Screen.AccountVerification} />


    </Stack.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routeNames.bottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={routeNames.TrackOrder} component={Screen.TrackOrder} />
    </Stack.Navigator>
  );
};
