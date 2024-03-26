import { PropsWithChildren } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { http, HttpResponse } from 'msw';

import { fakeServer } from './mocks/fakeServer.ts';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      gcTime: Infinity,
    },
  },
});

export const handleServerResponse = (
  url: string,
  data: any,
  status: number,
) => {
  fakeServer.use(
    http.get(url, () =>
      HttpResponse.json(data, {
        status: status,
      }),
    ),
  );
};

export const TestWrapperProvider = ({ children }: PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>
    <NavigationContainer>{children}</NavigationContainer>
  </QueryClientProvider>
);
