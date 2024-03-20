import { useNavigation } from '@react-navigation/native';

import { RootNavigationProps } from './RootNavigation.types';

export const useRootNavigation = () => useNavigation<RootNavigationProps>();
