import '@testing-library/react-native/extend-expect';

import { jest } from '@jest/globals';

jest.useFakeTimers();

jest.mock('react-native-config', () => ({
  API_URL: 'https://api.openweathermap.org',
  API_KEY: 'test-api-key',
}));
