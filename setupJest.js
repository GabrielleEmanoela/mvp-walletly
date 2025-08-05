jest.mock('react-native-device-info', () => ({
  getVersion: jest.fn(() => '1.0.0'),
  getSystemName: jest.fn(() => 'iOS'),
  getDeviceId: jest.fn(() => 'mocked-device-id'),
  getUniqueId: jest.fn(() => 'unique-id'),
  getModel: jest.fn(() => 'mocked-model'),
  getBrand: jest.fn(() => 'mocked-brand'),
  getSystemVersion: jest.fn(() => '1.0.0'),
  isEmulator: jest.fn(() => false),
}));

jest.mock('@react-native-async-storage/async-storage', () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  mergeItem: jest.fn(),
  getAllKeys: jest.fn(),
  multiGet: jest.fn(),
  multiSet: jest.fn(),
}));

jest.mock('mixpanel-react-native', () => ({
  Mixpanel: jest.fn().mockImplementation(() => ({
    track: jest.fn(),
    init: jest.fn(),
    identify: jest.fn(),
  })),
}));

jest.mock('@shopify/flash-list', () => {
  const { FlatList } = require('react-native');
  return {
    FlashList: FlatList,
  };
});

jest.mock('react-native-paper', () => {
  const actualPaper = jest.requireActual('react-native-paper');
  return {
    ...actualPaper,
    Icon: () => null,
    MaterialCommunityIcon: () => null,
  };
});
