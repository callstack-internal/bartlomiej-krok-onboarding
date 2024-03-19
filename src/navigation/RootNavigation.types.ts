import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Screens } from './routes.types';

export type RootNavigationParamList = {
  [Screens.WEATHER_LIST]: undefined;
  [Screens.WEATHER_DETAILS]: undefined;
};

export type RootNavigationProps =
  NativeStackNavigationProp<RootNavigationParamList>;
