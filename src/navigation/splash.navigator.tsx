import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Loading } from '@/views/Loading';
import { RootPrivateStackParamList } from './types';

const Stack = createNativeStackNavigator<RootPrivateStackParamList>();

export const SplashNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Loading"
        component={Loading}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
