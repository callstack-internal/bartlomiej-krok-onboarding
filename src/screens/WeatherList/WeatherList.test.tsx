import {
  render,
  userEvent,
  waitFor,
  within,
} from '@testing-library/react-native';
import { weatherListMockData } from '_jest_/mocks/weatherList/weatherListMockData';
import {
  fetchWeatherListError,
  fetchWeatherListSuccess,
  fetchWeatherListSuccessNoData,
} from '_jest_/mocks/weatherList/weatherListServiceMock';
import { TestWrapperProvider } from '_jest_/testHelpers';

import { WeatherList } from 'src/screens/WeatherList/WeatherList';

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

  describe('When there is an error', () => {
    beforeEach(() => fetchWeatherListError());

    it('should render SomethingWentWrong component', async () => {
      const { findByTestId } = render(<WeatherList />, {
        wrapper: TestWrapperProvider,
      });

      const errorComponent = await findByTestId('test-SomethingWentWrong');

      await waitFor(() => {
        expect(errorComponent).toBeOnTheScreen();
      });
    });
    it('should refetch data on retry button press', async () => {
      const { findByTestId, findAllByTestId } = render(<WeatherList />, {
        wrapper: TestWrapperProvider,
      });
      const retryButton = await findByTestId('test-SomethingWentWrong-retry');
      expect(retryButton).toBeOnTheScreen();

      fetchWeatherListSuccess();

      const user = userEvent.setup();
      await user.press(retryButton);

      const weatherList = await findByTestId('test-WeatherList');
      const items = await findAllByTestId(/^test-ComplexListItem-/);

      expect(weatherList).toBeOnTheScreen();
      expect(items.length).toBe(weatherListMockData.list.length);
    });
  });
  describe('When data is successfully loaded', () => {
    beforeEach(() => fetchWeatherListSuccess());

    it('should render List with correct data', async () => {
      const { findByTestId, findAllByTestId } = render(<WeatherList />, {
        wrapper: TestWrapperProvider,
      });
      const weatherList = await findByTestId('test-WeatherList');
      const items = await findAllByTestId(/^test-ComplexListItem-/);

      await waitFor(async () => {
        expect(weatherList).toBeOnTheScreen();
        expect(items.length).toBe(weatherListMockData.list.length);
      });
    });
  });
});
