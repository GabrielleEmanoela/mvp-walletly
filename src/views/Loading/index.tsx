import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { mixpanelTracker } from '@/lib/mixPanel';
import { Loading as LoadingComponent } from '@/components';
import * as AuthActions from '@/redux/modules/auth/actions';
import { KeychainService } from '@/lib/keychain/KeychainService';
import { RootPrivateStackParamList } from '@/navigation/types';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';

type LoadingProps = NativeStackScreenProps<
  RootPrivateStackParamList,
  'Loading'
>;

export const Loading: React.FC<LoadingProps> = () => {
  const dispatch = useAppDispatch();

  const hasUserSession = !!useAppSelector((state) => state.auth.user);

  useEffect(() => {
    mixpanelTracker.trackerScreen('loading_screen');

    if (!hasUserSession) dispatch(AuthActions.sessionStatus('anonymous'));

    KeychainService.authenticateWithBiometry()
      .then((response) => {
        if (typeof response === 'boolean')
          return dispatch(AuthActions.sessionStatus('anonymous'));
        dispatch(AuthActions.login(response));
      })
      .catch(() => dispatch(AuthActions.sessionStatus('anonymous')));
  }, []);

  return <LoadingComponent />;
};
