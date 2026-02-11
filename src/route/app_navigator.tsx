import * as Screen from '../screen';
import { createStackNavigator } from '@react-navigation/stack';
import { routeNames } from './route_name';
import { BottomTabNavigator } from './bottom_navigator';
import { colors } from '../constant/color';

const Stack = createStackNavigator();

export const MarketingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name={routeNames.Marketing} component={Screen.Marketing} />
    </Stack.Navigator>
  );
};
export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{ headerShown: false}}>
      {/* <Stack.Screen name={routeNames.SignUp} component={Screen.SignUp} /> */}
      <Stack.Screen name={routeNames.LoginScreen} component={Screen.LoginScreen} />
      <Stack.Screen name={routeNames.OtpScreen} component={Screen.OtpScreen} />
      <Stack.Screen name={routeNames.ProfileRegistration} component={Screen.ProfileRegistration} />
      <Stack.Screen name={routeNames.AccountVerification} component={Screen.AccountVerification} />


    </Stack.Navigator>
  );
};

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen
        name={routeNames.bottomTabNavigator}
        component={BottomTabNavigator}
      />
      <Stack.Screen name={routeNames.TrackOrder} component={Screen.TrackOrder} />
      <Stack.Screen name={routeNames.OrderDelivered} component={Screen.OrderDelivered} />
      <Stack.Screen name={routeNames.OrderDetails} component={Screen.OrderDetails} />
      <Stack.Screen name={routeNames.ProfileScreen} component={Screen.ProfileScreen} />
      <Stack.Screen name={routeNames.EditProfile} component={Screen.EditProfile} />
      <Stack.Screen name={routeNames.VehicalInfo} component={Screen.VehicalInfo} />
      <Stack.Screen name={routeNames.PaymentMethod} component={Screen.PaymentMethod} />
      <Stack.Screen name={routeNames.Documents} component={Screen.Documents} />
    </Stack.Navigator>
  );
};
