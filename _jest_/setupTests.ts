import { fakeServer } from './mocks/fakeServer';
import { queryClient } from './testHelpers';

beforeAll(() => {
  fakeServer.listen();
});

afterEach(() => {
  fakeServer.resetHandlers();
  queryClient.clear();
});

afterAll(() => {
  fakeServer.close();
});
