import { useQuery } from '@tanstack/react-query';

import {
  WeatherListResponse,
  WeatherResponseItem,
} from 'src/network/api/api.types';
import { getWeatherList } from 'src/network/services/getWeatherList';

import { QueryKeys } from '../query.types';

import { WeatherItem } from './weather.types';

export function useWeatherListQuery(ids: number[]) {
  return useQuery({
    queryKey: [QueryKeys.weatherList, ids],
    queryFn: () => getWeatherList({ ids }),
    select: data => selectWeatherList(data),
  });
}

const selectWeatherList = (data: WeatherListResponse): WeatherItem[] =>
  data.list.map(item => mapWeatherResponseToItem(item));

export const mapWeatherResponseToItem = (
  item: WeatherResponseItem,
): WeatherItem => ({
  id: item.id.toString(),
  cityName: item.name,
  weatherDescription: item.weather[0]?.main,
  temp: `${item.main.temp} °F`,
  imageUri: getImageUri(item.weather[0]?.icon),
  humidity: item.main.humidity,
  pressure: item.main.pressure,
  windSpeed: item.wind.speed,
  cloudCover: item.clouds.all,
});

const getImageUri = (id: string) =>
  `https://openweathermap.org/img/w/${id}.png`;
