import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

import { store } from './src/redux/store/store';
import { RootApp } from './src/rootApp';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import mobileAds from 'react-native-google-mobile-ads';

GoogleSignin.configure();

mobileAds().initialize();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <SafeAreaProvider>
          <RootApp />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </Provider>
  );
}
