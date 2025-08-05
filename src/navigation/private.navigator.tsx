import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootPrivateStackParamList } from './types';

import { Home, TransactionDetails } from '@/views';
import { theme } from '@/theme/colors';

const Stack = createNativeStackNavigator<RootPrivateStackParamList>();

export const PrivateNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: theme.colors.primary },
        }}
      />
      <Stack.Screen
        name="TransactionDetails"
        component={TransactionDetails}
        options={{
          headerStyle: { backgroundColor: theme.colors.primary },
          headerTitle: 'Detalhes da Transação',
        }}
      />
    </Stack.Navigator>
  );
};
