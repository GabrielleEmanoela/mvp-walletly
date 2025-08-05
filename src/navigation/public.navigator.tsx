import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Auth, Onboarding } from '@/views';
import { useAppSelector } from '@/hooks/redux';
import { RootPublicStackParamList } from './types';

const Stack = createNativeStackNavigator<RootPublicStackParamList>();

export const PublicNavigator = () => {
  const isOnboardingCompleted = !!useAppSelector(
    (state) => state.auth.isOnboardingCompleted,
  );

  const initialRouteName = isOnboardingCompleted ? 'Auth' : 'Onboarding';

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Auth" component={Auth} />
    </Stack.Navigator>
  );
};
