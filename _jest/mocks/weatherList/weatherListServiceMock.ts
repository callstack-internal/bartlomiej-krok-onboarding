import { fakeServer } from '_jest/mocks/fakeServer';
import { weatherListMockData } from '_jest/mocks/weatherList/weatherListMockData';
import { handleServerResponse } from '_jest/testHelpers';
import { http, HttpResponse } from 'msw';

import { ApiRoutes } from 'src/network/api/apiRoutes';
import { API_URL } from 'src/network/constants/config';

export const fetchWeatherListSuccess = () => {
  handleServerResponse(
    `${API_URL}${ApiRoutes.weatherGroup}`,
    weatherListMockData,
    200,
  );
};

export const fetchWeatherListSuccessNoData = () => {
  handleServerResponse(
    `${API_URL}${ApiRoutes.weatherGroup}`,
    { cnt: 0, list: [] },
    200,
  );
};

export const fetchWeatherListError = () => {
  fakeServer.use(
    http.get(`${API_URL}${ApiRoutes.weatherGroup}`, () => {
      return HttpResponse.error();
    }),
  );
};
