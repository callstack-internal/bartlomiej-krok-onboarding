import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { WeatherItem } from '../network/queries/weather/weather.types';

import { Screens } from './routes.types';

export type RootNavigationParamList = {
  [Screens.WEATHER_LIST]: undefined;
  [Screens.WEATHER_DETAILS]: {
    item: WeatherItem;
  };
};

export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigationParamList>;
