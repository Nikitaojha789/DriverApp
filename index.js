/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App.tsx';
import {name as appName} from './app.json';
import {StoreProvider} from './src/store/store';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { bottomMargin } from './src/asset/style/commonStyle.tsx';


const MyApp = () => {
  return (
    <SafeAreaProvider style={bottomMargin}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => MyApp);
