import React from 'react';
import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import { useAppSelector } from '@/hooks/redux';
import { PublicNavigator } from './public.navigator';
import { PrivateNavigator } from './private.navigator';
import { SplashNavigator } from './splash.navigator';

type RoutesProps = {
  themeMode: 'light' | 'dark';
  setThemeMode: (mode: 'light' | 'dark') => void;
};

export const Navigation = ({ themeMode }: RoutesProps) => {
  const navigationTheme =
    themeMode === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;

  const sessionStatus = useAppSelector((state) => state.auth.sessionStatus);

  const setupNavigator = () => {
    switch (sessionStatus) {
      case 'anonymous':
        return <PublicNavigator />;
      case 'private':
        return <PrivateNavigator />;
      default:
        return <SplashNavigator />;
    }
  };

  const navigator = setupNavigator();

  return (
    <NavigationContainer theme={navigationTheme}>
      {navigator}
    </NavigationContainer>
  );
};
