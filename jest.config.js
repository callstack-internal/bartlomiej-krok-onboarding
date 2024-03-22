module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/_jest/setup.ts',
    '<rootDir>/_jest/setupTests.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(_jest-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
