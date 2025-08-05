import { NativeModules } from 'react-native';

export const getLocale = async () => {
  const LocaleModule = NativeModules.LocaleModule;
  if (!LocaleModule) return null;

  try {
    const result = await LocaleModule.getDeviceLanguage();
    if (!result) return null;

    return result.language || null;
  } catch {
    return null;
  }
};
