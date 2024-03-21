import { RouteProp, useRoute } from '@react-navigation/native';

import { RootNavigationParamList } from './RootNavigation.types.ts';

export const useLoggedRoute = <T extends keyof RootNavigationParamList>(
  routeName: T,
) => useRoute<RouteProp<RootNavigationParamList, typeof routeName>>();
