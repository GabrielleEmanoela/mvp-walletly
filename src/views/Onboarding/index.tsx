import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from './styles';
import { ImageType } from '@/types/img';
import { useAppDispatch } from '@/hooks/redux';
import { mixpanelTracker } from '@/lib/mixPanel';
import { ButtonContainer } from '@/components/Button';
import { RootPublicStackParamList } from '@/navigation/types';
import * as AuthActions from '@/redux/modules/auth/actions';

type OnboardingProps = NativeStackScreenProps<
  RootPublicStackParamList,
  'Onboarding'
>;

const Onboarding = ({ navigation }: OnboardingProps) => {
  const dispatch = useAppDispatch();

  const onOnboardingCompleted = () => navigation.navigate('Auth');

  const handleStart = async () => {
    mixpanelTracker.trackerEvent('onboarding_start');
    dispatch(AuthActions.changeOnboardingHasCompleted()).then(
      onOnboardingCompleted,
    );
  };

  useEffect(() => {
    mixpanelTracker.trackerScreen('onboarding_screen');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={{
            uri: ImageType.CART_ONBOARDING,
          }}
          style={styles.svgImage}
        />
        <Text style={styles.title}>Bem-vindo ao Walletly!</Text>
        <Text style={styles.description}>
          Gerencie suas finanças de forma simples, segura e rápida. Acompanhe
          seu saldo, transações e muito mais!
        </Text>
      </View>
      <ButtonContainer onPress={handleStart}>Começar</ButtonContainer>
    </View>
  );
};

export default Onboarding;
