import { render, waitFor } from '@testing-library/react-native';
import { weatherDetailsMockData } from '_jest_/mocks/weatherList/weatherListMockData';
import { TestWrapperProvider } from '_jest_/testHelpers';

import { mapWeatherResponseToItem } from 'src/network/queries/weather/getWeatherListQuery';
import { WeatherDetails } from 'src/screens/WeatherDetails/WeatherDetails';
import { mapWeatherItemToList } from 'src/screens/WeatherDetails/WeatherDetails.utils';

const mockUseRoute = jest.fn(() => ({
  params: { item: mapWeatherResponseToItem(weatherDetailsMockData) },
}));

jest.mock('@react-navigation/native', () => ({
  __esModule: true,
  useRoute: () => mockUseRoute(),
}));

describe('WeatherList Screen Integration Test', () => {
  describe('WeatherDetails', () => {
    it('renders without crashing', async () => {
      const { getByTestId } = render(<WeatherDetails />, {
        wrapper: TestWrapperProvider,
      });
      const detailsListComponent = getByTestId('test-WeatherDetails');

      await waitFor(async () => {
        expect(detailsListComponent).toBeOnTheScreen();
      });
    });

    it('renders header ', async () => {
      const { getByTestId } = render(<WeatherDetails />, {
        wrapper: TestWrapperProvider,
      });

      const header = getByTestId('test-ComplexListItem-0');
      await waitFor(async () => {
        expect(header).toBeOnTheScreen();
      });
    });

    it('renders details horizontal list items ', async () => {
      const { findByTestId } = render(<WeatherDetails />, {
        wrapper: TestWrapperProvider,
      });
      const listItems = mapWeatherItemToList(
        mapWeatherResponseToItem(weatherDetailsMockData),
      );
      for (const { testID } of listItems) {
        expect(await findByTestId(testID)).toBeOnTheScreen();
      }
    });
  });
});
