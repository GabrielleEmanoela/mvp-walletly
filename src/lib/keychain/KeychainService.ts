import { Alert, Platform } from 'react-native';
import * as Keychain from 'react-native-keychain';

import * as DeviceInfo from '../deviceInfo';
import { LoginForm } from '@/types/user';

export class KeychainService {
  static async saveCredentials(pin: string): Promise<void> {
    const deviceId = await DeviceInfo.getUniqueId();

    await Keychain.setGenericPassword(deviceId, pin, {
      service: 'br.com.walletly.keychain',
      accessControl:
        Keychain.ACCESS_CONTROL.BIOMETRY_CURRENT_SET_OR_DEVICE_PASSCODE,
      accessible: Keychain.ACCESSIBLE.WHEN_PASSCODE_SET_THIS_DEVICE_ONLY,
      storage: Platform.OS === 'ios' ? Keychain.STORAGE_TYPE.RSA : undefined,
    });
  }

  static async authenticateWithBiometry(): Promise<LoginForm | false> {
    try {
      const credentials = await Keychain.getGenericPassword({
        service: 'br.com.walletly.keychain',
        authenticationPrompt: {
          cancel: 'Cancelar',
          title: 'Autentique-se para acessar sua conta',
        },
      });
      if (!credentials) return false;

      return {
        pin: credentials.password,
        confirmPin: credentials.password,
      };
    } catch (error) {
      Alert.alert(
        `Erro de autenticação ${error}`,
        'Não foi possível autenticar com biometria. Por favor, tente novamente.',
      );
      // TODO: Handle Error
      return false;
    }
  }
  static async deleteCredentials(): Promise<void> {
    await Keychain.resetGenericPassword({
      service: 'br.com.walletly.keychain',
    });
  }
}
