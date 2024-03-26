import { ListItemHorizontalProps } from 'src/components';
import { WeatherItem } from 'src/network/queries/weather/weather.types';

export function mapWeatherItemToList(
  cityWeather: WeatherItem,
): ListItemHorizontalProps[] {
  return [
    {
      testID: 'test-ListItemHorizontal-humidity',
      label: 'Humidity',
      value: `${cityWeather.humidity}%`,
    },
    {
      testID: 'test-ListItemHorizontal-pressure',
      label: 'Pressure',
      value: `${cityWeather.pressure} hPa`,
    },
    {
      testID: 'test-ListItemHorizontal-windSpeed',
      label: 'Wind Speed',
      value: `${cityWeather.windSpeed} mph`,
    },
    {
      testID: 'test-ListItemHorizontal-cloudCover',
      label: 'Cloud Cover',
      value: `${cityWeather.cloudCover}%`,
    },
  ];
}
