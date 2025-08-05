module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/setupJest.js',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native' +
      '|@react-native' +
      '|mixpanel-react-native' +
      '|@react-native-paper' +
      '|@react-navigation' +
      '|@shopify' +
      '|react-redux' +
      '|redux' +
      '|@reduxjs' +
      '|@react-native-community' +
      ')/)',
  ],
};
