import { ReactNode } from 'react';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './query.config';
import { useQueryFocus } from './query.hooks';

interface Props {
  children: ReactNode;
}

export const QueryProvider = (props: Props) => {
  const { children } = props;
  useQueryFocus();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
