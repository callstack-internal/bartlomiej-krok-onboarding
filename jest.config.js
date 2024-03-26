module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: [
    '<rootDir>/_jest_/setup.ts',
    '<rootDir>/_jest_/setupTests.ts',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(_jest_-)?@?react-native|@react-native-community|@react-navigation)',
  ],
};
