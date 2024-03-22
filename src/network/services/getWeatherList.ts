import { WeatherListResponse } from 'src/network/api/api.types';
import { apiClient } from 'src/network/api/apiClient';
import { ApiRoutes } from 'src/network/api/apiRoutes';
import { API_KEY } from 'src/network/constants/config';

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
