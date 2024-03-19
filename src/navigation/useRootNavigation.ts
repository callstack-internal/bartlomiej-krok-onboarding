import { useNavigation } from '@react-navigation/native';

import { RootNavigationProps } from './RootNavigation.types.ts';

export const useRootNavigation = () => useNavigation<RootNavigationProps>();
