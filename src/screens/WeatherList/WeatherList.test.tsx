import { render, waitFor, within } from '@testing-library/react-native';
import { fetchWeatherListSuccessNoData } from '_jest/mocks/weatherList/weatherListServiceMock.ts';
import { TestWrapperProvider } from '_jest/testHelpers.tsx';

import { WeatherList } from 'src/screens/WeatherList/WeatherList.tsx';

describe('WeatherList Screen Integration Test', () => {
  describe('When loaded data is empty', () => {
    beforeEach(() => fetchWeatherListSuccessNoData());

    it('should render ListEmptyComponent with proper text', async () => {
      const { findByTestId } = render(<WeatherList />, {
        wrapper: TestWrapperProvider,
      });

      const emptyComponent = await findByTestId('test-ListEmptyComponent');

      await waitFor(async () => {
        expect(emptyComponent).toBeOnTheScreen();
        expect(
          within(emptyComponent).queryByText('No items on list'),
        ).toBeOnTheScreen();
      });
    });
  });
});
