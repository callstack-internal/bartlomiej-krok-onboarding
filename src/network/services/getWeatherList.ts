import { WeatherListResponse } from '../api/api.types';
import { apiClient } from '../api/apiClient';
import { ApiRoutes } from '../api/apiRoutes';
import { API_KEY } from '../constants/config';

type WeatherListParams = {
  ids: number[];
};

export const getWeatherList = async (
  params: WeatherListParams,
): Promise<WeatherListResponse> => {
  const { ids } = params;

  const response = await apiClient.get(ApiRoutes.weatherGroup, {
    params: {
      id: ids.join(','),
      appid: API_KEY,
    },
  });
  return response.data;
};
