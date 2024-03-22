import { useCallback, useState } from 'react';

import { useRefreshOnFocus } from './useRefreshOnFocus';

// This custom hook is needed until the following issue is resolved:
// https://github.com/facebook/react-native/issues/32836
export function useRefreshing<T>(
  refetch: () => Promise<T>,
  options: { disableRefreshOnFocus?: boolean } = {},
) {
  const { disableRefreshOnFocus } = options;
  const [refreshing, setRefreshing] = useState(false);
  const refreshOnFocus = disableRefreshOnFocus ? undefined : refetch;

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  useRefreshOnFocus(refreshOnFocus);

  return { refreshing, handleRefresh };
}
