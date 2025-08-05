import DeviceInfo from 'react-native-device-info';

export const getUniqueId = async (): Promise<string> => {
  return await DeviceInfo.getUniqueId();
};
