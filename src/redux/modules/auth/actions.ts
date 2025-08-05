import { getUniqueId } from 'react-native-device-info';
import { Alert } from 'react-native';

import { AppDispatch, AppRootState } from '@/redux/store';
import * as AuthService from '@/services/auth.service';
import { KeychainService } from '@/lib/keychain/KeychainService';

import {
  loginAction,
  setOnboardingCompletedAction,
  setSessionStatusAction,
} from './slice';

export const login =
  (userData: { pin: string }) => async (dispatch: AppDispatch) => {
    try {
      const response = await AuthService.login(userData.pin);
      const defaultDeviceId = await getUniqueId();

      if (response) {
        await KeychainService.saveCredentials(userData.pin).then(() => {
          dispatch(
            loginAction({
              user: response,
              deviceId: defaultDeviceId,
            }),
          );
        });
      }
      return response;
    } catch {
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login.');
    }
  };

export const sessionStatus =
  (status: 'anonymous' | 'private') => (dispatch: AppDispatch) => {
    dispatch(setSessionStatusAction(status));
  };

export const changeOnboardingHasCompleted =
  () => (dispatch: AppDispatch, getState: AppRootState) => {
    const currentOnboardingStatus = getState().auth.isOnboardingCompleted;
    dispatch(setOnboardingCompletedAction(!currentOnboardingStatus));
    return Promise.resolve(true);
  };
