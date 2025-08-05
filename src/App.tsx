/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useMemo } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store, persistor } from '@/redux/store';
import {
  PaperProvider,
  DefaultTheme,
  MD3DarkTheme as PaperDarkTheme,
} from 'react-native-paper';
import { Navigation } from './navigation';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');

  const paperTheme = useMemo(
    () => (themeMode === 'dark' ? PaperDarkTheme : DefaultTheme),
    [themeMode],
  );

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <SafeAreaProvider>
            <Navigation themeMode={themeMode} setThemeMode={setThemeMode} />
          </SafeAreaProvider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
}

export default App;
