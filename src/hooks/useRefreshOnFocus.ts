import React from 'react';

import { useFocusEffect } from '@react-navigation/native';

export function useRefreshOnFocus<T>(refetch: (() => Promise<T>) | undefined) {
  const firstTimeRef = React.useRef(true);

  useFocusEffect(
    React.useCallback(() => {
      if (firstTimeRef.current) {
        firstTimeRef.current = false;
        return;
      }
      if (refetch) {
        refetch();
      }
    }, [refetch]),
  );
}
