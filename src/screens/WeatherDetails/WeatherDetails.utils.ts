import { ListItemHorizontalProps } from '../../components/ListItemHorizontal/ListItemHorizontal';
import { WeatherItem } from '../../network/queries/weather/weather.types';

export function mapWeatherItemToList(
  cityWeather: WeatherItem,
): ListItemHorizontalProps[] {
  return [
    {
      label: 'Humidity',
      value: `${cityWeather.humidity}%`,
    },
    {
      label: 'Pressure',
      value: `${cityWeather.pressure} hPa`,
    },
    {
      label: 'Wind Speed',
      value: `${cityWeather.windSpeed} mph`,
    },
    {
      label: 'Cloud Cover',
      value: `${cityWeather.cloudCover}%`,
    },
  ];
}
