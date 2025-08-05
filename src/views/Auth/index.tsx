import React, { useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Text } from 'react-native-paper';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ImageType } from '@/types/img';
import { LoginForm } from '@/types/user';
import { styles, inputTheme } from './styles';
import { useAppDispatch } from '@/hooks/redux';
import { mixpanelTracker } from '@/lib/mixPanel';
import { schemaLogin } from '@/views/Auth/schema';
import { ButtonContainer } from '@/components/Button';
import { TextInput, TextInputIcon } from '@/components';
import * as AuthActions from '@/redux/modules/auth/actions';

const Auth = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: yupResolver(schemaLogin),
  });

  const handleAuthenticate = async (data: { pin: string }) => {
    mixpanelTracker.trackerEvent('auth_login_attempt')
    await dispatch(AuthActions.login(data));
  };

  const keyboardDismiss = () => Keyboard.dismiss();

  useEffect(() => {
    mixpanelTracker.trackerScreen('auth_screen');
  }, []);

  return (
    <TouchableWithoutFeedback onPress={keyboardDismiss} accessible={false}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.svgContainer}>
          <Image
            source={{ uri: ImageType.GIF_CART_BACK }}
            style={styles.image}
          />
        </View>

        <Text variant="titleLarge" style={styles.title}>
          Crie seu código PIN
        </Text>
        <Controller
          control={control}
          name="pin"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="PIN"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="number-pad"
              secureTextEntry
              style={styles.input}
              mode={'outlined'}
              maxLength={6}
              returnKeyType="done"
              left={<TextInputIcon icon="lock" />}
              theme={inputTheme}
              error={!!errors.pin}
              errorMessage={errors.pin?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPin"
          defaultValue=""
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Confirme o PIN"
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="number-pad"
              secureTextEntry
              style={styles.input}
              mode={'outlined'}
              maxLength={6}
              returnKeyType="done"
              left={<TextInputIcon icon="lock-check" />}
              theme={inputTheme}
              error={!!errors.confirmPin}
              errorMessage={errors.confirmPin?.message}
            />
          )}
        />
        <ButtonContainer
          loading={isSubmitting}
          onPress={handleSubmit(handleAuthenticate)}
        >
          Confirmar
        </ButtonContainer>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default Auth;
